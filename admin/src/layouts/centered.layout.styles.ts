import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex: row nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  box-sizing: border-box;
  margin-top: 4rem;
  padding: 2rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    align-items: center;
    height: calc(100vh - 4rem);
  }
`;
