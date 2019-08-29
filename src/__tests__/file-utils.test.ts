import { FileUtils } from "../file-utils";

const dirPath = "_my_cool_directory_";

test("should create a directory", async () => {
    // create dir
    const createRes: boolean = await FileUtils.createDirectory(dirPath);
    expect(createRes);
});

test("should delete a directory", async () => {
    // delete dir
    const delRes: boolean = await FileUtils.delete(dirPath);
    expect(delRes);
});
