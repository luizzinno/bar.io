import { createTheme } from "@mui/material/styles";

export const meatTheme = createTheme({
  palette: {
    primary: {
      main: "#700000",
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
