function Header(){
    return(
        <header className="container-fluid ">
        <nav className="navbar-nav p-2 p-sm-3 p-lg-4">
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
                  <button className="btn btn-primary">Cadastrar</button>
                </div>
                <div className="col-auto p-0 m-0">
                  <button className="btn btn-outline-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header;
