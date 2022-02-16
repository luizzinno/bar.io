import { chooseTheme } from "./choose.theme";
import { Theme } from "@mui/material";
import { defaultTheme } from "./default.theme";
import { fishTheme } from "./fish.theme";
import { meatTheme } from "./meat.theme";

describe("chooseTheme(theme: ThemeName):Theme", () => {
  it("should return default theme when null is passed as argument", () => {
    const expected: Theme = defaultTheme;
    const result = chooseTheme(null);
    expect(result).toEqual(expected);
  });
  it("should return default theme when undefined is passed as argument", () => {
    const expected: Theme = defaultTheme;
    const result = chooseTheme(undefined);
    expect(result).toEqual(expected);
  });
  it("should return fishTheme when fish is passed as argument", () => {
    const expected: Theme = fishTheme;
    const result = chooseTheme("fish");
    expect(result).toEqual(expected);
  });
  it("should return meatTheme when meat is passed as argument", () => {
    const expected: Theme = meatTheme;
    const result = chooseTheme("meat");
    expect(result).toEqual(expected);
  });
});
