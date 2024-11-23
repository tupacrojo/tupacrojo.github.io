import React from "react";

interface TextoResaltadoProps {
  texto: string;
  palabrasResaltadas: string[];
}

const TextoResaltado: React.FC<TextoResaltadoProps> = ({
  texto,
  palabrasResaltadas,
}) => {
  const resaltarTexto = (texto: string, palabrasResaltadas: string[]) => {
    const regex = new RegExp(`(${palabrasResaltadas.join("|")})`, "gi");
    const partes = texto.split(regex);

    return partes.map((parte, index) =>
      palabrasResaltadas.includes(parte.toLowerCase()) ? (
        <span key={index} className="font-semibold text-orange-500">
          {parte}
        </span>
      ) : (
        parte
      )
    );
  };

  return <span>{resaltarTexto(texto, palabrasResaltadas)}</span>;
};

export default TextoResaltado;
