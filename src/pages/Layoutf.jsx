import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layoutf = () => {
  return (
    <div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layoutf;
