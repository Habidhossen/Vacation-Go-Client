import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
