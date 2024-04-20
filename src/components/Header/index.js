import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="col-12">
      <nav className="navbar-nav p-2 p-sm-3 p-lg-4">
        <div className="row">
          {/* <!-- Coluna 1 --> */}
          <div className="col align-self-center">
            {/* <!-- Logo --> */}
            <Link
              to="/"
              className=" col-auto text-light text-opacity-75 navbar-brand"
            >
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
