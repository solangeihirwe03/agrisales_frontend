import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex gap-4 items-center justify-center top-28 md:flex-row md:top-8 left-52'" >
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
