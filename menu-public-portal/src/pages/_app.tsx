import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme, fishTheme } from "core/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={fishTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
