import { ArrayUtils } from "../array-utils";

test("should remove an item from an array", () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = ArrayUtils.delete<number>(array, 3);
    expect(newArray.length).toBe(array.length - 1);
});

test("should remove multiple items from an array", () => {
    const array = [1, 2, 3, 3, 3, 4, 5];
    const newArray = ArrayUtils.delete<number>(array, 3);
    expect(newArray.length).toBe(4);
});
