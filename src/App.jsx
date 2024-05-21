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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/shop" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/learnmore" element={<LearnMore/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
