import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layoutt";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import LearnMore from "./pages/LearnMore";
import Forgot from "./pages/Forgot";
import Farmerr from "./pages/Farmerr";
import Profile from "./pages/Profile";
import Otpinput from "./pages/Otpinput";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Otpinput" element={<Otpinput />} />
          <Route path="/Farmerr" element={<Farmerr />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Layout />}>
            <Route path="/shop" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/learnmore" element={<LearnMore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
