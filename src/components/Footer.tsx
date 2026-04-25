import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir-deep text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Col 1 — Identité */}
          <div>
            <Link
              href="/"
              className="font-script text-4xl text-or leading-none inline-block mb-8"
              aria-label="L'Atelier d'Olivier — accueil"
            >
              L&apos;Atelier d&apos;Olivier
            </Link>
            <div className="divider-or mb-6" />
            <address className="not-italic font-sans text-[15px] text-white/70 leading-relaxed space-y-2">
              <p>36 bis Rue de Ploemeur</p>
              <p>56260 Larmor-Plage</p>
              <p className="pt-3">
                <a
                  href="tel:+33658297453"
                  className="text-or hover:text-or-clair transition-colors font-semibold"
                >
                  06 58 29 74 53
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@atelier-olivier.fr"
                  className="text-white/70 hover:text-or transition-colors"
                >
                  contact@atelier-olivier.fr
                </a>
              </p>
            </address>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-or mb-6">
              Navigation
            </h3>
            <div className="divider-or mb-6" />
            <ul className="space-y-3 font-sans text-[15px]">
              <li><Link href="/#savoir-faire" className="text-white/70 hover:text-or transition-colors">Savoir-faire</Link></li>
              <li><Link href="/realisations" className="text-white/70 hover:text-or transition-colors">Réalisations</Link></li>
              <li><Link href="/#a-propos" className="text-white/70 hover:text-or transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-or transition-colors">Contact</Link></li>
              <li className="pt-3"><Link href="/mentions-legales" className="text-white/50 hover:text-or transition-colors text-sm">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-white/50 hover:text-or transition-colors text-sm">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Col 3 — Horaires */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-or mb-6">
              Horaires
            </h3>
            <div className="divider-or mb-6" />
            <ul className="space-y-3 font-sans text-[15px] text-white/70">
              <li className="flex justify-between max-w-xs">
                <span>Lundi – Vendredi</span>
                <span className="text-white">8h – 19h</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Samedi – Dimanche</span>
                <span className="text-white/50">fermé</span>
              </li>
              <li className="pt-4 text-sm italic text-white/60">
                Urgences (dégâts des eaux) : sur demande
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-or/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50 font-sans">
          <p>
            © 2026 L&apos;Atelier d&apos;Olivier — SAS au capital de 1 000 € — SIRET 951 381 011 00018
          </p>
          <p className="opacity-60">
            Site par{" "}
            <a
              href="https://kitello.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-or transition-colors"
            >
              Kitello
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
