import GroupsIcon from "@mui/icons-material/Groups";
import * as classes from "../restaurant.component.styles";
import { Typography } from "@mui/material";

export const CommunityMenuFooter: React.FunctionComponent = () => {
  return (
    <div className={classes.footerNoOfficial}>
      <GroupsIcon sx={{ color: "#980000" }} />
      <Typography variant="body2" component="h2" className={classes.groupsIcon}>
        Esta carta ha sido creada por la comunidad, si eres el propiertario del
        restaurante puedes actualizarla de forma gratuita, ponte en contacto con
        nosotros en <a href="#">info@gastrobar.net</a>
      </Typography>
    </div>
  );
};
