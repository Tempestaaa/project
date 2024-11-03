"use client";

import { navLinks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 56) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-14 z-30 ${
        isSticky ? "bg-background/30 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container grid grid-cols-[auto_1fr_auto] gap-4 items-center h-full *:h-full">
        {/* Logo */}
        <section className="grid place-items-center px-4">
          <Link
            href="/"
            className="text-4xl font-extrabold font-heading uppercase flex items-center"
          >
            Logo
          </Link>
        </section>

        {/* Links */}
        <section>
          <menu className="hidden md:flex justify-center h-full *:h-full *:px-6">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`hover:bg-foreground/60 hover:text-background duration-300 grid place-items-center font-heading ${
                  isActive(item.href) && "bg-foreground text-background"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </menu>
        </section>

        {/* Others */}
        <section className="flex items-center">
          <Link
            href="/login"
            className="flex items-center px-6 bg-foreground text-background h-full font-heading font-bold hover:bg-background hover:text-foreground duration-300"
          >
            Login
          </Link>
        </section>
      </nav>
    </header>
  );
}
