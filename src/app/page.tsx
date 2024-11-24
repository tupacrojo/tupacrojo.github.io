"use client";
import Image from "next/image";
import BotonesSociales from "./components/BotonesSociales";
import QuienSoy from "./components/QuienSoy";
import Stack from "./components/Stack";

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
        className="min-h-screen flex flex-col sm:flex-row flex-nowrap content-center items-center justify-center sm:space-x-4"
      >
        <div className="image-container flex w-48 h-48 lg:w-96 lg:h-96 group rounded-full border-4 border-orange-700">
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
              <h1 className="max-w-fit font-bold text-5xl lg:text-8xl cursor-default select-none">
                Tupac
              </h1>
              <div className="flex flex-col opacity-40 hover:opacity-100 transition-opacity duration-75">
                <p className="text-xl cursor-default select-none ">
                  <strong>{edad.años}</strong> años
                </p>
              </div>
            </div>
            <h1 className="max-w-fit font-bold text-5xl lg:text-8xl cursor-default select-none">
              Rodríguez
            </h1>
          </div>
          <BotonesSociales />
          <div className="flex flex-row space-x-2 justify-between">
            <p className="opacity-40 hover:opacity-100 transition-opacity duration-75 text-base lg:text-xl pt-2 cursor-default select-none">
              Programador
            </p>
            <p className="opacity-40 text-nowrap hover:opacity-100 transition-opacity duration-75 text-base lg:text-xl pt-2 cursor-default select-none">
              Técnico Electrónico
            </p>
            <p className="opacity-40 hover:opacity-100 transition-opacity duration-75 text-base lg:text-xl pt-2 cursor-default select-none">
              Fotógrafo
            </p>
          </div>
        </div>
      </div>
      <div
        id="section1"
        className="min-h-screen flex flex-col sm:flex-row items-center justify-around"
      >
        <QuienSoy />
        <Stack />
      </div>
      <div
        id="section2"
        className="min-h-screen flex flex-col items-center justify-center space-y-6"
      >
        <h2 className="text-6xl font-bold">Trabajos</h2>
        <div className="flex flex-col lg:flex-row space-x-2">
          <div className="flex flex-col h-auto w-96 rounded-xl bg-white bg-opacity-10 p-4 space-y-4">
            <p className="flex text-2xl justify-center font-semibold">
              Full Stack
            </p>
            <div className="bg-white bg-opacity-5 p-2 rounded-xl">
              <p>
                Encargado en diseño, creacion e implentacion de herramientas
                para uso de empleados, una extension de chrome que acorto tiempo
                de trabajo. la extension es de uso privado.
              </p>
              <ul>
                <li>
                  + Agendar a clientes desde whatsapp directo a google contacts.
                </li>
                <li>+ Creacion de reportes automaticos.</li>
                <li>+ Exportacion de tablas HTML a XLSX.</li>
                <li>
                  + Inyeccion de codigo y este modificaba la pagina para acceder
                  a sus metodos y realizar peticiones de manera mas rapida y
                  sencilla.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-auto w-96 rounded-xl bg-white bg-opacity-10 p-4 space-y-4">
            <p className="flex text-2xl justify-center font-semibold">
              Proyecto Final
            </p>
            <div className="bg-white bg-opacity-5 p-2 rounded-xl">
              <p>Proyecto realizado como entrega final de la UTN</p>
              <ul>
                <li>
                  + ABM de empleados, clientes, productos, ventas y reportes.
                </li>
                <li>+ Reportes Segun ROL de usuario</li>
                <li>+ Exportacion de tablas HTML a XLSX.</li>
                <li>
                  + Inyeccion de codigo y este modificaba la pagina para acceder
                  a sus metodos y realizar peticiones de manera mas rapida y
                  sencilla.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <a
                className="text-orange-400 hover:text-orange-500"
                href="https://tupacrodriguez.com.ar/ProyectoFinal"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
