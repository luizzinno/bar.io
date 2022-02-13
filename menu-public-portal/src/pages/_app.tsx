import type { AppProps } from "next/app";
import "@fontsource/dosis/400.css";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import { ThemeProvider } from "@mui/material/styles";
import { fishTheme } from "core/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={fishTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
