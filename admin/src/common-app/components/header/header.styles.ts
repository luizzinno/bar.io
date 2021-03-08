import { css } from 'emotion';
import { theme } from 'core/theme';

export const appBar = css`
  flex: 1 1 100%;
  width: 100%;
  z-index: ${theme.zIndex.drawer + 1};
`;

export const title = css`
  flex-grow: 1;
`;

export const user = css`
  flex-grow: 0;
`;

export const menuButton = css`
  margin-right: 1rem;

  ${theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const hide = css`
  display: none;
`;
