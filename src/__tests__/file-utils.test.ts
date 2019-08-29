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

const jsonPath = "_test.json";
test("should write a json file", async () => {
    // write json
    const writeRes: boolean = await FileUtils.writeJSON(jsonPath, { name: "test", description: "hello world" });
    expect(writeRes);
});
test("should delete the just-created json file", async () => {
    // delete json
    const delRes: boolean = await FileUtils.delete(jsonPath);
    expect(delRes);
});
