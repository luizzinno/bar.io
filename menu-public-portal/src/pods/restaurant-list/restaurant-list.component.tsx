import Link from "next/link";
import Head from "next/head";
import { routes } from "core/router";
import Typography from "@mui/material/Typography";
import { RestaurantInfo } from "./restaurant-list.vm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;

  const restaurantElements = restaurantList.map((restaurant) => {
    const { name, urlName, address, description, locationUrl, phone } =
      restaurant;
    return (
      <>
        <Card sx={{ maxWidth: 345 }} key={name}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {phone}
            </Typography>
            <PhoneEnabledIcon sx={{ color: "secondary.main" }} />
            <Typography variant="h6" component="h2">
              {address}
            </Typography>
            <Link href={locationUrl}>
              <a target="_blank">
                <PlaceIcon sx={{ color: "secondary.main" }} />
              </a>
            </Link>
            <Typography variant="h3" component="h1">
              {name}
            </Typography>
            <Typography variant="h6" component="h2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" href={routes.restaurant(urlName)}>
              VER CARTA
            </Button>
          </CardActions>
        </Card>
      </>
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
        {restaurantElements}
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export { RestaurantList };
