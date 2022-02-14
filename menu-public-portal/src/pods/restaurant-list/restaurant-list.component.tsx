import Head from "next/head";
import { routes } from "core/router";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RestaurantInfo } from "./restaurant-list.vm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;

  const restaurantElements = restaurantList.map((restaurant) => {
    const { name, urlName, address, description, locationUrl, phone } =
      restaurant;
    return (
      <Card sx={{ maxWidth: 345 }} key={name}>
        <CardContent></CardContent>
        <CardActions>
          <Button
            variant="contained"
            href={routes.restaurant(urlName)}
          >
            VER CARTA
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div>
      <Head>
        <title>Tu Carta - Restaurantes</title>
        <meta
          name="description"
          content="La carta de tu restaurante favorito"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h5" component="h5">
          Listado restaurantes
        </Typography>

        <ul>{restaurantElements}</ul>
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export { RestaurantList };
