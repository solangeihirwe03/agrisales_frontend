import { NavLink } from "react-router-dom";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser, faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useState } from "react";
import Navigation from "./Navigation";

const More = () => {
    const [navBar, setNavBar] = useState(false);
    const showNavbar = ()=>{
        setNavBar(!navBar);
    }
  return (
    <ul className="flex items-center gap-3">
      <li>
        <NavLink to="/search">
          <FontAwesomeSvgIcon icon={faMagnifyingGlass} className="w-[20px]" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
        </NavLink>
      </li>
      <li>
        <NavLink>
          <FontAwesomeSvgIcon icon={faUser} className="w-[20px]" />
        </NavLink>
      </li>
      <li>
        <NavLink onClick={showNavbar}>
        <FontAwesomeSvgIcon icon={faBars} className="w-[20px]"/>
        </NavLink>
        {navBar && <Navigation/>}
      </li>
      <li>
        <NavLink
          to="/learnmore"
          className="md:flex sm:hidden py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
        >
          Learn More
        </NavLink>
      </li>
    </ul>
  );
}

export default More
