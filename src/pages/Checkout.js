import Image from "next/image";
import React from "react";
import Header from "../component/Header";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* left */}
        <div className="flex-grow p-5 shadow-md">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={200}
            objectFit="contain"
          />
          <div className="flex flex-col p-5  space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your shopping busket</h1>
          </div>
        </div>

        {/* right */}
      </main>
    </div>
  );
}

export default Checkout;
