import { LightbulbIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { label: "profile.", href: "#about" },
    { label: "skills.", href: "#skills" },
    { label: "projects.", href: "#projects" },
    { label: "contact.", href: "#contact" },
  ];

  return (
    <header className="w-full h-28 bg-[#000002] border-b border-border/5">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-5xl font-bold text-white tracking-[0] leading-normal font-['Inconsolata',Helvetica]">
          jhowl.
        </div>

        {/* Navigation Links */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex space-x-6">
            {navLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={link.href}
                  className="font-['Inconsolata',Helvetica] font-bold text-white text-2xl tracking-[0] leading-normal"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle */}
        <button
          className="flex items-center justify-center"
          aria-label="Toggle theme"
        >
          <LightbulbIcon className="w-[30px] h-[30px] text-white" />
        </button>
      </div>
    </header>
  );
};
