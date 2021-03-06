import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../component/CheckoutProduct";
import Header from "../component/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Footer from "../component/Footer";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const session = useSession();
  const total = useSelector(selectTotal);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    // call the backend to create checkout session
    const checkoutSession = await axios.post("api/create-checkout-session", {
      items: items,
      email: session.data.user.email,
    });
    // redirect user
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };
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
        <div className="flex flex-col bg-white p-10 shadow-lg">
          {" "}
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total * 72} currency="INR" />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session ? "sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
