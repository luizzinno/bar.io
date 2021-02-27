import { css } from 'emotion';
import { theme } from 'core/theme';

const drawerWidth = 320;

export const drawer = css`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

export const dockedPaper = css`
  border: 1px solid #000;
`

export const drawerPaper = css`
  width: ${drawerWidth}px;
`;

export const drawerHeader = css`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0, 1)};
  justify-content: flex-end;
  min-height: 64px;
`;
