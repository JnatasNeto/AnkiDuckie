import React from "react";
import "./style/home.css";

function App() {
  return (
    <main className="App">
      {/* <!-- Header Ocupa todo o comprimento horizontal --> */}
      <section class="container-fluid py-2 backgroud-home">
        <div class="row">
          <div class="col-12">
            <header className="container-fluid ">
              {/* <!-- Vou usar o grid --> */}
              <nav class="navbar-nav p-2 p-sm-3 p-lg-4">
                <div class="row">
                  {/* <!-- Coluna 1 --> */}
                  <div class="col align-self-center">
                    {/* <!-- Logo --> */}
                    <a href="#" class="navbar-brand">
                      AnkiDuckie
                    </a>
                  </div>
                  {/* <!-- Coluna 2 --> */}
                  <div class="col-auto">
                    {/* <!-- Novo Grid --> */}
                    <div class="row row-cols-2 gap-2">
                      {/* <!-- Cada col recebe um botão --> */}
                      <div class="col-auto p-0 m-0">
                        <button class="btn btn-primary">Cadastrar</button>
                      </div>
                      <div class="col-auto p-0 m-0">
                        <button class="btn btn-primary">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <div class="col-12 py-4">
            <div class="row text-center">
              <div class="col-12">
                <h1 class="display-4 fw-bold text-light">
                  Aprenda com flashcards, <br /> estude menos!
                </h1>
              </div>
              <div class="col-12">
                <p class="lead fw-normal text-light">
                  Esqueça o medo das provas e aprenda idiomas com facilidade!{" "}
                  <br />A repetição espaçada, com comprovação científica, é a
                  sua aliada.
                </p>
              </div>
              <div class="col-12">
                <button class="btn btn-primary text-uppercase">
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6">
            <img
              class="img-fluid"
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg"
              alt=""
            ></img>
          </div>
          <div class="col-12 col-lg-6 align-self-center">
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
