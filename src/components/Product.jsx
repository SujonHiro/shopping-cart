import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/state-slice/cart-slice";

const Product = ({ product }) => {
  let dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div>
      <div className="group flex flex-col items-center border-t-2 shadow-lg gap-2 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="w-60 truncate text-center">{product.title}</p>
        </div>
        <div>
          <p className="w-60 truncate text-center">{`$${product.price}`}</p>
        </div>
        <div className="flex justify-center w-full mt-6">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className=" bg-red-700 text-white border-2 rounded-lg font-bold px-4 py-2 hover:opacity-[.85]"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove From Cart"
              : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
