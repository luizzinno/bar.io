import { css } from 'emotion';
import { theme } from 'core/theme';

export const footer = css`
  flex: 1 1 100%;
  width: 100%;
  padding: 1rem;
  background-color: ${theme.palette.primary.main};
  z-index: ${theme.zIndex.drawer + 1};

  ${theme.breakpoints.up('sm')} {
    padding: 1.5rem;
  }
`;

export const container = css`
  margin: -0.75rem !important;
`;

export const root = css`
  text-align: center;
`;

export const imgFooter = css`
  max-height: 2.5rem;

  ${theme.breakpoints.up('sm')} {
    max-height: 3rem;
  }
`;

export const menuFooter = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-self: center;
  width: calc(100% + 2rem);
  margin: 0 -1rem;

  ${theme.breakpoints.up('sm')} {
    justify-content: flex-start;
  }
`;

export const itemMenuFooter = css`
  flex: 0 0 auto;
  width: auto;
  padding: 0 1rem;
  font-size: 0.75rem;
`;

export const linkMenuFooter = css`
  text-decoration: none;
  color: ${theme.palette.primary.contrastText};
`;

export const copyFooter = css`
  color: ${theme.palette.primary.dark};
  font-size: 0.75rem;
  text-align: center;

  ${theme.breakpoints.up('sm')} {
    text-align: right;
  }
`;
