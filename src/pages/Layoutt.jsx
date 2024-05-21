import { Outlet } from "react-router-dom"
import Farmerr from "./Farmerr"

const Layout = () => {
  return (
    <div>
      <Farmerr/>
      <Outlet/>

    </div>
  )
}

export default Layout
