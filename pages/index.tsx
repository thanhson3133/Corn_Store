import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "./home";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Corn Store</title>
        <link rel="icon" href="/corn-store.jpeg" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
