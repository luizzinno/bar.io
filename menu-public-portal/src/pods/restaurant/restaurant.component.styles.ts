import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";

export const headingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const headerIndent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const typographyHeader = css`
  padding-right: 1rem;
`;

export const rowIndent = css`
  display: flex;
  justify-content: center;
`;

export const colorIcon = css`
  fill: #c5b100;
`;

export const fullWidth = (theme: Theme) => css`
  width: 100%;
`;

// https://github.com/emotion-js/emotion/issues/2252
export const dishesContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2)};
`;

export const dishContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: ${theme.spacing(2)};
`;

export const rationContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: ${theme.spacing(2)};
`;

export const dishPrice = (theme: Theme) => css`
  width: ${theme.spacing(20)};
  align-self: right;
  text-align: right;
`;

export const rationText = (theme: Theme) => css`
  width: 100%;
`;

export const rationIndent = (theme: Theme) => css`
  padding-left: ${theme.spacing(2)};
`;

export const rationDishContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(2)}; // Todo use relative margin mui
`;
