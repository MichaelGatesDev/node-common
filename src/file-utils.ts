import { promises as fsPromises } from "fs";
import * as fs from "fs";

export class FileUtils {

    public static async createDirectory(path: string, recursive?: boolean): Promise<boolean> {
        const exists: boolean = await this.checkExists(path);
        if (exists) { return false; }
        try {
            await fsPromises.mkdir(path, { recursive });
            return true;
        } catch (error) {
            return false;
        }
    }

    public static async checkExists(path: string): Promise<boolean> {
        try {
            await fsPromises.access(path, fs.constants.R_OK);
            return true;
        } catch (error) {
            return false;
        }
    }

    public static async isDirectory(path: string): Promise<boolean> {
        try {
            const stat = await fsPromises.stat(path);
            return stat.isDirectory();
        } catch (error) {
            return false;
        }
    }

    public static async isDirectoryEmpty(path: string): Promise<boolean> {
        try {
            if (!await this.isDirectory(path)) { return false; }
            const files = await fsPromises.readdir(path);
            return files.length === 0;
        } catch (error) {
            return false;
        }
    }

    public static async isFile(path: string): Promise<boolean> {
        try {
            const stat = await fsPromises.stat(path);
            return stat.isFile();
        } catch (error) {
            return false;
        }
    }

    public static async delete(path: string): Promise<boolean> {
        try {
            if (await this.isDirectory(path)) {
                await fsPromises.rmdir(path);
            } else if (await this.isFile(path)) {
                await fsPromises.unlink(path);
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    public static async writeJSON(path: string, content: any, replacer?: ((this: any, key: string, value: any) => any) | undefined): Promise<boolean> {
        try {
            await fsPromises.writeFile(path, JSON.stringify(content, replacer, 4));
            return true;
        } catch (error) {
            return false;
        }
    }

}
