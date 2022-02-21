import { createTheme } from "@mui/material/styles";

export const breweryTheme = createTheme({
  palette: {
    primary: {
      main: "#CE9C1B",
    },
    secondary: {
      main: "#862447",
    },
    text: {
      primary: "#232323",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    h3: {
      borderBottom: "3px solid #862447",
    },
  },
});