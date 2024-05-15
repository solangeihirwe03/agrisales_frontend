import React from "react";
import { Link, NavLink } from "react-router-dom";


const Homepage = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen p-64"
        style={{ backgroundImage: "url('./image1.jpeg')", opacity: 0.9 }}
      >
        <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
          <Link>
            <p className="text-4xl ">
              <span className="text-[#45AB49]">AGRI</span>sales
            </p>
          </Link>
          <ul className="flex items-center gap-3">
            <li>
              <NavLink to="/Profile">
                {/* <FontAwesomeSvgIcon icon={faUser} className="w-[20px]" /> */}
              </NavLink>
            </li>
            <li>
              {open ? (
                <NavLink onClick={showNavbar}>
                  {/* <FontAwesomeSvgIcon
                icon={faBars}
                className="w-[20px] md:hidden"
              /> */}
                </NavLink>
              ) : null}
            </li>
            <li>
              <NavLink
                to="/Post"
                className="md:flex sm:hidden py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
              >
                Farmer
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className=" text-base font-sans font-bold text-[#FF9C00] ">
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
