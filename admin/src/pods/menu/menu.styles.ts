import { css } from 'emotion';
import { theme } from 'core/theme';

export const link = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border: none;
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${theme.palette.primary.dark};

  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const icon = css`
  font-size: 1.5rem;
`;

export const title = css`
  margin-left: 1rem;
`;
