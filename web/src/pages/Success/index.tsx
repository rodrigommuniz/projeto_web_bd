import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import img from "../../assets/img";
import { registerFinalized } from "../../utils/strings";

import "./styles.css";

export const Success: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      history.push("/");
    }, 5000);
    return () => clearInterval(interval);
  }, [history]);

  function goToHome(): void {
    history.push("/");
  }

  return (
    <div id="page-success" onClick={goToHome}>
      <div className="content">
        <img
          src={img.check}
          alt="Imagem que representa um ícone de concluído"
        ></img>
        <p>{registerFinalized}</p>
      </div>
    </div>
  );
};
