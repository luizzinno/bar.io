import { createTheme } from "@mui/material/styles";

export const fishTheme = createTheme({
  palette: {
    primary: {
      main: "#0D0043",
    },
    text: {
      primary: "#0D0043",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    h3: {
      borderBottom: "3px solid #35A7CB",
    },
  },
});
