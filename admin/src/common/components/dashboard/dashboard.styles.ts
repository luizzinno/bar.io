import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    width: 75%;
  }
`;

export const rootDrawer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const items = css`
  background-color: ${theme.palette.background.paper};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);

  &:hover {
    background-color: ${theme.palette.background.default};
    box-shadow: 0px -2px 1px -1px rgb(0 0 0 / 20%), 0px -1px 1px 0px rgb(0 0 0 / 14%),
      0px -1px 3px 0px rgb(0 0 0 / 12%);
    filter: brightness(0.975);
  }
`;

export const itemsDrawer = css`
  &:hover {
    background-color: ${theme.palette.background.default};
  }
`;

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.palette.primary.main};
  border: none;
  padding: 1.5rem;
  text-decoration: none;

  &:hover {
    color: ${theme.palette.primary.dark};
    padding: 1.6rem 1.5rem 1.4rem;
  }

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    padding: 2rem;

    &:hover {
      padding: 2.15rem 2rem 1.85rem;
    }
  }
`;

export const itemDrawer = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: ${theme.palette.grey[700]};
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    color: ${theme.palette.primary.main};
  }
`;
