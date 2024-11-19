"use client";
import Image from "next/image";
import BotonesSociales from "./components/BotonesSociales";

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
        <div className="flex flex-col">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between">
              <h1 className="font-bold text-8xl cursor-default select-none">
                Tupac
              </h1>
              <div className="flex flex-col opacity-40">
                <p className=" text-xl cursor-default select-none">
                  <strong>{edad.años}</strong> años
                </p>
                <p className="text-xl cursor-default select-none">
                  <strong>{edad.meses}</strong> meses
                </p>
                <p className=" text-xl cursor-default select-none">
                  <strong>{edad.dias}</strong> días
                </p>
              </div>
            </div>
            <h1 className="font-bold text-8xl cursor-default select-none">
              Rodríguez
            </h1>
          </div>
          <BotonesSociales />
          <p className="text-2xl pt-2 cursor-default select-none">
            Programador - Técnico Electrónico - Fotógrafo
          </p>
        </div>
      </div>
      <div
        id="section1"
        className="min-h-screen flex items-center justify-center"
      >
        <h2>Sección 1</h2>
      </div>
    </>
  );
}
