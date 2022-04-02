import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import db from "../../firebase";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Order from "../component/Order";

function Orders({ orders }) {
  // console.log("🚀 ~ file: orders.js ~ line 8 ~ Orders ~ orders", orders);
  const session = useSession();

  return (
    <div>
      <Header />
      <main className=" max-w-screen-xl mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length}-orders</h2>
        ) : (
          <h2>sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, images, timestamp }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>{" "}
      <Footer />;
    </div>
  );
}

export default Orders;

// server side render
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // get user credential
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  // firebase data
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp).unix(),
      // gathering the data from stripe and then we are accessing it in items
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
    },
  };
}
