import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div className="lg:flex">
      <div className="min-h-full bg-gray-100">
        <DashboardMenu />
      </div>
      <div className="md:flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
