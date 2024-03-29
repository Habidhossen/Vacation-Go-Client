import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/styles/style.css";
import auth from "../../../Firebase/firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  /*   // get current URL or location
  const location = useLocation();
  const currentUrl = location.pathname; */

  // handle logout
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className="nav-link" to="/service">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/blog">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar sticky top-0 z-50 bg-white py-3 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="nav-brand" to="/">
          Vacation Go.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end lg:hidden">
        {(currentUrl === "/dashboard" ||
          currentUrl === "/dashboard/booking" ||
          currentUrl === "/dashboard/add-review" ||
          currentUrl === "/dashboard/add-service" ||
          currentUrl === "/dashboard/add-blog" ||
          currentUrl === "/dashboard/manage-service" ||
          currentUrl === "/dashboard/manage-blog" ||
          currentUrl === "/dashboard/manage-booking" ||
          currentUrl === "/dashboard/make-admin") && (
          <label
            htmlFor="side-drawer"
            className="btn btn-primary text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        )}
      </div> */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabindex="0" className="flex items-center gap-3">
              <div className="flex flex-col text-right">
                <p className="font-mulish font-bold text-sm text-heading">
                  {user.displayName}
                </p>
                <p className="font-mulish font-medium text-xs text-text">
                  {user.email}
                </p>
              </div>
              <div className="avatar">
                <div className="w-8 rounded-full ring-1 ring-primary ring-offset-base-100 ring-offset-2">
                  {user.photoURL !== null ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                  )}
                </div>
              </div>
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <Link to="dashboard" className="nav-link text-sm">
                  View Profile
                </Link>
              </li>
              <li>
                <Link to="dashboard/booking" className="nav-link text-sm">
                  My Booking
                </Link>
              </li>
              <li>
                <Link to="dashboard/add-review" className="nav-link text-sm">
                  Add Review
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="py-2 bg-error text-white font-semibold text-sm flex justify-center mt-2"
                >
                  Logout <HiOutlineLogout />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className="custom-primary-btn" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
