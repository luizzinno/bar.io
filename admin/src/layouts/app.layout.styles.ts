import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  ${theme.breakpoints.up('sm')} {
    flex-flow: row wrap;
  }
`;

export const content = css`
  flex: 1 1 100%;
  display: flex;
  flex: row nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: calc(100vh - 3.5rem - 10.0625rem);
  box-sizing: border-box;
  margin-top: 3.5rem;
  padding: 1rem;

  ${theme.breakpoints.up('sm')} {
    min-height: calc(100vh - 4rem - 9rem);
    margin-top: 4rem;
    padding: 1.5rem;
  }

  ${theme.breakpoints.up('md')} {
    flex: 0 0 calc(100% - 20rem);
    width: calc(100% - 20rem);
  }
`;
