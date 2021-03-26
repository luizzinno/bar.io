import React from 'react';
import { MenuCategory, RestaurantInfo } from './menu.vm';
import { HeaderComponent, MenuListComponent } from './components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

interface MenuComponentProps {
  restaurantInfo: RestaurantInfo;
  categories: MenuCategory[];
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  themes: string[];
  theme: string;
}

export const MenuComponent: React.FunctionComponent<MenuComponentProps> = (props) => {
  const { restaurantInfo, categories, onHandleChange, themes, theme } = props;
  return (
    <>
      <TextField
        id='outlined-select-theme'
        select
        label='Select theme'
        value={theme}
        onChange={onHandleChange}>
        {themes.map((theme, index) => (
          <MenuItem key={index} value={theme}>
            {theme}
          </MenuItem>
        ))}
      </TextField>
      <HeaderComponent {...restaurantInfo} />
      <MenuListComponent categories={categories} />
    </>
  );
};
