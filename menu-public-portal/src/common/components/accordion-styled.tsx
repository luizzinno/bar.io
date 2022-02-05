import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionSummaryStyled = styled((props) => (
  <MuiAccordionSummary
    {...props}
    sx={{ color: "white" }}
    expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
