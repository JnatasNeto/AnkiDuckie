import React from "react";
import "../../style/main.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { ReactComponent as IllustrationDoll } from "../../assets/image/illustration-doll-fly.svg";

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
      {/* <!-- Footer --> */}
      <Footer />
    </main>
  );
}
export default Home;
