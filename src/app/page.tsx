"use client";
import Image from "next/image";
import BotonesSociales from "./components/BotonesSociales";
import TextoResaltado from "./components/TextoResaltado";
import ReproductorAudio from "./components/ReproductorAudio";

export default function Home() {
  function calcularEdad(nacimiento: Date) {
    const hoy = new Date();
    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let dias = hoy.getDate() - nacimiento.getDate();

    if (dias < 0) {
      meses -= 1;
      dias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
    }

    if (meses < 0) {
      años -= 1;
      meses += 12;
    }

    return { años, meses, dias };
  }

  const nacimiento = new Date(2003, 5, 17);
  const edad = calcularEdad(nacimiento);

  return (
    <>
      <div
        id="cabecera"
        className="min-h-screen flex flex-row flex-nowrap content-center items-center justify-center space-x-4"
      >
        <div className="image-container flex w-96 h-96 group rounded-full border-4 border-orange-700">
          <Image
            src="/TupirfilBYN.png"
            width={698}
            height={698}
            alt="imagen de perfil"
            className="block rounded-full group-hover:hidden"
          />
          <video
            className="hidden rounded-full group-hover:block"
            src="/Tupirfil.mp4"
            loop
            muted
            autoPlay
            onMouseEnter={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          ></video>
        </div>
        <div className="flex flex-col max-w-min">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between items-center">
              <h1 className="max-w-fit font-bold text-8xl cursor-default select-none">
                Tupac
              </h1>
              <div className="flex flex-col opacity-40 hover:opacity-100 transition-opacity duration-75">
                <p className="text-xl cursor-default select-none ">
                  <strong>{edad.años}</strong> años
                </p>
              </div>
            </div>
            <h1 className="max-w-fit font-bold text-8xl cursor-default select-none">
              Rodríguez
            </h1>
          </div>
          <BotonesSociales />
          <div className="flex flex-row justify-between">
            <p className="opacity-40 hover:opacity-100 transition-opacity duration-75 text-xl pt-2 cursor-default select-none">
              Programador
            </p>
            <p className="opacity-40 hover:opacity-100 transition-opacity duration-75 text-xl pt-2 cursor-default select-none">
              Técnico Electrónico
            </p>
            <p className="opacity-40 hover:opacity-100 transition-opacity duration-75 text-xl pt-2 cursor-default select-none">
              Fotógrafo
            </p>
          </div>
        </div>
      </div>
      <div
        id="section1"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <div className="flex flex-row items-center space-x-3">
          <h2 className="text-6xl">Soy</h2>
          <ReproductorAudio src="/SoyTupac.wav" />
        </div>
        <div className="flex flex-col pt-6 space-y-2 px-10 text-2xl">
          <TextoResaltado
            texto="Un fracasado en continuo fracaso, no lo veo como algo malo. Intento
            cosas, pero mido los riesgos que conllevan. ¿Arriesgar y ganar? Es
            una pelotudez, suerte... No me gustan las cosas cursis. Me creía
            alguien poco sociable, la gente dice que no. Inclusive dicen que soy
            extrovertido y gracioso, hablo poco, solo cuando lo creo necesario."
            palabrasResaltadas={["fracasado", "extrovertido", "gracioso"]}
          />
          <TextoResaltado
            texto="Juzgador, pero me ayuda a descifrar a las personas. No está bien
            juzgar... entonces digamos que soy previsor."
            palabrasResaltadas={["juzgador", "previsor"]}
          />

          <TextoResaltado
            texto="Desde chico estoy en el ámbito de la fotografía, las cosas no se
            llevan en la sangre, pero me criaron demasiado curioso para no
            interesarme. Perseverante, cumplidor, y puntual. Las personas no se
            casan dos veces el mismo día."
            palabrasResaltadas={[
              "curioso",
              "perseverante",
              "cumplidor",
              "puntual",
            ]}
          />

          <TextoResaltado
            texto="La programación no llegó a mí como un trabajo, siempre quise crear
            algo mío y darle forma como yo quise. Iba a estudiar informática, en
            la Técnica 3, pero me decidí por electrónica, y no me arrepiento. Luego Programacion en la UTN.
            Y ahora Guardavidas, para este momento hay un cóctel de
            habilidades extrañas. Todas, siempre tienen alguna relación. La
            puntualidad y la habilidad de prever actitudes y comportamientos
            ayudan en la fotografía, la programación y en la prevención
            acuática."
            palabrasResaltadas={[
              "programación",
              "informática",
              "electrónica",
              "guardavidas",
              "puntualidad",
              "prever",
              "fotografía",
              "prevención",
            ]}
          />

          <TextoResaltado
            texto="La creatividad es un concepto explotado en mi familia. Las ideas
            sobre temas y situaciones vividas están presentes en mi cabeza todo
            el tiempo, para encontrar una mejora u otra perspectiva de ver las
            cosas. Por último, me gusta nadar, cocinar, en realidad me gusta
            comer."
            palabrasResaltadas={[
              "creatividad",
              "ideas",
              "nadar",
              "cocinar",
              "comer",
            ]}
          />
        </div>
      </div>
    </>
  );
}
