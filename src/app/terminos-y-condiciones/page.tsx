import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | NBN_tupac",
  description:
    "Términos y condiciones del servicio de la aplicación NBN_tupac.",
};

const secciones = [
  {
    titulo: "1. Descripción del Servicio",
    contenido: (
      <p>
        NBN_tupac es una herramienta diseñada para facilitar la integración,
        automatización de flujos de trabajo y el procesamiento de datos entre
        diferentes plataformas, utilizando los servicios y la API de Meta.
      </p>
    ),
  },
  {
    titulo: "2. Condiciones de Uso",
    contenido: (
      <>
        <p>Al utilizar la Aplicación, te comprometes a:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-orange-500">
          <li>Proporcionar información veraz y mantenerla actualizada.</li>
          <li>
            No utilizar la Aplicación con fines ilícitos, fraudulentos o no
            autorizados.
          </li>
          <li>
            No interferir ni interrumpir el funcionamiento de la Aplicación, los
            servidores o las redes conectadas a la misma.
          </li>
          <li>
            Cumplir con las Políticas de la Plataforma de Meta y los Términos de
            Servicio de Facebook.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: "3. Privacidad y Datos de Usuario",
    contenido: (
      <p>
        El uso de la Aplicación también está regido por nuestra Política de
        Privacidad, la cual explica cómo recopilamos, utilizamos y protegemos la
        información obtenida a través de la API de Meta. Al utilizar NBN_tupac,
        consientes el procesamiento de tus datos según lo estipulado en dicha
        política.
      </p>
    ),
  },
  {
    titulo: "4. Propiedad Intelectual",
    contenido: (
      <p>
        Todos los derechos, títulos e intereses sobre la Aplicación (excluyendo
        el contenido proporcionado por terceros o por los usuarios) son y
        seguirán siendo propiedad exclusiva del desarrollador de NBN_tupac.
      </p>
    ),
  },
  {
    titulo: "5. Limitación de Responsabilidad",
    contenido: (
      <>
        <p>
          La Aplicación se proporciona “tal cual” y “según disponibilidad”. En
          la máxima medida permitida por la ley aplicable, el desarrollador no
          será responsable por daños indirectos, incidentales, especiales,
          consecuentes o punitivos, ni por la pérdida de beneficios o ingresos,
          ya sea incurrida directa o indirectamente, o cualquier pérdida de
          datos, uso, fondo de comercio u otras pérdidas intangibles,
          resultantes de:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-orange-500">
          <li>
            Tu acceso, uso o imposibilidad de acceder o utilizar la Aplicación.
          </li>
          <li>Cualquier conducta o contenido de terceros en la Aplicación.</li>
          <li>
            Errores, fallos o interrupciones en las automatizaciones generadas.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: "6. Modificaciones de los Términos",
    contenido: (
      <p>
        Nos reservamos el derecho, a nuestra entera discreción, de modificar o
        reemplazar estos Términos en cualquier momento. Si una revisión es
        material, intentaremos proporcionar un aviso con al menos 30 días de
        antelación antes de que los nuevos términos entren en vigor. El uso
        continuado de la Aplicación tras dichos cambios constituye la
        aceptación de los nuevos Términos.
      </p>
    ),
  },
  {
    titulo: "7. Contacto",
    contenido: (
      <p>
        Si tienes alguna pregunta, duda o sugerencia sobre estos Términos y
        Condiciones, por favor contáctanos enviando un correo electrónico a:{" "}
        <a
          className="text-orange-400 underline decoration-orange-400/40 underline-offset-4 transition hover:text-orange-300"
          href="mailto:tupacrojo@hotmail.com"
        >
          tupacrojo@hotmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-12 text-neutral-100 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-orange-400"
        >
          <span aria-hidden="true">←</span> Volver al inicio
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
            NBN_tupac
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Términos y Condiciones del Servicio
          </h1>
          <p className="mt-5 text-sm text-neutral-400">
            Fecha de entrada en vigor: 10 de octubre de 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-7 text-neutral-300">
          <p>
            Bienvenido a NBN_tupac. Estos Términos y Condiciones regulan el
            acceso y uso de la aplicación NBN_tupac (en adelante, “la
            Aplicación”), accesible a través del dominio asociado
            flash.tupacrodriguez.com.ar. Al utilizar nuestra Aplicación o iniciar
            sesión mediante los servicios de Meta/Facebook, aceptas estos
            términos en su totalidad. Si no estás de acuerdo con estos términos,
            no debes utilizar la Aplicación.
          </p>

          {secciones.map((seccion) => (
            <section key={seccion.titulo}>
              <h2 className="mb-3 text-xl font-semibold text-white">
                {seccion.titulo}
              </h2>
              {seccion.contenido}
            </section>
          ))}
        </div>

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-neutral-500">
          NBN_tupac · Términos y Condiciones
        </footer>
      </article>
    </main>
  );
}
