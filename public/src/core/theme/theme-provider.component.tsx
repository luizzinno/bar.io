import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import StylesProvider from '@material-ui/styles/StylesProvider';
import { ThemeContext } from './theme.context';

export const ThemeProviderComponent = (props) => {
  const { children } = props;
  const themeContext = React.useContext(ThemeContext);

  return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={themeContext.theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StylesProvider>
  );
};
