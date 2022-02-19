import { createTheme } from "@mui/material/styles";

export const asianTheme = createTheme({
  palette: {
    primary: {
      main: "#CE1BA7",
    },
    secondary: {
      main: "#6E0095",
    },
    text: {
      primary: "#232323",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    h3: {
      borderBottom: "3px solid #6E0095",
    },
  },
});