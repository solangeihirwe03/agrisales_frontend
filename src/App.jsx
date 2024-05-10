
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components.jsx/Homepage";
import Login from "./components.jsx/Login";
import Signup from "./components.jsx/Signup";
import Farmer from "./components.jsx/Farmer";
import Profile from "./components.jsx/Profile";
import Layout from "./components.jsx/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/Farmer" element={<Farmer />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
