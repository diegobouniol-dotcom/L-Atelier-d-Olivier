"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXX";

const projetTypes = [
  { value: "", label: "Sélectionnez un type de projet" },
  { value: "agencement", label: "Agencement sur-mesure" },
  { value: "renovation", label: "Rénovation" },
  { value: "menuiserie", label: "Menuiserie" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "autre", label: "Autre" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rgpd) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
        setRgpd(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block font-sans text-xs uppercase tracking-[0.2em] text-noir/70 mb-2">
            Nom <span className="text-or">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-transparent border-b border-noir/30 focus:border-or focus:outline-none py-3 font-sans text-noir placeholder:text-noir/40 transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-sans text-xs uppercase tracking-[0.2em] text-noir/70 mb-2">
            Email <span className="text-or">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-transparent border-b border-noir/30 focus:border-or focus:outline-none py-3 font-sans text-noir placeholder:text-noir/40 transition-colors"
            placeholder="vous@exemple.fr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="block font-sans text-xs uppercase tracking-[0.2em] text-noir/70 mb-2">
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          className="w-full bg-transparent border-b border-noir/30 focus:border-or focus:outline-none py-3 font-sans text-noir placeholder:text-noir/40 transition-colors"
          placeholder="06 XX XX XX XX"
        />
      </div>

      <div>
        <label htmlFor="type" className="block font-sans text-xs uppercase tracking-[0.2em] text-noir/70 mb-2">
          Type de projet <span className="text-or">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue=""
          className="w-full bg-transparent border-b border-noir/30 focus:border-or focus:outline-none py-3 font-sans text-noir transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23C9A86A' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.5rem center",
            paddingRight: "2rem",
          }}
        >
          {projetTypes.map((t) => (
            <option key={t.value} value={t.value} disabled={t.value === ""}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.2em] text-noir/70 mb-2">
          Votre message <span className="text-or">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-transparent border-b border-noir/30 focus:border-or focus:outline-none py-3 font-sans text-noir placeholder:text-noir/40 transition-colors resize-none"
          placeholder="Décrivez votre projet : type d'ouvrage, surface, délais souhaités..."
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer group pt-4">
        <input
          type="checkbox"
          required
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          className="mt-1 w-4 h-4 accent-or"
        />
        <span className="font-sans text-sm text-noir/70 leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a href="/politique-confidentialite" className="text-or underline underline-offset-2 hover:text-noir">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!rgpd || status === "sending"}
          className="bg-or text-noir font-sans font-semibold text-[15px] px-10 py-4 hover:bg-or-clair transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>

        {status === "ok" && (
          <p className="mt-5 font-sans text-sm text-noir/80 border-l-2 border-or pl-4">
            Merci, votre message est bien arrivé. Je vous rappelle sous 48h.
          </p>
        )}
        {status === "error" && (
          <p className="mt-5 font-sans text-sm text-red-700 border-l-2 border-red-700 pl-4">
            Une erreur est survenue. Merci de réessayer ou d&apos;appeler directement au{" "}
            <a href="tel:+33658297453" className="underline">06 58 29 74 53</a>.
          </p>
        )}
      </div>
    </form>
  );
}
