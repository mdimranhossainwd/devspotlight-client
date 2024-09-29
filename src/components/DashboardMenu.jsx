import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  const menu = (
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
        to="profile"
      >
        My Products
      </NavLink>
    </>
  );

  return (
    <div>
      <aside className="md:w-64 min-h-screen bg-gray-100 p-4">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <h2 className="text-lg font-semibold">Kevin Dukkon</h2>
            <p className="text-sm text-gray-500">hey@kevdu.co</p>
          </div>
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
