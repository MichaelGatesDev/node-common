import { StringUtils } from "../string-utils";

test("detect blank string", () => {
    const blank = "";
    const alsoBlank = " ";
    const blankUndef = undefined;
    const blankNull = null;

    expect(StringUtils.isBlank(blank)).toBe(true);
    expect(StringUtils.isBlank(alsoBlank)).toBe(true);
    expect(StringUtils.isBlank(blankUndef)).toBe(true);
    expect(StringUtils.isBlank(blankNull)).toBe(true);
});

test("should split up a string", () => {
    const compressed = "ThisIsACompressedString";
    const split = StringUtils.splitCompressedTitle(compressed);
    expect(split.length).toBe(5);
    expect(split.length).not.toBe(1);
});

test("should capitalize the first letter of each word", () => {
    const lower = "this is a string";
    const capitalized = "This Is A String";
    expect(StringUtils.capitalizeFirstLetter(lower)).toBe(capitalized);
});

test("should parse boolean", () => {
    // clearly true
    expect(StringUtils.parseBoolean("true")).toBe(true);
    expect(StringUtils.parseBoolean("on")).toBe(true);
    expect(StringUtils.parseBoolean("YES")).toBe(true);
    expect(StringUtils.parseBoolean("Enabled")).toBe(true);
    expect(StringUtils.parseBoolean("active")).toBe(true);
    // false
    expect(StringUtils.parseBoolean("false")).toBe(false);
    // anything else (also false)
    expect(StringUtils.parseBoolean("asdf")).toBe(false);
});

test("should pad an early month", () => {
    const month = 9;
    expect(StringUtils.pad(`${month}`, "0", 2).length).toBe(2);
    expect(StringUtils.pad(`${month}`, "0", 2)).toBe(`0${month}`);
});

test("should not pad a late month", () => {
    const month = 12;
    expect(StringUtils.pad(`${month}`, "0", 2).length).toBe(2);
    expect(StringUtils.pad(`${month}`, "0", 2)).toBe(`${month}`);
});

test("should internalize strings", () => {
    const standard = "this is a standard string";
    expect(StringUtils.internalize(standard).includes(" ")).toBe(false);
    const crazy = "this !@# IS #!(*@# a__ crazy string";
    expect(StringUtils.internalize(crazy).includes(" ")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("!")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("@")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("#")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("$")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("%")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("_")).toBe(false);
    expect(StringUtils.internalize(crazy).includes("-")).toBe(true); // still want our dashes
});

test("should strip all non-alphanumeric characters from a string", () => {
    const str = "Is this a question?";
    expect(StringUtils.stripNonAlphanumeric(str).includes("?")).toBe(false);
});
