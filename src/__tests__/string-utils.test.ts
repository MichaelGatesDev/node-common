import { StringUtils } from "../string-utils";

test("should split up a string", () => {
    const compressed = "ThisIsACompressedString";
    const split = StringUtils.splitCompressedTitle(compressed);
    expect(split.length).toBe(5);
    expect(split.length).not.toBe(1);
});
