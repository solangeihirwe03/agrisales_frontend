import BuyerProfileChart from "../components/BuyerProfileChart";
import RecentOrder from "../components/RecentOrder";
import Sidebar from "../components/SideBar";
import Transactions from "../components/Transactions";
import DashboardStatGrid from "./DashboardStatsCharts";

const Admin = () => {
  return (
    <div className=" w-[100vw] overflow-y-auto flex">
      <Sidebar />
      <div>
        <DashboardStatGrid />
        <div className="flex w-full gap-4">
          <Transactions />
          <BuyerProfileChart />
        </div>
        <div className="flex py-3">
          <RecentOrder />
        </div>
      </div>
    </div>
  );
}

export default Admin
