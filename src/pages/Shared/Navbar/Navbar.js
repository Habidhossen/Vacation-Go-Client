import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/styles/style.css";
import auth from "../../../Firebase/firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

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
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/blogs">
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
          <span>Vacation</span> Go
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label htmlFor="side-drawer" className="btn btn-primary lg:hidden">
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
      </div>
      <div className="navbar-end">
        {user ? (
          // <button onClick={logout} className="text-error">
          //   LOGOUT
          // </button>

          <div className="dropdown dropdown-hover dropdown-end">
            <label
              tabindex="0"
              className="flex items-center gap-3 text-primary"
            >
              {user.displayName}
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
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="dashboard" className="text-center mb-2">
                  View Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-white font-semibold text-sm flex justify-center bg-primary hover:bg-rose-600"
                >
                  LOGOUT <HiOutlineLogout />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
