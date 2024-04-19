import React from "react";
import "./style/home.css";

function App() {
  return (
    <main className="App">
      {/* <!-- Header --> */}
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
      <section className="container-fluid align-content-center py-2 container-principal">
        <div className="row">
          <div className="col-12 py-4">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="display-4 fw-bold text-light">
                  Aprenda com flashcards, <br /> estude menos!
                </h1>
              </div>
              <div className="col-12">
                <p className="lead fw-normal text-light">
                  Esqueça o medo das provas e aprenda idiomas com facilidade!{" "}
                  <br />A repetição espaçada, com comprovação científica, é a
                  sua aliada.
                </p>
              </div>
              <div className="col-12">
                <button className="btn btn-primary text-uppercase">
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid"
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg"
              alt=""
            ></img>
          </div>
          <div className="col-12 col-lg-6 align-self-center">
            <h3 className="fw-bolder">
              Esquecer? Jamais! A era da memória impecável chegou!
            </h3>
            <p>
              Lembrar-se de tudo se tornou tão simples quanto amarrar os
              cadarços. Tarefas, compromissos, ideias geniais... nada mais
              escapa da sua mente afiada!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
