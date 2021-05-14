import React from 'react';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
import { serverSideStyleIds } from './theme.constants';

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  React.useEffect(() => {
    [serverSideStyleIds.materialUI, serverSideStyleIds.emotion].forEach(
      (id) => {
        const serverSideStyles = document.querySelector(`#${id}`);
        if (serverSideStyles) {
          serverSideStyles.parentElement.removeChild(serverSideStyles);
        }
      }
    );
  }, []);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
