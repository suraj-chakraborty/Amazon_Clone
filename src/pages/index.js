import Head from "next/head";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ProductFeed from "../component/ProductFeed";
import axios from "axios";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title> Amazon </title>
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
      <Footer />
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
