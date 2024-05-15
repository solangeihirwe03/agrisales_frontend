import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Front.css";

const Home = () => {
  return (
    <div>
      <div className=" fixed w-full font-bold bg-white flex justify-between px-[10%] items-center py-2 text-lg">
        <Link>
          <p className="text-4xl ">
            <span className="text-[#45AB49]">AGRI</span>sales
          </p>
        </Link>
        <button className="bg-[#FF9C00] text-white font-bold py-2 px-4 rounded">
          <a href="./Login">Log in</a>
        </button>
      </div>

      <div
        className="bg-cover bg-center h-screen  text-white"
        style={{ backgroundImage: "url('./front.png')" }}
      >
        <div className="flex flex-col justify-center h-screen p-36 space-y-10">
          <h1 className="font-semibold text-xl">
            <span className="wel">
              Welcome to <span className="text-[#45AB49]">AGRI</span>
              <span className="text-black">sales</span>
            </span>
          </h1>
          <p className="para">
            Unearth Top-Tier Fresh Organic Picks Cultivated by <br />
            expert farmers, guided by our exceptional agronomists.
          </p>
          <p className="font-semibold text-xl">
            <span className="yer">
              5 years of experience in agricultural Farming
            </span>
          </p>

          <button className="bg-[#FF9C00] text-white font-bold text-base py-2 px-4 rounded mt-6 w-36">
            <a href="./Login">Shop Organic</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
