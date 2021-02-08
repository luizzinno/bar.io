import { css } from 'emotion';

export const product = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const description = css`
  margin: 0;
  font-size: 0.875rem;
  font-style: italic;
`;

export const portion = css`
  flex: 1 1 auto;
  width: auto;
`;

export const price = css`
  flex: 0 0 auto;
  width: auto;
`;
