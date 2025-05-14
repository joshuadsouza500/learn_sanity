import Link from "next/link";
import { Palette } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2 font-bold">
          <Palette className="h-5 w-5" />
          <span>CreativeStudio</span>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <nav className="flex gap-4 md:gap-6">
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
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} CreativeStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
