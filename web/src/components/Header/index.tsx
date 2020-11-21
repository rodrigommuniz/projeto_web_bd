import React from "react";
import { Link, useHistory } from "react-router-dom";

import img from "../../assets/img";
import ic from "../../assets/icons";

import { buttonVoltar } from "../../utils/strings";

export const Header: React.FC = () => {
  const history = useHistory();
  const { location } = history;

  return (
    <header>
      <img src={img.logo} alt="Imagem representando a logo do aplicação" />
      {location.pathname !== "/" && (
        <Link to="/">
          <img
            src={ic.voltar}
            alt="Ícone de uma seta representando voltar página"
          />{" "}
          {buttonVoltar}
        </Link>
      )}
    </header>
  );
};
