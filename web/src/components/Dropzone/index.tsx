import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ic from "../../assets/icons";
import { Props } from "./model";

import "./styles.css";

export const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img
          src={selectedFileUrl}
          alt="Imagem representando o ponto a ser criado"
        ></img>
      ) : (
        <p>
          <img src={ic.upload} alt="Ícone representando botão de upload"></img>
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};
