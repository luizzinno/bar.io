import { RestaurantList } from "./restaurant-list.component";
import { RestaurantInfo } from "./restaurant-list.vm";
//TODO get restaurantList from API
const restaurantList: RestaurantInfo[] = [
  { name: "Papulinos", urlName: "papulinos" },
  { name: "Hermanos Alba", urlName: "hermanosalba" },
];

const RestaurantListContainer: React.FC = () => {
  return <RestaurantList restaurantList={restaurantList} />;
};

export { RestaurantListContainer };
