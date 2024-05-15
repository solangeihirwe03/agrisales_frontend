import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


const products = [
  { src: "maize.jpg", alt: "maize", name: "Legumes", id: 1 },
  { src: "potato.jpg", alt: "potato", name: "Potatoes", id: 2 },
  { src: "orange.jpg", alt: "orange", name: "Orange", id: 3 },
  { src: "carrot.jpg", alt: "carrot", name: "Carrots", id: 4 },
  { src: "vegetables.jpeg", alt: "vegetables", name: "Vegetables", id: 5 },
  { src: "apples.png", alt: "apples", name: "Apples", id: 6 },
  { src: "eggs.jpg", alt: "eggs", name: "Eggs", id: 7 },
  { src: "brocolli.jpg", alt: "brocolli", name: "Broccoli", id: 8 },
  { src: "maize.jpg", alt: "maize", name: "Legumes", id: 9 },
  { src: "maize.jpg", alt: "maize", name: "Legumes", id: 10 },
];

const Product = () => {
  const [addToCart, setAddToCart] = useState()
  return (
    <div className="flex flex-col w-full md:flex-wrap md:flex-row gap-7 py-20 text-lg justify-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="md:w-[20%] w-full flex flex-col items-center"
        >
          <div className="">
            <img
              src={product.src}
              alt={product.alt}
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
            />
            <p className="flex justify-center">{product.name}</p>
          </div>
          <div className="flex gap-2">
            <FaCartShopping  className="w-[20px]" />
            <Link to="/cart">
              <p onClick={() => addToCart(product.id)}>Add to Cart</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
