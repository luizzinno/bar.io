import { css } from "@emotion/css";
import { Theme } from "@mui/material/styles";
import { defaultTheme } from "core/theme";

export const headingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const accordion = css`
  margin-top: 1rem;
  @media (min-width: ${defaultTheme.breakpoints.values.sm}px) {
    width: 80%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.md}px) {
    width: 60%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.lg}px) {
    width: 50%;
  }
`;

export const menuDate = css`
  width: 100%;
  font-weight: bold;
  font-size: 0.6rem;
  text-align: right;
  @media (min-width: ${defaultTheme.breakpoints.values.sm}px) {
    width: 80%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.md}px) {
    width: 60%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.lg}px) {
    width: 50%;
  }
`;

export const footerNoOfficial = css`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  @media (min-width: ${defaultTheme.breakpoints.values.sm}px) {
    width: 80%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.md}px) {
    width: 60%;
  }
  @media (min-width: ${defaultTheme.breakpoints.values.lg}px) {
    width: 50%;
  }
`;

export const footerOfficial = css`
  display: flex;
  margin-top: 1rem;
`;

export const headerOfficial = css`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  background-color: #009846;
  color: white;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const groupsIcon = css`
  margin-left: 0.5rem;
`;

export const headerIndent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const typographyHeader = css`
  padding-right: 1rem;
`;

export const rowIndent = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  flex-direction: column;
`;

export const rationIndent = (theme: Theme) => css`
  padding-left: ${theme.spacing(2)};
`;

export const rationDishContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(2)}; // Todo use relative margin mui
`;
