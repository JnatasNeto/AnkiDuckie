import React from "react";
<<<<<<< HEAD
import { ReactComponent as IllustrationDoll } from "./components/assets/image/illustration-doll-fly.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import "./components/style/main.css";

function App() {
  return (
    <main className="App">
      {/* <!-- Header --> */}
      <Header />
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
              <div class="col-12">
                <button class="btn btn-light text-uppercase fw-bold rounded p-2 start-now">
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <IllustrationDoll
              className="img-fluid"
              alt="Image by pikisuperstar on Freepik"
            />
          </div>
        </div>
      </section>
      <section className="container py-4">
        <div className="row ">
          <div className="col-12 col-lg-6 justify-content-center">
            <Card />
            {/* <img
              className="img-fluid"
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg"
              alt=""
            ></img> */}
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
      {/* <!-- Footer --> */}
      <Footer />
    </main>
=======

import AppRoutes from "./routes";

function App() {
  return (
    <AppRoutes />
>>>>>>> 4f6d9f17e2453a09f52e69a620f2c5d39bdd6a39
  );
}
export default App;
