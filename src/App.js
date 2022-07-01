import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import AllReviews from "./pages/AllReviews/AllReviews";
import AllServices from "./pages/AllServices/AllServices";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AddService from "./pages/Dashboard/AddService/AddService";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import ManageBlog from "./pages/Dashboard/ManageBlog/ManageBlog";
import ManageBooking from "./pages/Dashboard/ManageBooking/ManageBooking";
import ManageService from "./pages/Dashboard/ManageService/ManageService";
import MyBooking from "./pages/Dashboard/MyBooking/MyBooking";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import CheckOut from "./pages/Home/CheckOut";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import SignUp from "./pages/Login/SignUp/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/service/:serviceID"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="booking" element={<MyBooking />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="manage-service" element={<ManageService />} />
          <Route path="manage-blog" element={<ManageBlog />} />
          <Route path="manage-booking" element={<ManageBooking />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
