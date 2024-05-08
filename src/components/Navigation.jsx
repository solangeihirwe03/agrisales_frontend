import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="hidden md:flex gap-4 flex-col absolute  w-full items-center justify-center top-28 md:flex-row md:top-8" >
      <li className="hover:text-[#56A918] duration-300">
        <NavLink to="/about-us">About_us</NavLink>
      </li>
      <li className="hover:text-[#56A918] duration-300">
        <NavLink to="/contact">Contact_us</NavLink>
      </li>
      <li className="hover:text-[#56A918] duration-300">
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
  );
}

export default Navigation
