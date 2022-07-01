import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../Firebase/firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const [admin] = useState(false); //from admin hook

  return (
    <div className="drawer drawer-mobile">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-50">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 sm:bg-transparent text-base-content">
          <li>
            <NavLink className="nav-link" to="">
              My Profile
            </NavLink>
          </li>

          {admin ? (
            <>
              <li>
                <NavLink className="nav-link" to="add-service">
                  Add a Service
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="add-blog">
                  Add a Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="manage-service">
                  Manage Services
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="manage-blog">
                  Manage Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="manage-booking">
                  Manage all Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="users">
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="booking" className="nav-link">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="add-review" className="nav-link">
                  Add a Review
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* React toast */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
