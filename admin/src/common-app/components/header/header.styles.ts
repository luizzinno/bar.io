import { css } from 'emotion';
import { theme } from 'core/theme';

export const appBar = css`
  z-index: ${theme.zIndex.drawer + 1};
`;

export const title = css`
  flex-grow: 1;
`;

export const user = css`
  flex-grow: 0;
`;

export const menuButton = css`
  margin-right: ${theme.spacing(2)}px;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    display: none;
  }
`;

export const hide = css`
  display: none;
`;
