import React from "react";
// Importando o icone de estrela (Ao lado do número de cards)
import * as starSvg from "./star.svg";
// Importando o icone de start do botão começar
import * as startSvg from "./start.svg";

function Card() {
  return (
    <div className="col-12 col-md-12 col-lg-5 col-xl-5 m-2">
      {/* Corpo do cartão */}
      <div id="card-azul" className="body-card">
        {/* Título & Número de cartões */}
        <div className="header-card">
          <h5>Lorem</h5>
          <div className="number-cards">
            <starSvg.ReactComponent />
            <span>26</span>
          </div>
        </div>
        {/* Tags & Botão */}
        <div className="footer-card">
          <span className="tag">#Lorem</span>
          <button className="btn btn-primary btn-card">
            Continuar
            <startSvg.ReactComponent />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
