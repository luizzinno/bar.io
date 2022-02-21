import { createTheme } from "@mui/material/styles";

export const tapasTheme = createTheme({
  palette: {
    primary: {
      main: "#1BA3CE",
    },
    secondary: {
      main: "#EB1B1B",
    },
    text: {
      primary: "#232323",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    h3: {
      borderBottom: "3px solid #EB1B1B",
    },
  },
});