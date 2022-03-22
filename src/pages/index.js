import Head from "next/head";
import Banner from "../component/Banner";
import Header from "../component/Header";
import ProductFeed from "../component/ProductFeed";

export default function Home({ products }) {
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
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
