import { Outlet } from "react-router-dom"
import Header from "./Farmer"

const LayoutFarm = () => {
  return (
    <div>
      <Header/>
      <Outlet/>

    </div>
  )
}

export default LayoutFarm
