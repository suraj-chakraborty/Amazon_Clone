import Header from "../component/Header";
import Footer from "../component/Footer";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max max-w-screen-xl mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Thank you, your order is confirmed </h1>
          </div>
          <p>
            Thank you for choosing Amazon wish you had a good shopping
            experience to track your order click on the link below
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-10"
          >
            {" "}
            go to my orders
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default success;
