import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// TODO: MarginBottom use relative spacing from theme
// color: "white",
export const AccordionSummaryStyled = styled((props) => (
  <MuiAccordionSummary
    {...props}
    sx={{ marginBottom: "2px" }}
    expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
  />
))(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));
