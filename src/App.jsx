import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components.jsx/Homepage";
import Login from "./components.jsx/Login";
import Signup from "./components.jsx/Signup";
import Layout from "./components.jsx/Layout";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import LearnMore from "./pages/LearnMore";
import Forgot from "./components.jsx/Forgot";
import Farmerr from "./components.jsx/Farmerr";
import Profile from "./components.jsx/Profile";
import Otpinput from "./components.jsx/Otpinput";
import Front from "./components.jsx/Front";





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Otpinput" element={<Otpinput />} />
          <Route path="/Front" element={<Front/>} />

          <Route path="/" element={<Layout />}>
            <Route path="/Farmerr" element={<Farmerr />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Layout />}>
            
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/learnmore" element={<LearnMore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;



