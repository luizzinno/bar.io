import type { AppProps } from "next/app";
import "@fontsource/dosis/400.css";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "core/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
