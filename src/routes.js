import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Subscribe";
import Forgot from "./Pages/Forgot";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/subscribe" element={<Register />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
