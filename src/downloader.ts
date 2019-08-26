import fs from "fs";
import https from "https";
import { StringUtils } from "./string-utils";
import { FileUtils } from "./file-utils";

export class WebDownloader {
    private url: string;
    private destination: string;

    public constructor(url: string, destination: string) {
        this.url = url;
        this.destination = destination;
    }

    public async download(): Promise<boolean> {
        const self = this;
        const temporaryDestination = `${this.destination}.download`;
        const stream = fs.createWriteStream(temporaryDestination);
        let result = false;

        const request = https.get(this.url, (response): void => {
            let writeStream = response.pipe(stream);
            writeStream.on("finish", (): void => {
                fs.rename(temporaryDestination, self.destination, (err): void => {
                    if (err) {
                        fs.unlink(temporaryDestination, (err): void => {
                            if (err) {
                                throw new Error(`Failed to delete temporary file ${temporaryDestination}`);
                            }
                            result = true;
                        });
                        throw new Error(`Failed to rename downloaded file ${temporaryDestination} => ${self.destination}`);
                    }
                });
            });
        });
        request.on("error", (err): void => {
            console.error((err).toString());
        });
        return result;
    }
}

export class GoogleDriveDownloader {

    private static BASE_URL: string = "https://docs.google.com/spreadsheets/d/{docID}/export?format={format}";
    // private static SHEET_URL: string = "https://docs.google.com/spreadsheets/d/{docID}/export?format={format}&gid={sheetID}";

    public static async downloadSpreadsheet(docID: string, format: string, destination: string): Promise<boolean> {
        if (StringUtils.isBlank(docID)) {
            throw new Error("The docID of the spreadsheet must be specified");
        }
        if (StringUtils.isBlank(format)) { format = "xlsx"; };
        if (StringUtils.isBlank(destination)) {
            throw new Error("The destination of the spreadsheet must be specified");
        }

        if (await FileUtils.checkExists(destination)) return false;

        const downloadURL = GoogleDriveDownloader.BASE_URL
            .replace("{docID}", docID)
            .replace("{format}", format);

        let downloader = new WebDownloader(
            downloadURL,
            destination
        );

        try {
            await downloader.download();
            return true;
        } catch (error) {
            throw error;
        }
    }

}