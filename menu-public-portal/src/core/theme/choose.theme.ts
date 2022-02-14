// TODO: move this to another place
import { Theme } from "@mui/material";
import { defaultTheme } from "./default.theme";
import { fishTheme } from "./fish.theme";
import { meatTheme } from "./meat.theme";
import { ThemeName } from "./model";

// and add unit tests
export const chooseTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case "meat":
      return meatTheme;
    case "fish":
      return fishTheme;
    default:
      return defaultTheme;
  }
};
