import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./componentsJsx/Homepage";
import Login from "./componentsJsx/Login";
import Signup from "./componentsJsx/Signup";
import Layout from "./componentsJsx/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import LearnMore from "./pages/LearnMore";
import Details from "./componentsJsx/Details";
import Farmerr from "./componentsJsx/Farmerr";
import Profile from "./componentsJsx/Profile";





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Details" element={<Details />} />

          <Route path="/" element={<Layout />}>
            <Route path="/Farmerr" element={<Farmerr />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
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



// import AppHeader from "./dashboard/components/AppHeader";
// import PageContent from "./dashboard/components/PageContnent";
// import SideMenu from "./dashboard/components/SideMenu";
// import AppFooter from "./dashboard/components/AppFooter";
 {/* <div className="App">
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>
        <AppFooter />
      </div> */}