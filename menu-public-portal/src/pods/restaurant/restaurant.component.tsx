import { collapseClasses, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import * as classes from "./restaurant.component.styles";
import { RestaurantInfo, Items, PriceByRation } from "./restaurant.vm";
import { AccordionSummaryStyled } from "common/components";
import { useTheme } from "@mui/material/styles";

interface PropsRation {
  ration: PriceByRation[];
}

const RationComponent: React.FC<PropsRation> = (props) => {
  const theme = useTheme();
  const { ration } = props;

  return (
    <>
      {ration.map((item) => (
        <div key={item.rationName} className={classes.dishContainer(theme)}>
          <div className={classes.rationText(theme)}>
            <Typography className={classes.rationIndent(theme)}>
              {item.rationName}
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
        <div key={item.name} className={classes.dishContainer(theme)}>
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
              <Typography>{item.price} €</Typography>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

interface Props {
  restaurantName: string;
  restaurantMenuInfo: RestaurantInfo;
}

export const RestaurantComponent: React.FC<Props> = (props) => {
  const { restaurantName, restaurantMenuInfo } = props;
  const { name, heading1, heading2, menu } = restaurantMenuInfo;

  return (
    <div className={classes.headingContainer}>
      <Typography variant="h3" component="h1">
        {name}
      </Typography>
      <Typography variant="h6" component="h2">
        {heading1}
      </Typography>
      <Typography variant="h6" component="h2">
        {heading2}
      </Typography>
      <div>
        {menu.map((item) => (
          <Accordion>
            <AccordionSummaryStyled>
              <Typography>{item.name}</Typography>
            </AccordionSummaryStyled>
            <AccordionDetails>
              <DishesComponent items={item.items} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
