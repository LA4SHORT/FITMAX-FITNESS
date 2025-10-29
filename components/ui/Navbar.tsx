import Link from "next/link";
import { navItems } from "@/lib/constants";
import { Button } from "./button";
import ThemeToggle from "../ThemeToggle";
import MobileNavigation from "../MobileNavigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Left - Logo */}
        <h1 className="text-2xl font-black font-heading text-primary">
          FITMAX+
        </h1>

        {/* Center - Nav links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right - CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle/>
          <Button className="font-semibold">Join Now</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
            <MobileNavigation/>
        </div>
      </div>
    </nav>
  );
}
