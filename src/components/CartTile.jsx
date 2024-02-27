import React from "react";
import { useDispatch } from "react-redux";
import {  removeFromCart } from "../redux/state-slice/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };
  return (
    <>
      <div className="flex p-4 items-center justify-between bg-red-400 mt-2 mb-2 rounded-xl">
        <div className="flex items-center p-3">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="h-20 rounded-lg"
          />
          <div className="ml-4">
          <h4 className="text-white text text-sm md:font-bold md:text-wrap">
            {cartItem.title}
          </h4>
          <p className="text-white text text-xl font-bold">
            {"$" + cartItem.price}
          </p>
          </div>
         
        </div>
        <div className="">
          <button
            onClick={handleRemoveFromCart}
            className=" bg-red-700 text-white border-2 rounded-lg font-bold px-4 py-2 hover:opacity-[.85]"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
