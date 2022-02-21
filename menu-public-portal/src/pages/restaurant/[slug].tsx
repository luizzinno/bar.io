import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { formatSlugFromUrlParam } from "common/helpers/slug.helpers";
import { RestaurantContainer } from "pods/restaurant";
import { getRestaurantMenu } from "pods/restaurant/restaurant.repository";
import { RestaurantInfo } from "pods/restaurant/restaurant.vm";

interface Props {
  menu: RestaurantInfo;
}

export const BarPage: React.FunctionComponent<Props> = (props) => {
  const { menu } = props;
  return <RestaurantContainer menu={menu} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = formatSlugFromUrlParam(context.params.slug as string);

  // TODO Add error un handling
  const restaurantNameWithOutBar = slug.substring(1);
  const menu = await getRestaurantMenu(restaurantNameWithOutBar);
  
  return {
    props: { slug, menu },
    revalidate: 600, // Seconds,  move this to a const or env const
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default BarPage;
