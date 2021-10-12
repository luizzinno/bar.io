import { css } from 'emotion';
import { theme } from 'core/theme';

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.palette.primary.main};
  border: none;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    color: ${theme.palette.primary.dark};
    padding: 1.1rem 1rem 0.9rem;
  }

  ${theme.breakpoints.up('sm')} {
    padding: 1.5rem;

    &:hover {
      padding: 1.65rem 1.5rem 1.35rem;
    }
  }
`;
export const title = css`
  margin-top: 0.35rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const info2 = css`
  margin-top: 1.25rem;
`;

export const info3 = css`
  margin-top: 1.25rem;
`;