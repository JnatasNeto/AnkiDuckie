<<<<<<< HEAD
import React from "react";

function Header() {
  return (
    <header className="container-fluid ">
      <nav className="navbar-nav p-2 p-sm-3 p-lg-3">
        <div className="row">
          {/* <!-- Coluna 1 --> */}
          <div className="col align-self-center">
            {/* <!-- Logo --> */}
            <a href="#" className="navbar-brand">
              AnkiDuckie
            </a>
          </div>
          {/* <!-- Coluna 2 --> */}
          <div className="col-auto">
            <div className="row row-cols-2 gap-2">
              <div className="col-auto p-0 m-0">
                <button className="btn bg-light fw-medium rounded">
                  Cadastrar
                </button>
              </div>
              <div className="col-auto p-0 m-0">
                <button className="btn btn-outline-light fw-medium rounded">
                  Login
                </button>
=======
import { Link } from "react-router-dom";

function Header(){
    return(
      
        <header className="container-fluid ">
        <nav className="navbar-nav p-2 p-sm-3 p-lg-4">
          <div className="row">
            {/* <!-- Coluna 1 --> */}
            <div className="col align-self-center">
              {/* <!-- Logo --> */}
              <Link to="/" className=" col-auto text-light text-opacity-75 navbar-brand">
                AnkiDuckie
              </Link>             
            </div>
            {/* <!-- Coluna 2 --> */}
            <div className="col-auto">
              <div className="row row-cols-2 gap-2">
                <div className="col-auto p-0 m-0">
                  <Link to="/register">
                  <button className="btn btn-primary">Cadastrar</button>
                  </Link>
                </div>
                <div className="col-auto p-0 m-0">
                  <Link to="/login">
                  <button className="btn btn-outline-primary">Login</button>
                  </Link>
                </div>
>>>>>>> 4f6d9f17e2453a09f52e69a620f2c5d39bdd6a39
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
