import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div className="lg:flex">
      <div>
        <DashboardMenu />
      </div>
      <div className="md:flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
