import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Layout from './pages/Layout'
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import LearnMore from "./pages/LearnMore";
import Forgot from "./components.jsx/Forgot";
import Farmerr from "./components.jsx/Farmerr";
import Profile from "./pages/Profile";
import Otpinput from "./components.jsx/Otpinput";
import Home from './pages/Home'
import LayoutFarm from "./pages/LayoutFarm";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/Otpinput" element={<Otpinput />} />
            <Route path="/Farmerr" element={<Farmerr />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<LayoutFarm />}>
              <Route path="/shop" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/learnmore" element={<LearnMore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
