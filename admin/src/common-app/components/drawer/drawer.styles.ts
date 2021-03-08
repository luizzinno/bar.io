import { css } from 'emotion';
import { theme } from 'core/theme';

const drawerWidth = 20;

export const drawer = css`
  ${theme.breakpoints.up('md')} {
    flex: 0 0 ${drawerWidth}rem;
    width: ${drawerWidth}rem;
  }
`;

export const dockedPaper = css`
  border: 1px solid #000;
`;

export const drawerPaper = css`
  width: ${drawerWidth}rem;
`;

export const drawerHeader = css`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0, 1)};
  justify-content: flex-end;
  min-height: 3.5rem;

  ${theme.breakpoints.up('sm')} {
    min-height: 4rem;
  }
`;
