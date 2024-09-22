import { Outlet } from "react-router-dom";
import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
