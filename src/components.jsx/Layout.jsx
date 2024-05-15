import { Outlet } from "react-router-dom"
import Farmerr from "./Farmerr"
// import Header from "./Farmer"

const Layout = () => {
  return (
    <div>
      <Farmerr/>
      <Outlet/>

    </div>
  )
}

export default Layout
