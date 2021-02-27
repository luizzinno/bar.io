import { css } from 'emotion';
import { theme } from 'core/theme';

export const card = css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    /* width: 60%; */
    max-width: 480px;
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    /* width: 50%; */
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    /* width: 40%; */
  }
`;

export const title = css`
  text-align: center;
`;

export const formLogin = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin-top: 2em;
  }
`;
