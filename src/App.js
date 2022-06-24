import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="review" element={<AddReview />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
