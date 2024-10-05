import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardMenu = () => {
  const { user } = useAuth();
  const [role] = useRole();

  console.log(role);

  const menu = (
    <>
      {role === "normal" && (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
            to="profile"
          >
            My Profile
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
            to="add-product"
          >
            Add Product
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
            to="my-product"
          >
            My Products
          </NavLink>
        </>
      )}
      {role === "moderator" && (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
            to="review-queue"
          >
            Review Queue
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#28b485]" : "")}
            to="reported"
          >
            Reported Contents
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div>
      <Helmet>
        <title>DevSpotLight || Dashboard Page</title>
      </Helmet>
      <aside className="md:w-64 min-h-screen bg-gray-100 p-4">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl font-josefin mt-5 text-[#28b485] font-bold ">
            DevSpotLight
          </h3>
        </div>
        <div className="divider"></div>

        <nav className="space-y-4 pt-4 items-center justify-center grid grid-cols-1 font-josefin">
          {menu}
        </nav>
      </aside>
    </div>
  );
};

export default DashboardMenu;
