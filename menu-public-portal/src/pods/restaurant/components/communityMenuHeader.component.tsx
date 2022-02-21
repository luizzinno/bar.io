import GroupsIcon from "@mui/icons-material/Groups";
import * as classes from "../restaurant.component.styles";
import { Typography } from "@mui/material";

interface Props {
  menuDate: string;
}

export const CommunityMenuHeader: React.FunctionComponent<Props> = (props) => {
  const { menuDate } = props;
  return (
    <div className={classes.footerNoOfficial}>
      <GroupsIcon sx={{ color: "#980000" }} />
      <Typography
        variant="subtitle2"
        component="h2"
        className={classes.groupsIcon}
      >
        {menuDate} por la comunidad (carta orientativa, , si encuentras alguna
        entrada desfasada, nos lo puedes comunicar: info@gastrocarta.net)
      </Typography>
    </div>
  );
};