import { EnumUtils } from "../enum-utils";

enum TestEnum {
    Alpha,
    AlphaBeta,
    Beta,
    Charlie,
}

test("should parse enums with different casing", (): void => {
    expect(EnumUtils.parse(TestEnum, "Alpha")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "ALPHA")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "alpha")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "AlPhA")).toBeDefined();
});

test("should parse enums with special characters", (): void => {
    expect(EnumUtils.parse(TestEnum, "Al_PHA")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "AL-PHA")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "ALPHA--__")).toBeDefined();
    expect(EnumUtils.parse(TestEnum, "_ALPHA_")).toBeDefined();
});

test("should not parse invalid enums", (): void => {
    expect(EnumUtils.parse(TestEnum, "Delta")).toBeUndefined();
    expect(EnumUtils.parse(TestEnum, "ALFA")).toBeUndefined();
    expect(EnumUtils.parse(TestEnum, "beita")).toBeUndefined();
    expect(EnumUtils.parse(TestEnum, "charlo")).toBeUndefined();
});

test("should not confuse enums", (): void => {
    expect(EnumUtils.parse(TestEnum, "Alpha")).not.toBe(EnumUtils.parse(TestEnum, "AlphaBeta"));
    expect(EnumUtils.parse(TestEnum, "Beta")).not.toBe(EnumUtils.parse(TestEnum, "AlphaBeta"));
    expect(EnumUtils.parse(TestEnum, "AlphaBeta")).not.toBe(EnumUtils.parse(TestEnum, "Alpha"));
    expect(EnumUtils.parse(TestEnum, "AlphaBeta")).not.toBe(EnumUtils.parse(TestEnum, "Beta"));
    expect(EnumUtils.parse(TestEnum, "Alpha Beta")).not.toBe(EnumUtils.parse(TestEnum, "Alpha"));
    expect(EnumUtils.parse(TestEnum, "Alpha_Beta")).not.toBe(EnumUtils.parse(TestEnum, "Beta"));
});
