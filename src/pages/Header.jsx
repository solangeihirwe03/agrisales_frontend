import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg bg-white  z-20">
        <Link>
          <p className="text-4xl ">
            <span className="text-[#45AB49]">AGRI</span>sales
          </p>
        </Link>
        <ul className="flex items-center gap-3">
          <li className="flex space-x-4">
            <div className="flex justify-center items-center space-x-8">
              <NavLink to="/" className={"hover:text-[#45AB49]"}>
                Home
              </NavLink>
              <NavLink to="/AboutUs" className={"hover:text-[#45AB49]"}>
                About Us
              </NavLink>

              <NavLink to="/Shop" className={"hover:text-[#45AB49]"}>
                Shop
              </NavLink>
              <NavLink to="/Contact" className="hover:text-[#45AB49]">
                Contact Us
              </NavLink>

              <NavLink to="" className={"hover:text-[#45AB49]"}>
                {<IoPerson className="w-[20px]" />}
              </NavLink>

              <NavLink to="/cart" className={"hover:text-[#45AB49]"}>
                <FaCartShopping className="w-[20px]" />
              </NavLink>

              <li>
                <NavLink
                  to="/Login"
                  className="md:flex  py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
                >
                  Login
                </NavLink>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
