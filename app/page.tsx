"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { PhoneCall, BookOpen, BadgeCheck } from "lucide-react";

export default function Home() {
  const benefits = [
    "Productos premium con altos estandares de calidad",
    "Asesoría personalizada en tratamientos medicinales con cannabis",
    "Promociones de apertura y descuentos exclusivos por tiempo limitado",
    "Atención confiable y acompañamiento en todo tu proceso terapéutico",
  ];

  const handleFormRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeDhT588126sWSoX8FFQ0Imsx6vc6lf1HKwqTZJ82vhcVz0Mw/viewform",
      "_blank"
    );
  };

  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/56923869677?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20y%20servicios%20de%20Candy%20Farms.",
      "_blank"
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 lg:py-16  px-8 bg-white dark:bg-black sm:items-start lg:justify-start xl:px-0 gap-8">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="xs:max-w-xs lg:max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            ¡Bienvenidos a Candy Farms!
          </h1>
          <p className="max-w-md text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Nos alegra anunciar que ya abrimos oficialmente las puertas de
            nuestro dispensario de marihuana medicinal, un espacio diseñado para
            acompañar a pacientes que buscan tratamientos naturales, seguros y
            con respaldo profesional
          </p>

          <p className="max-w-md text-base leading-4 text-zinc-600 dark:text-zinc-400">
            Ahora puedes acceder directamente a:
          </p>

          {benefits.map((benefit) => (
            <Item key={benefit} variant="outline" size="sm">
              <ItemMedia>
                <BadgeCheck className="size-5 text-green-500" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-md text-zinc-700 dark:text-zinc-300">
                  {benefit}
                </ItemTitle>
              </ItemContent>
            </Item>
          ))}

          <p className="max-w-md text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Te invitamos a visitarnos y ser parte de esta nueva etapa. ¡Tu
            bienestar es nuestra prioridad!
          </p>
        </div>

        <Separator />

        <div className="flex flex-col gap-4 text-base font-medium mt-6">
          <Button
            size={"lg"}
            variant={"default"}
            onClick={handleWhatsAppRedirect}
          >
            {" "}
            <PhoneCall /> WhatsApp
          </Button>
          <Button size="lg" variant="outline" onClick={handleFormRedirect}>
            {" "}
            <BookOpen /> Lista de lanzamiento
          </Button>
        </div>
      </main>
    </div>
  );
}
