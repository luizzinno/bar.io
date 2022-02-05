import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";

export const headingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// https://github.com/emotion-js/emotion/issues/2252
export const dishesContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing(2)};
`;

export const rationDishContainer =  (theme: Theme) =>css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(2)}; // Todo use relative margin mui
`;
