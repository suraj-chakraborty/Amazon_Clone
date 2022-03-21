import Head from "next/head";
import Header from "../component/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Amazon 2.0 </title>
      </Head>

      {/* <h1>Amazon</h1> */}
      {/* HEADER */}
      <Header />
    </div>
  );
}
