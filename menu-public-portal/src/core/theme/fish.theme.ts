import { createTheme } from "@mui/material/styles";

export const fishTheme = createTheme({
  palette: {
    primary: {
      main: "#0D0043",
    },
    secondary: {
      main: "#35A7CB",
    },
    text: {
      primary: "#0D0043",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Dosis",
    h3: {
      borderBottom: "3px solid #35A7CB",
    },
  },
});
