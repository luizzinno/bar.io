import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { formatSlugFromUrlParam } from "common/helpers/slug.helpers";

interface Props {
  slug: string;
}

export const BarPage: React.FunctionComponent<Props> = (props) => {
  const { slug } = props;
  return <h1>Carta de {slug}</h1>;
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
