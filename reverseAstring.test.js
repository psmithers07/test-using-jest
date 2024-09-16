const {reverseString} = require("./reverseAstring.js");

test("the string is reversed", ()=> {
    expect(reverseString("12345")).toBe("54321");
});

test("empty string does not fail with error", () => {
    expect(reverseString("")).toBe("");
});

test("not a string returns error message", () => {
    expect(reverseString(null)).toBe("null is not a string, please provide string argument");
});