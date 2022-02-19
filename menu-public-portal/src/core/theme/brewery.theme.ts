import { createTheme } from "@mui/material/styles";

export const breweryTheme = createTheme({
  palette: {
    primary: {
      main: "#128400",
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