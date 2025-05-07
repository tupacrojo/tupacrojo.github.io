"use client";
import Image from "next/image";
import BotonesSociales from "@/app/components/BotonesSociales";
import QuienSoy from "@/app/components/QuienSoy";
import Stack from "@/app/components/Stack";
import CardWork from "@/app/components/CardWork";

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
        <div
          onMouseEnter={() => {
            window.fbq("trackCustom", "HoverImage", {
              event: "Hover sobre la imagen",
              timestamp: new Date().toISOString(),
            });
          }}
          onClick={() => {
            window.fbq("trackCustom", "ClickImage", {
              event: "Click en la imagen",
              timestamp: new Date().toISOString(),
            });
          }}
          className="image-container flex w-48 h-48 lg:w-96 lg:h-96 group rounded-full border-4 border-orange-700"
        >
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
        className="min-h-screen flex flex-col sm:flex-row px-4 space-x-4 items-center justify-around py-4"
      >
        <QuienSoy />
        <Stack />
      </div>
      <div
        id="section2"
        className="min-h-screen flex flex-col items-center lg:space-x-4 justify-center space-y-6 py-6"
      >
        <h2 className="text-6xl font-bold">Trabajos</h2>
        <div className="flex flex-col flex-wrap content-around justify-evenly space-y-2 xl:space-x-4 lg:space-y-0 lg:flex-row min-h-screen">
          <CardWork
            title="Full Stack"
            content={
              <>
                <p>
                  Identifiqué procesos manuales y repetitivos, y desarrollé una
                  extensión web para automatizarlos. Uso privado.
                </p>
                <p>
                  + Agendar a clientes desde whatsapp directo a google contacts.
                </p>
                <p>+ Creacion de reportes automaticos.</p>
                <p>+ Exportacion de tablas HTML a XLSX.</p>
                <p>
                  + Inyeccion de codigo y este modificaba la pagina para acceder
                  a sus metodos y realizar peticiones de manera mas rapida y
                  sencilla.
                </p>
              </>
            }
          />

          <CardWork
            title="Proyecto Final"
            content={
              <>
                <p>Proyecto realizado como entrega final de la UTN</p>
                <p>
                  + ABM de empleados, clientes, productos, ventas y reportes.
                </p>
                <p>+ Reportes Segun ROL de usuario</p>
                <p>Credenciales de prueba:</p>
                <p>Administrador: eve.gen 12345</p>
                <p>Encargado: tupi.rodriguez 12345</p>
                <p>Vendedor: juan.martel 12345</p>
                <p>Supervisor: nico.lope 12345</p>
              </>
            }
            footer={
              <a
                className="text-orange-400 hover:text-orange-500"
                href="https://tupacrodriguez.com.ar/ProyectoFinal"
              >
                Demo
              </a>
            }
          />
        </div>
      </div>
    </>
  );
}
