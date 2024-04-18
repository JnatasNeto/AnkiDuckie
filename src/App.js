// import logo from "./logo.svg";
import "./App.css";
import "./style/global.css";
import "./style/card.css";

import Card from "./templates/card";

function App() {
  return (
    <main className="App">
      {/* Header */}
      <header className="container-fluid bg-body p-0 m-0">
        <nav className="navbar p-2 m-0">
          <div className="container text-center">
            {/* Logo */}
            <div className="row">
              <div className="col">
                <p className="m-0">Ankiduckie</p>
              </div>
            </div>
            {/* Botões Cadastrar e Login */}
            <div className="row gap-2">
              <div className="col p-0">
                <button className="btn btn-primary rounded">Cadastrar</button>
              </div>
              <div className="col p-0">
                <button className="btn btn-outline-primary rounded">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="container align-content-center first">
        <div className="row">
          <div className="col-12 col-sm-6 p-0 m-0">
            <div className="row text-center text-sm-start">
              <div className="col-12">
                <h1 className="display-4 fw-bolder jakarta">
                  DuckieAnki: Aprenda com flashcards, <br />
                  estude menos!
                </h1>
              </div>
              <div className="col-12">
                <p className="lead fw-medium">
                  Esqueça o medo das provas e aprenda idiomas com facilidade!{" "}
                  <br />A repetição espaçada, com comprovação científica, é a
                  sua aliada.
                </p>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary fw-semibold px-4 py-3 rounded start-btn">
                  Começar agora
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </section>
      <section className="container card-container">
        <div className="row card-display">
          <div className="col"></div>
          <div className="col p-0 m-0 card-container">
            <div className="row justify-content-xl-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
