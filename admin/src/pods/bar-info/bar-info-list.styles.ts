import { css } from 'emotion';

export const card = css`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const title = css`
  text-align: center;
`;

export const list = css`
  width: 90%;
  border-radius: 2em;

  margin-bottom: 2mm;
  background: #dddd;

  ul {
    list-style: none;
  }

  li {
    font-weight: bold;
    padding: 0.2em;
  }
`;
