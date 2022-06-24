import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
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
            <Link to="">My Profile</Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link to="add-product">Add a Product</Link>
              </li>
              <li>
                <Link to="manage-product">Manage Products</Link>
              </li>
              <li>
                <Link to="manage-order">Manage all Orders</Link>
              </li>
              <li>
                <Link to="make-admin">Make Admin</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="review">Add a Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* React toast */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Dashboard;
