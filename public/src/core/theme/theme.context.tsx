import * as React from 'react';
import { Theme } from './theme.vm';
import { meat } from './theme';

export interface ThemeContextEntity {
  theme: Theme;
  setTheme: (themeName: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextEntity>({
  theme: meat,
  setTheme: (theme: Theme) => {},
});

export const ThemeContextProvider = props => {
  const [theme, setTheme] = React.useState(meat);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
  );
};
