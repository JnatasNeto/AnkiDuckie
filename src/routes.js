import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

import Home from "./Pages/home";
import HomeUser from "./Pages/homeUser";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Forgot from "./Pages/forgotPassword";
import Profile from "./Pages/profile";
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
          <Route path="/homeuser" element={<HomeUser />}></Route>
          <Route path="/chat" element={<Gemini />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  