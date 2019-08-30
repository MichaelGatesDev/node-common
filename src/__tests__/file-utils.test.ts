import { FileUtils } from "../file-utils";

const dirPath = "_my_cool_directory_";
test("should create a directory", async () => {
    // create dir
    const createRes: boolean = await FileUtils.createDirectory(dirPath);
    expect(createRes).toBe(true);
});
test("should check if directory is empty", async () => {
    // check empty dir
    const emptyRes: boolean = await FileUtils.isDirectoryEmpty(dirPath);
    expect(emptyRes).toBe(true);
});
test("should delete a directory", async () => {
    // delete dir
    const delRes: boolean = await FileUtils.delete(dirPath);
    expect(delRes).toBe(true);
});

const jsonPath = "_test.json";
test("should write a json file", async () => {
    // write json
    const writeRes: boolean = await FileUtils.writeJSON(jsonPath, { name: "test", description: "hello world" });
    expect(writeRes).toBe(true);
});
test("should delete the just-created json file", async () => {
    // delete json
    const delRes: boolean = await FileUtils.delete(jsonPath);
    expect(delRes).toBe(true);
});
