"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export type Projet = {
  src: string;
  titre: string;
  desc: string;
  aspect?: string;
};

export default function Gallery({ projets }: { projets: Projet[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const next = useCallback(
    () => setActive((i) => (i === null ? 0 : (i + 1) % projets.length)),
    [projets.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) => (i === null ? 0 : (i - 1 + projets.length) % projets.length)),
    [projets.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active !== null ? projets[active] : null;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {projets.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setActive(i)}
            className={`group relative block w-full mb-6 break-inside-avoid overflow-hidden bg-noir-warm ${
              p.aspect || "aspect-[4/5]"
            } focus:outline-none focus:ring-2 focus:ring-or`}
            aria-label={`Voir ${p.titre} en grand`}
          >
            <Image
              src={p.src}
              alt={p.titre}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-or/0 group-hover:bg-or/10 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-noir/90 via-noir/50 to-transparent">
              <p className="font-display italic text-white text-xl leading-tight">
                {p.titre}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.titre}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-noir/95 backdrop-blur-sm flex flex-col"
            onClick={close}
          >
            <div className="flex items-center justify-between px-6 lg:px-12 h-16 shrink-0 text-white">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-or">
                {active !== null ? `${active + 1} / ${projets.length}` : ""}
              </span>
              <button
                onClick={close}
                aria-label="Fermer"
                className="text-or hover:text-or-clair transition-colors"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6L18 18M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div
              className="flex-1 flex items-center justify-center px-4 lg:px-12 pb-24 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prev}
                aria-label="Précédent"
                className="absolute left-4 lg:left-8 text-or hover:text-or-clair transition-colors p-3"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <motion.div
                key={current.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-[1200px] w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-[75vh] max-h-[800px]">
                  <Image
                    src={current.src}
                    alt={current.titre}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 text-center max-w-2xl px-4">
                  <h3 className="font-display italic text-or text-2xl lg:text-3xl mb-2">
                    {current.titre}
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    {current.desc}
                  </p>
                </div>
              </motion.div>

              <button
                onClick={next}
                aria-label="Suivant"
                className="absolute right-4 lg:right-8 text-or hover:text-or-clair transition-colors p-3"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
