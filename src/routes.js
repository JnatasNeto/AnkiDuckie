import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import HomeUser from "./Pages/HomeUser";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forgot from "./Pages/ForgotPassword";
import Profile from "./Pages/Profile";
import { Gemini } from "./Pages/Gemini";


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<HomeUser />}></Route>
          <Route path="/chat" element={<Gemini />}></Route>
          
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  