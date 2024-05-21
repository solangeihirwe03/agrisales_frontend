import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { Cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(Cart.reduce((acc, curr) => acc + curr.Price, 0));
  }, [Cart]);
  console.log(Cart, totalCart);
  return (
    <div>
      {Cart && Cart.length ? (
        <>
          <div className="min-h-[80vh] gird md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {Cart.map((cartItem) => (
                <cartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 ">
              <h1 className="font-bold text-lg text-yellow-800">Your Cart Summary</h1>
              <p>
                <span className="text-gray-800 font-bold"></span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to="/Shop">
            <button>SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
}
