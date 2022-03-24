import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice.js";

function CheckoutProduct({
  rating,
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  // to add same item multiple times
  const addItem = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };

    dispatch(addToBasket(product));
  };
  const removeItem = () => {
    // remove Item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price * 72} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500"> Free Delevery</p>
          </div>
        )}
      </div>

      {/* add and remove from Cart */}
      <div className="flex flex-col space-y-3 my-auto justify-items-center">
        <button className="button" onClick={addItem}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItem}>
          {" "}
          Delete from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
