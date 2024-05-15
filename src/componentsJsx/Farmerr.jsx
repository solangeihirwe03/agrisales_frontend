import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon/FontAwesomeSvgIcon";
// import {
//   faUser,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons/FontAwesomeSvgIcon";

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
  );
};

export default Farmerr;
