import type { GetStaticProps, NextPage } from "next";
import { RestaurantListContainer } from "pods/restaurant-list";
import { RestaurantInfo } from "pods/restaurant-list/restaurant-list.vm";
import { getRestaurantList } from "pods/restaurant-list/";

export const getStaticProps: GetStaticProps = async () => {
  const restaurantList: RestaurantInfo[] = await getRestaurantList();

  return {
    props: { restaurantList },
    revalidate: 600,
  };
};

interface Props {
  restaurantList: RestaurantInfo[];
}

const Home: NextPage<Props> = (props) => {
  const { restaurantList } = props;
  return <RestaurantListContainer restaurantList={restaurantList} />;
};

export default Home;
