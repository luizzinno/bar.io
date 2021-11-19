import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { routes } from "core/router";
import Typography from '@mui/material/Typography';

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
        <Typography variant="h5" component="h5">
        Listado restaurantes
        </Typography>

        <Link href={routes.restaurant("papulinos")}>Papulinos</Link>
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export default Home;
