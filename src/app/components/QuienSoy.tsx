import React from "react";
import ReproductorAudio from "./ReproductorAudio";
import TextoResaltado from "./TextoResaltado";

function QuienSoy() {
  return (
    <div className="flex flex-col items-center w-2/5 rounded-xl space-y-2">
      <div className="flex flex-row items-center space-x-3">
        <h2 className="text-3xl lg:text-6xl">Soy</h2>
        <ReproductorAudio src="../../SoyTupac2.wav" />
      </div>
      <div className="flex flex-col space-y-2 text-2xl">
        <TextoResaltado
          texto="Un fracasado en continuo fracaso, no es malo. Intento cosas."
          palabrasResaltadas={["fracasado", "intento"]}
        />
        <TextoResaltado
          texto="La programación no llegó a mí como un trabajo, siempre quise crear algo mío y darle forma como yo quise. Desde chico estoy en el ámbito de la fotografía."
          palabrasResaltadas={["programación", "fotografía"]}
        />
        <TextoResaltado
          texto="Iba a estudiar informática, en la Técnica 3, pero me decidí por electrónica, no me arrepiento. Programación en la UTN. Ahora Guardavidas, en este momento hay un cóctel de habilidades extrañas. Todas, siempre, tienen relación."
          palabrasResaltadas={["informática", "electrónica"]}
        />
        <TextoResaltado
          texto="Sospecho que la puntualidad, la habilidad de prever actitudes y comportamientos ayudan en la programación, la fotografía y en la prevención acuática."
          palabrasResaltadas={["puntualidad", "prever", "prevención"]}
        />
        <TextoResaltado
          texto="Prejuicioso, me ayuda a descifrar a las personas. No está bien juzgar... entonces digamos que soy previsor. Intento entender a la persona con la que hablo, su humor, sus intereses y solucionar problemas de la forma más eficiente."
          palabrasResaltadas={["previsor", "eficiente"]}
        />
        <TextoResaltado
          texto="Creía ser alguien poco sociable, la gente dice que no. Inclusive dicen que soy extrovertido y gracioso, hablo poco, solo cuando lo creo necesario. "
          palabrasResaltadas={["extrovertido", "gracioso"]}
        />
      </div>
    </div>
  );
}

export default QuienSoy;
