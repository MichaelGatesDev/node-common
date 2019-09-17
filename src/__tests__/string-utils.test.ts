import { StringUtils } from "../string-utils";

test("should split up a string", () => {
    const compressed = "ThisIsACompressedString";
    const split = StringUtils.splitCompressedTitle(compressed);
    expect(split.length).toBe(5);
    expect(split.length).not.toBe(1);
});

test("should pad a young month", () => {
    const month = 9;
    expect(StringUtils.pad(`${month}`, "0", 2).length).toBe(2);
    expect(StringUtils.pad(`${month}`, "0", 2)).toBe(`0${month}`);
});

test("should not pad an old month", () => {
    const month = 12;
    expect(StringUtils.pad(`${month}`, "0", 2).length).toBe(2);
    expect(StringUtils.pad(`${month}`, "0", 2)).toBe(`${month}`);
});
