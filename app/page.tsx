import Image from "next/image";

import WhatsApp from "./assets/whatsapp-icon.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-base leading-4 text-zinc-600 dark:text-zinc-400 ">
            Nos alegra anunciar que ya abrimos oficialmente las puertas de
            nuestro dispensario de marihuana medicinal, un espacio diseñado para
            acompañar a pacientes que buscan tratamientos naturales, seguros y
            con respaldo profesional
          </p>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            ¡Bienvenidos a Candy Farms!
          </h1>
          <p className="max-w-md text-base leading-4 text-zinc-600 dark:text-zinc-400">
            Te invitamos a visitarnos y ser parte de esta nueva etapa. ¡Tu
            bienestar es nuestra prioridad!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium mt-6">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src={WhatsApp}
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            WhatsApp
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeDhT588126sWSoX8FFQ0Imsx6vc6lf1HKwqTZJ82vhcVz0Mw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Lista de lanzamiento!
          </a>
        </div>
      </main>
    </div>
  );
}
