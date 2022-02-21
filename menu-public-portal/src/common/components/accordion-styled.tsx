import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummaryProps } from "@mui/material/AccordionSummary";

export const AccordionSummaryStyled = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
  />
))(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(0.3),
}));
