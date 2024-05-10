import React from "react";
import backgroundImage from "../../public/image1.jpeg"

const Homepage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen p-64"
        style={{ backgroundImage: "url('./image1.jpeg')", opacity: 0.9 }}
      >
        <h1 className=" text-base font-sans font-bold text-[#FF9C00] mt-4">
          WELCOME TO AGRISALES
        </h1>
        <p className="font-sans text-sm font-extrabold text-white mt-4 ">
          FIND YOURSELF HIGH QUALITY FRESH ORGANIC PRODUCTS FROM OUR FARMERS
          <br />
          HELPED BY OUR AMAZING AGRONOMISTS
        </p>
        <button className="bg-[#FF9C00] text-white font-bold py-2 px-4 rounded mt-6">
          <a href="./Login">Log in</a>
        </button>
      </div>
    </>
  );
};

export default Homepage;
