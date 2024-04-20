import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/register" element={ <Register /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
