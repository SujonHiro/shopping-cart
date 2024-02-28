import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "./CartTile";
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
          <div className="md:col-span-2 justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartTile key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className=" bg-slate-100 rounded flex flex-col justify-center w-60 h-60 p-3  bottom-20 right-10 space-y-5 mt-2">
            <h1 className="">Your Cart Summary</h1>
            <p>
              <span className="text-xl">Total Item</span>
              <span>:{cart.length}</span>
            </p>
            <p>
              <span>Total amount</span>
              <span>: {`$${totalCart}`}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-xl text-gray-900 font-bold mb-2">
            Your Cart is Empty
          </h1>

          <Link to="/">
            <button className="bg-green-700 text-white border-2 rounded-lg font-bold px-4 py-2 hover:opacity-[.85]">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
