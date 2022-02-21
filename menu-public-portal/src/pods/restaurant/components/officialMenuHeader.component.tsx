import CheckIcon from "@mui/icons-material/Check";
import * as classes from "../restaurant.component.styles";
import { Typography } from "@mui/material";

interface Props {
  menuDate: string;
}

export const OfficialMenuHeader: React.FunctionComponent<Props> = (props) => {
  const { menuDate } = props;
  return (
    <div className={classes.headerOfficial}>
      <CheckIcon sx={{ color: "white" }} />
      <Typography
        variant="subtitle2"
        component="h2"
        className={classes.groupsIcon}
      >
        {menuDate} por el establecimiento (carta orientativa, si encuentras
        alguna entrada desfasada, nos lo puedes comunicar: info@gastrocarta.net)
      </Typography>
    </div>
  );
};