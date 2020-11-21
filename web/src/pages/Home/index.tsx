import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";

import ic from "../../assets/icons";
import {
  titleHome,
  descriptionHome,
  buttonTxtAddPoint,
  buttonTxtSearchPoint,
} from "../../utils/strings";

import "./styles.css";

export const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <Header></Header>

        <main>
          <h1>{titleHome}</h1>
          <p>{descriptionHome}</p>
          <div className="button">
            <Link to="/create-point">
              <span>
                <img
                  src={ic.login}
                  alt="Ícone representando o acesso a página de criação de um novo ponto de coleta"
                />
              </span>
              <strong>{buttonTxtAddPoint}</strong>
            </Link>

            <Link to="/search-point">
              <span>
                <img
                  src={ic.buscar}
                  alt="Ícone representando a procura por pontos de coletas existentes"
                />
              </span>
              <strong>{buttonTxtSearchPoint}</strong>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
