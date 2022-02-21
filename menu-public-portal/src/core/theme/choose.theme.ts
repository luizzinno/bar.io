// TODO: move this to another place
import { Theme } from "@mui/material";
import { defaultTheme } from "./default.theme";
import { fishTheme } from "./fish.theme";
import { meatTheme } from "./meat.theme";
import { ThemeName } from "./model";
import { italianTheme } from "./italian.theme";
import { breweryTheme } from "./brewery.theme";
import { tapasTheme } from "./tapa.theme";
import { asianTheme } from "./asian.theme";

// and add unit tests
export const chooseTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case "meat":
      return meatTheme;
    case "fish":
      return fishTheme;
    case "italian":
      return italianTheme;
    case "brewery":
      return breweryTheme;
    case "tapas":
      return tapasTheme;
    case "asian":
      return asianTheme;
    default:
      return defaultTheme;
  }
};
