import React, { useEffect, useState, useContext } from "react";
import shop from "../../public/shop.jpg";
import shop1 from "../../public/shop1.png";
import shop2 from "../../public/shop2.png";
import shop3 from "../../public/shop3.png";
import shop4 from "../../public/shop4.png";
import axios from "axios";
import StarRating from "./StarRating";
import { CartContext } from "../features/ContextProvider";

const Shop = () => {
  const [harvests, setHarvest] = useState([]);
  const { dispatch } = useContext(CartContext)

  const handleFetch = async () => {
    await axios({
      method: "GET",
      url: "https://agri-sales-backend.onrender.com/api/agri-sales/products/productList",
    })
      .then((response) => {
        console.log(response);
        setHarvest(response.data.getProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="relative">
          <div
              style={{
                backgroundImage: `url(${shop})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                top: 0,
                left: 0,
                height: "80%",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                zIndex: -1
              }}
              className=" border border-blue-950 pb-56"
            >
              <div className="mt-20">
                <h3 className="flex justify-center  text-white font-bold text-xl z-60">
                  SHOP GRID
                </h3>
                <h3 className="flex justify-center"></h3>
              </div>
            </div>
            <div className="bg-black opacity-75 absolute top-0 left-0 right-0 bottom-0 z-1"></div>
            
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center px-4 lg:px-0">
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-full lg:w-[15rem] rounded-lg mt-4 lg:mt-[2rem] lg:ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem] lg:h-auto">
              <div>
                <img src={shop1} alt="" />
                <p className="flex justify-center">Dried Products</p>
                <p className="flex justify-center font-normal">9 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-full lg:w-[15rem] rounded-lg mt-4 lg:mt-[2rem] lg:ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem] lg:h-auto">
              <div>
                <img src={shop3} alt="" />
                <p className="flex justify-center">Juice</p>
                <p className="flex justify-center font-normal">9 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-full lg:w-[15rem] rounded-lg mt-4 lg:mt-[2rem] lg:ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem] lg:h-auto">
              <div>
                <img src={shop4} alt="" />
                <p className="flex justify-center">Vegetables</p>
                <p className="flex justify-center font-normal">3 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-full lg:w-[15rem] rounded-lg mt-4 lg:mt-[2rem] lg:ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem] lg:h-auto">
              <div>
                <img src={shop2} alt="" />
                <p className="flex justify-center">Beverages</p>
                <p className="flex justify-center font-normal">2 products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left lg:flex p-12 lg:justify-center lg:items-center">
          <p className="font-urbanist font-bold mb-2 text-2xl lg:text-3xl xl:text-4xl">
            Unearth the top-tier
          </p>
          <p className="font-urbanist font-bold text-2xl lg:text-3xl xl:text-4xl">
            Organic Products from our specialized Farmers
          </p>
        </div>

        <div>
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6 text-[#FF9C00] text-xl font-roboto mt-6">
              Shop Now
            </span>
          </span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center p-24 space-x-4  items-center font-urbanist">
          {harvests.map((harvest) => (
            <div
              key={harvest.id}
              className="flex flex-wrap w-[22%]  rounded-lg p-4 shadow-sm shadow-indigo-100 justify-center"
            >
              <img
                src={harvest.image.url}
                width={400}
                height={400}
                className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
              />
              <div className="flex flex-col justify-center gap-2 items-center py-5 pl-8 text-xl">
                <StarRating className="flex" />
                <div className="flex gap-10">
                  <p className="font-bold hover:text-[#45ab49]">
                    {harvest.productName}
                  </p>
                  <p className="font-semibold text-[#45ab49] text-md">${harvest.price}</p>
                </div>
                <button onClick={()=>dispatch({type: "Add", harvest: harvest})} className=" font-semibold bg-[#45ab49]  px-4 py-1.5 text-sm text-white flex gap-6 mt-4  rounded-md">Add to cart</button>
                <p className="">{harvest.productInstock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
