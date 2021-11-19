import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { routes } from "core/router";

const Home: NextPage = () => {
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
        <h5>Listado restaurantes</h5>

        <Link href={routes.restaurant("papulinos")}>Papulinos</Link>
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export default Home;
