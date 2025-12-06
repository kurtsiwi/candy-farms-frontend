import Link from "next/link";
import Image from "next/image";

import CandyFarmsLogo from "../../assets/logo-candy-farms.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="w-full bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-200 dark:bg-black/50 dark:border-zinc-800 list-none">
      <NavigationMenu className="max-w-3xl justify-around">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#">
              <Image
                src={CandyFarmsLogo}
                alt="Candy Farms Logo"
                width={80}
                className="m-2"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeDhT588126sWSoX8FFQ0Imsx6vc6lf1HKwqTZJ82vhcVz0Mw/viewform"
              target="_blank"
            >
              ¡El dispensario ya está funcionando!
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
