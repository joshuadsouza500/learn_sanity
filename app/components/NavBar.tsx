import Link from "next/link";
import { Menu, Palette } from "lucide-react";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="container flex h-16 items-center justify-between  mx-auto">
        <div className="flex items-center gap-2 font-bold">
          <Palette className="h-5 w-5" />
          <span>CreativeStudio</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="#works"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Works
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <button>Get in Touch</button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
