import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Product</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </>
  );
  return (
    <div className="py-2 bg-base-300">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-josefin font-semibold bg-base-200 w-48 rounded-sm z-[1] mt-4 p-3 gap-3"
            >
              {navMenu}
            </ul>
          </div>
          <a className="text-2xl font-bold">devSpot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-josefin px-1 text-lg font-semibold gap-12 ">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 z-[1] mt-4 w-52 p-3 font-josefin font-semibold"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
