import { Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import * as classes from "./restaurant.component.styles";
import { RestaurantInfo, Items, PriceByRation } from "./restaurant.vm";
import { AccordionSummaryStyled } from "common/components";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { CommunityMenuFooter } from "./components/communityMenuFooter.component";
import { OfficialMenuFooter } from "./components/officialMenuFooter.component";
import { CommunityMenuHeader } from "./components/communityMenuHeader.component";
import { OfficialMenuHeader } from "./components/officialMenuHeader.component";

interface PropsRation {
  ration: PriceByRation;
}

const RationComponent: React.FC<PropsRation> = (props) => {
  const theme = useTheme();
  const { ration } = props;

  return (
    <>
      {ration.rationsTypes.map((item) => (
        <div key={item.unit} className={classes.dishContainer(theme)}>
          <div className={classes.rationText(theme)}>
            <Typography className={classes.rationIndent(theme)}>
              {item.unit}
            </Typography>
          </div>
          <div className={classes.dishPrice(theme)}>
            <Typography>{item.price} €</Typography>
          </div>
        </div>
      ))}
    </>
  );
};

interface PropsItemsComponent {
  items: Items[];
}
export const DishesComponent: React.FC<PropsItemsComponent> = (props) => {
  const { items } = props;
  const theme = useTheme();

  return (
    <div className={classes.dishesContainer(theme)}>
      {items.map((item) => (
        <div className={classes.dishContainer(theme)} key={item.name}>
          <div className={classes.fullWidth(theme)}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {item.name}
            </Typography>
            {item.description ? (
              <Typography>{item.description}</Typography>
            ) : null}
            {item.priceByRation ? (
              <RationComponent ration={item.priceByRation} />
            ) : null}
          </div>
          {item.price ? (
            <div className={classes.dishPrice(theme)}>
              <Typography>
                {item.price} €{item.unit}
              </Typography>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

interface Props {
  restaurantMenuInfo: RestaurantInfo;
}

export const RestaurantComponent: React.FC<Props> = (props) => {
  const { restaurantMenuInfo } = props;
  const {
    name,
    phone,
    address,
    locationUrl,
    description,
    communitySourceUrl,
    menu,
    menuDate,
    official,
  } = restaurantMenuInfo;

  return (
    <div className={classes.headingContainer}>
      {official ? (
        <OfficialMenuHeader menuDate={menuDate} />
      ) : (
        <CommunityMenuHeader menuDate={menuDate} />
      )}
      <div className={classes.headerIndent}>
        <div className={classes.rowIndent}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.typographyHeader}
          >
            {phone}
          </Typography>
          <PhoneEnabledIcon sx={{ color: "secondary.main" }} />
        </div>
        <div className={classes.rowIndent}>
          <Typography
            variant="subtitle2"
            component="h2"
            className={classes.typographyHeader}
          >
            {address}
          </Typography>
          <Link href={locationUrl}>
            <a target="_blank">
              <PlaceIcon sx={{ color: "secondary.main" }} />
            </a>
          </Link>
        </div>
        <Typography variant="h3" component="h1">
          {name}
        </Typography>
        <Typography variant="subtitle2" component="h2">
          {description}
        </Typography>
      </div>
      <div className={classes.accordion}>
        {menu.map((item) => (
          <Accordion key={item.name}>
            <AccordionSummaryStyled>
              <Typography>{item.name}</Typography>
            </AccordionSummaryStyled>
            <AccordionDetails>
              <DishesComponent items={item.items} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {official ? (
        <OfficialMenuFooter />
      ) : (
        <CommunityMenuFooter communitySourceUrl={communitySourceUrl} />
      )}
      <Typography variant="caption" component="h2" className={classes.menuDate}>
        {menuDate}
      </Typography>
    </div>
  );
};
