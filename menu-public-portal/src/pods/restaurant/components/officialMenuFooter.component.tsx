import HowToRegIcon from "@mui/icons-material/HowToReg";
import * as classes from "../restaurant.component.styles";
import { Typography } from "@mui/material";

export const OfficialMenuFooter: React.FunctionComponent = () => {
  return (
    <div className={classes.footerOfficial}>
      <HowToRegIcon sx={{ color: "#009846" }} />
      <Typography variant="body2" component="h2" className={classes.groupsIcon}>
        Esta carta ha sido creada por el propietario del restaurante
      </Typography>
    </div>
  );
};
