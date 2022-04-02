import { buffer } from "micro";
import * as admin from "firebase-admin";

// connection to firebase
const serviceAccount = require("../../../access.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// put data on firebase
const fulfillOrder = async (session) => {
  //   console.log("fullfilling order", session);
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: (session.amount_total / 100) * 72,
      amount_shipping: session.total_details.amount_shipping * 72,
      images: JSON.parse(session.metadata.images),
      timestamp: Math.floor(new Date().getTime() / 1000),
    })
    .then(() => {
      console.log(`success: order ${session.id} has been added to DB`);
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;
    // event from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(err.message);
      return res.status(400).send(`webhook error: ${err.message}`);
    }

    // hendle checkout session completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`webhook error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
