import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent, ThemeContextProvider } from 'core/theme';

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <ThemeProviderComponent>
        <RouterComponent />
      </ThemeProviderComponent>
    </ThemeContextProvider>
  );
};

export default hot(App);
