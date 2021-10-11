import { css } from 'emotion';

export const containerAdministratorList = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const administrator = css`
  display: flex;
  justify-content: space-between;
  width: 98%;
`;
