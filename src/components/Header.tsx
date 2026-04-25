"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#savoir-faire", label: "Savoir-faire" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-noir/95 backdrop-blur-md border-b border-or/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-script text-[34px] leading-none text-or hover:text-or-clair transition-colors"
          aria-label="L'Atelier d'Olivier — accueil"
          onClick={() => setOpen(false)}
        >
          L&apos;Atelier d&apos;Olivier
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[17px] text-white hover:text-or transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+33658297453"
            className="bg-or text-noir font-sans font-semibold text-sm px-6 py-3 hover:bg-or-clair transition-colors tracking-wide"
          >
            06 58 29 74 53
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-or"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-7 h-[1px] bg-current mb-[6px] transition-all" style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : "" }} />
          <div className="w-7 h-[1px] bg-current mb-[6px] transition-all" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-7 h-[1px] bg-current transition-all" style={{ transform: open ? "translateY(-3.5px) rotate(-45deg)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-noir transition-[max-height] duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display italic text-2xl text-white hover:text-or transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+33658297453"
            className="mt-4 bg-or text-noir font-sans font-semibold text-center py-4 hover:bg-or-clair transition-colors"
            onClick={() => setOpen(false)}
          >
            06 58 29 74 53
          </a>
        </nav>
      </div>
    </header>
  );
}
