import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import Homepage from "./pages/Homepage";
import Login from './pages/Homepage';
import Signup from './pages/Signup';
import Layout from './pages/LayoutFarm';
import Farmer from './pages/Farmer';
import Profile from './pages/Profile'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route element={<Layoutfarm />}>
          <Route path="/Farmer" element={<Farmer />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="/shop" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/learnmore" element={<LearnMore />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
