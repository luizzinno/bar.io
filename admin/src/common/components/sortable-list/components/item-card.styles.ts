import { css } from 'emotion';
import { theme } from 'core/theme';

export const container = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;

  ${theme.breakpoints.up('sm')} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const card = css`
  flex: 1 1 100%;
  width: 100%;
  padding: 1.5rem 1.5rem 0.75rem;

  ${theme.breakpoints.up('sm')} {
    flex: 1 1 auto;
    width: auto;
    padding: 1.5rem 0.75rem 1.5rem 1.5rem;
  }
`;

export const input = css`
  width: 100%;
`;

export const actions = css`
  flex: 0 0 auto;
  width: auto;
  padding: 0 0.75rem 0.75rem;

  ${theme.breakpoints.up('sm')} {
    padding: 1.5rem 0.75rem 1.5rem 0;
  }
`;
