import { Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as classes from "./restaurant.component.styles";
import { RestaurantInfo, Items, PriceByRation } from "./restaurant.vm";

interface PropsRation {
  ration: PriceByRation[];
}

const RationComponent: React.FC<PropsRation> = (props) => {
  const { ration } = props;
  return (
    <>
      <div>
        {ration.map((item) => (
          <div key={item.rationName} className={classes.rationDishContainer}>
            <Typography>{item.rationName}</Typography>
            <Typography>Precio: {item.price} €</Typography>
          </div>
        ))}
      </div>
    </>
  );
};

interface PropsItemsComponent {
  items: Items[];
}
export const DishesComponent: React.FC<PropsItemsComponent> = (props) => {
  const { items } = props;

  return (
    <div className={classes.dishesContainer}>
      {items.map((item) => (
        <div key={item.name}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {item.name}
          </Typography>
          {item.description ? (
            <Typography>Descripción: {item.description}</Typography>
          ) : null}
          {item.price ? <Typography>Precio: {item.price} €</Typography> : null}
          {item.priceByRation ? (
            <ul>
              <RationComponent ration={item.priceByRation} />
            </ul>
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
        Carta de {name}
      </Typography>
      <Typography variant="h5" component="h2">
        {heading1}
      </Typography>
      <Typography variant="h5" component="h2">
        {heading2}
      </Typography>
      <div>
        {menu.map((item) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DishesComponent items={item.items} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <h3>{item.name}</h3>
            <ul>
              <DishesComponent items={item.items} />
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
