import Head from "next/head";
import Banner from "../component/Banner";
import Header from "../component/Header";
import ProductFeed from "../component/Productfeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title> Amazon 2.0 </title>
      </Head>

      {/* <h1>Amazon</h1> */}
      {/* HEADER */}
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Productfeed */}
        <ProductFeed />
      </main>
    </div>
  );
}
