import React from "react";
import "../../style/main.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { ReactComponent as IllustrationDoll } from "../../assets/image/illustration-doll-fly.svg";
import { ReactComponent as CardAzul } from "../../assets/image/Card-Home-Azul.svg";
import { ReactComponent as CardLaranja } from "../../assets/image/Card-Home-Laranja.svg";
import { ReactComponent as CardRosa } from "../../assets/image/Card-Home-Rosa.svg";
import { ReactComponent as CardRoxo } from "../../assets/image/Card-Home-Roxo.svg";
import { ReactComponent as CardVerde } from "../../assets/image/Card-Home-Verde.svg";
import { ReactComponent as CardVermelho } from "../../assets/image/Card-Home-Vermelho.svg";

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
                <Link to="/register">
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
                  <CardAzul className="card-body"/>
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
  );
}
export default Home;
