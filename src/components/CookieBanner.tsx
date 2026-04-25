"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("cookies-accepted");
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookies-accepted", "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-noir text-white border-t border-or/30 shadow-2xl"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="font-sans text-sm text-white/80 max-w-2xl">
          Ce site utilise uniquement des cookies techniques nécessaires à son
          fonctionnement.{" "}
          <a
            href="/politique-confidentialite"
            className="text-or hover:text-or-clair underline underline-offset-2"
          >
            En savoir plus
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="bg-or text-noir font-sans font-semibold text-sm px-6 py-3 hover:bg-or-clair transition-colors whitespace-nowrap"
        >
          J&apos;ai compris
        </button>
      </div>
    </div>
  );
}
