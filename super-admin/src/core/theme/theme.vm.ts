import { Theme as DefaultTheme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { Typography } from '@material-ui/core/styles/createTypography';
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints';

export interface Theme extends DefaultTheme {
  palette: Palette;
  breakpoints: Breakpoints;
  typography: Typography;
  overrides?: Overrides;
  props?: ComponentsProps;
}
