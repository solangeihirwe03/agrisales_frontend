import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components.jsx/Login";
import Signup from "./components.jsx/Signup";
import Layout from "./components.jsx/Layoutt";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import LearnMore from "./pages/LearnMore";
import Forgot from "./components.jsx/Forgot";
import Farmerr from "./components.jsx/Farmerr";
import Profile from "./components.jsx/Profile";
import Otpinput from "./components.jsx/Otpinput";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
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
