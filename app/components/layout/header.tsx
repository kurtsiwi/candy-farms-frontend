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
            <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              ¡El dispensario ya está funcionando!
            </h2>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
