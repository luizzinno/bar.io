import { css } from 'emotion';
import { theme } from 'core/theme';

export const card = css`
  width: 100%;

  ${theme.breakpoints.up('sm')} {
    max-width: 30rem;
  }
`;

export const title = css`
  text-align: center;
`;
