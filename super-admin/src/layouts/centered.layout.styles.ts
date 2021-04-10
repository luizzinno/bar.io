import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex: column nowrap;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 13.5625rem);
  box-sizing: border-box;
  margin-top: 3.5rem;
  padding: 1rem;

  ${theme.breakpoints.up('sm')} {
    align-items: center;
    min-height: calc(100vh - 13rem);
    margin-top: 4rem;
    padding: 1.5rem;
  }

  ${theme.breakpoints.up('md')} {
  }

  @media (max-width: 320px) {
    min-height: calc(100vh - 14.0625rem);
    margin-top: 4rem;
  }
`;
