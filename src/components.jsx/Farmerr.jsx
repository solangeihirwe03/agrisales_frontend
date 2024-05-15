import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Farmerr = () => {
  const [navBar, setNavBar] = useState(false);
  const showNavbar = () => {
    setNavBar(!navBar);
  };
  return (
    <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
      <Link>
        <p className="text-4xl ">
          <span className="text-[#45AB49]">AGRI</span>sales
        </p>
      </Link>
      <ul className="flex items-center gap-3">
        <li className="flex space-x-4">
          <NavLink to="/cart">
            {<FaCartShopping className="w-[20px]" />}
          </NavLink>
          <NavLink to="/Profile">
            {<IoPerson className="w-[20px]" />
 }
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
            Customer
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Farmerr;