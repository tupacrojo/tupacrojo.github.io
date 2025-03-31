import React from "react";
import TextoResaltado from "./TextoResaltado";

function QuienSoy() {
  return (
    <div className="flex flex-col items-center w-5/6 lg:w-2/5 rounded-xl space-y-2">
      <div className="flex flex-row items-center space-x-3">
        <h2 className="text-3xl lg:text-6xl">Soy</h2>
      </div>
      <div className="flex flex-col space-y-2 text-base lg:text-2xl">
        <TextoResaltado
          texto="En el que piensan cuando se tiene que solucionar algo tecnológico quizás porque desde chico me interese en todo, demasiado curioso."
          palabrasResaltadas={["solucionar", "tecnológico", "curioso"]}
        />
        <TextoResaltado
          texto="Me gusta resolver problemas, la creatividad y el pensamiento lógico siempre presente, me gusta crear, soluciones o nuevos problemas. "
          palabrasResaltadas={["resolver", "problemas", "creatividad", "pensamiento", "lógico", "crear", "soluciones"]}
        />
        <TextoResaltado
          texto="Siempre estoy creando, pienso mucho y me apasiona poder resolver problemas, mientras más complejos mejor. Ya que me al resolverlos obtengo la mejor sensación."
          palabrasResaltadas={["resolver","problemas", "resolverlos", "sensación"]}
        />
        <TextoResaltado
          texto="Estudie Programación, Electrónica y Fotografía. La creación está en todas."
          palabrasResaltadas={["Programación", "Electrónica", "Fotografía"]}
        />
        <TextoResaltado
          texto="La gente me describe como alguien carismático, extrovertido y gracioso, pero yo se que hablo poco y solo cuando lo creo necesario."
          palabrasResaltadas={["carismático", "extrovertido", "gracioso"]}
        />
      </div>
    </div>
  );
}

export default QuienSoy;
