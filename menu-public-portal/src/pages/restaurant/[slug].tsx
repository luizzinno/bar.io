import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { formatSlugFromUrlParam } from "common/helpers/slug.helpers";
import { RestaurantContainer } from "pods/restaurant";

interface Props {
  slug: string;
}

export const BarPage: React.FunctionComponent<Props> = (props) => {
  const { slug } = props;
  return <RestaurantContainer restauranteName={slug} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = formatSlugFromUrlParam(context.params.slug as string);

  return {
    props: { slug },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default BarPage;
