import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../component/CheckoutProduct";
import Header from "../component/Header";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
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
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your shopping busket is empty"
                : "Shopping basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={item.i}
                id={item.id}
                price={item.price}
                rating={item.rating}
                hasPrime={item.hasPrime}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* right */}
      </main>
    </div>
  );
}

export default Checkout;
