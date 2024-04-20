import React from "react";
import { Link } from "react-router-dom";
// Style
import "../../style/Home/style.css";
import "../../style/global.css";
// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Imagens
const IllustrationDoll =
  require("../../assets/images/IllustrationDoll.svg").ReactComponent;
const CardAzul =
  require("../../assets/images/Card-Home-Azul.svg").ReactComponent;
const CardRosa =
  require("../../assets/images/Card-Home-Rosa.svg").ReactComponent;
const CardVerde =
  require("../../assets/images/Card-Home-Verde.svg").ReactComponent;

function Home() {
  return (
    <main className="App">
      <section className="container-fluid container-principal">
        <div className="row">
          <div class="col-12">
            <Header />
          </div>
          <div className="col-12 py-4">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="display-4 fw-bold text-light">
                  Aprenda com flashcards, <br /> estude menos!
                </h1>
              </div>
              <div className="col-12">
                <p className="lead fw-normal text-light">
                  Esqueça o medo das provas e aprenda idiomas com facilidade!
                  <br /> A repetição espaçada, com comprovação científica, é a
                  sua aliada.
                </p>
              </div>
              <div class="col-12">
                <Link to="/subscribe">
                  <button class="btn btn-light text-uppercase fw-medium rounded border-white start-now">
                    Começar Agora
                  </button>
                </Link>
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
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div class="d-flex flex-column mb-3">
              <div class="p-0">
                <div class="col text-center">
                  <CardAzul className="card-body" />
                </div>
              </div>
              <div class="p-0 card-container">
                <div class="col text-center">
                  <CardVerde className="card-body" />
                </div>
              </div>
              <div class="p-0 card-container">
                <div class="col text-center">
                  <CardRosa className="card-body" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 align-self-center">
            <h3 className="display-6 fw-bolder">
              Esquecer? Jamais! A era da memória impecável chegou!
            </h3>
            <p className="lead fw-normal">
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
  );
}
export default Home;
