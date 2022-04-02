import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, images, timestamp }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            {" "}
            <Currency quantity={amount} currency="INR" />
            -Next day delevery
            <Currency quantity={amountShipping} currency="INR" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-400">
          {items.length} ITEMS
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-27 truncate ">
          Order id-{id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        {" "}
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img className="h-20 object-contain sm:h-32" src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
