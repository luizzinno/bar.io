import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { UserProvider } from 'core/user';

const App: FC = () => {
  return (
    <ThemeProviderComponent>
      <UserProvider>
        <RouterComponent />
      </UserProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
