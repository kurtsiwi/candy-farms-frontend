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
    <header className="w-full bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-200 dark:bg-black/50 dark:border-zinc-800">
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#">
            <Image
              src={CandyFarmsLogo}
              alt="Candy Farms Logo"
              width={120}
              height={40}
              className="m-2"
            />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
