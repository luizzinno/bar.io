import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/alert-snackbar';
import React from 'react';
import { loadMenu } from './api';
import { MenuComponent } from './menu.component';
import { mapMenuApiModelToViewModel } from './menu.mapper';
import { createEmptyMenu, Menu } from './menu.vm';
import { ThemeContext } from 'core/theme';
import { Theme } from 'core/theme/theme.vm';
import { meat, fish } from 'core/theme';

interface MenuContainerProps {
  menuId: string;
}

export const MenuContainer: React.FunctionComponent<MenuContainerProps> = ({ menuId }) => {
  const [menu, setMenu] = React.useState<Menu>(createEmptyMenu());
  const [error, setError] = React.useState<string>(null);
  const themeContext = React.useContext(ThemeContext);
  const [themeName, setThemeName] = React.useState<string>('Meat');
  const themes: string[] = ['Meat', 'Fish'];

  const onLoadMenu = async () => {
    try {
      const menu = await loadMenu(menuId);
      setMenu(mapMenuApiModelToViewModel(menu));
    } catch (error) {
      setMenu(createEmptyMenu());
      setError(error.message);
    }
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  const newTheme = (theme: string): Theme => {
    switch (theme) {
      case `${themes[0]}`:
        return meat;
      case `${themes[1]}`:
        return fish;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeName(event.target.value);
    themeContext.setTheme(newTheme(event.target.value));
  };

  React.useEffect(() => {
    async function loadMenu() {
      await onLoadMenu();
    }
    loadMenu();
  }, []);

  return (
    <>
      <MenuComponent {...menu} onHandleChange={handleChange} themes={themes} theme={themeName} />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
