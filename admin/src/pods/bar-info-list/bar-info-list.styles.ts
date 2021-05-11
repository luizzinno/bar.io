import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  ${theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  ${theme.breakpoints.up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${theme.breakpoints.up('lg')} {
    width: 75%;
  }
`;

export const items = css`
  background-color: ${theme.palette.background.paper};
  border-radius: ${theme.shape.borderRadius}px;
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