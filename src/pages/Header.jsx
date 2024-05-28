import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <ul
      id="mobileNav"
      className={`absolute flex flex-col space-y-2 bg-white text-black top-16 left-0 w-full hover:text-[#45AB49] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <li>
        <a href="/" className="flex items-center py-2 px-4">
          Home
        </a>
      </li>
      <li>
        <a href="/AboutUs" className=" flex items-center py-2 px-4 ">
          About Us
        </a>
      </li>

      <li>
        <a href="/Shop" className="flex items-center py-2 px-4">
          Shop
        </a>
      </li>
      <li>
        <a href="/Contact" className="flex items-center py-2 px-4">
          Contact Us
        </a>
      </li>

      <li>
        <a href="/Product" className="flex items-center py-2 px-4">
          {<IoPerson className="w-[20px]" />}
        </a>
      </li>
      <li>
        <a href="/Cart" className="flex items-center py-2 px-4">
          {<FaCartShopping className="w-[20px]" />}
        </a>
      </li>

      <li>
        <button
          className="md:flex  py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
          onClick={toggleMenu}
        >
          <a href="/Login" className="flex items-center px-4 py-2">
            Login
          </a>
        </button>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className=" fixed bg-white drop-shadow-lg text-black font-bold top-0 left-0 w-full text-grey-500  flex justify-around items-center z-40">
        <div className="flex items-center">
          <p className="text-4xl font-semibold ">
            <span className="text-[#45AB49]">AGRI</span>sales
          </p>
        </div>

        <ul className="hidden md:flex space-x-4  hover:text-{#45ab49}">
          <li>
            <a href="/" className="flex items-center py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="/AboutUs" className=" flex items-center py-2 px-4 ">
              About Us
            </a>
          </li>

          <li>
            <a href="/Shop" className="flex items-center py-2 px-4">
              Shop
            </a>
          </li>
          <li>
            <a href="/Contact" className="flex items-center py-2 px-4">
              Contact Us
            </a>
          </li>

          <li>
            <a href="/Product" className="flex items-center py-2 px-4">
              {<IoPerson className="w-[20px]" />}
            </a>
          </li>
          <li>
            <a href="/Cart" className="flex items-center py-2 px-4">
              {<FaCartShopping className="w-[20px]" />}
            </a>
          </li>

          <li>
            <button
              className="md:flex  py-2 px-2 bg-[#45AB49] text-black font-medium rounded"
              onClick={toggleMenu}
            >
              <a href="/Login" className="flex items-center px-4 py-2">
                Login
              </a>
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menuToggle"
            className="text-black font-bold focus:outline-none text-2xl"
            onClick={toggleMenu}
          >
            <CiMenuFries />
          </button>
        </div>
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
