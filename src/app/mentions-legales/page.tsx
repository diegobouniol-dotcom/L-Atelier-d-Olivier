import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de L'Atelier d'Olivier, SAS, Larmor-Plage.",
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <article className="bg-creme text-noir pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">Informations</p>
        <h1 className="font-display italic font-semibold text-[44px] lg:text-[64px] leading-[1.05] mb-12">
          Mentions légales
        </h1>

        <div className="prose-layout space-y-10 font-sans text-[16px] text-noir/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Éditeur du site</h2>
            <p>
              L&apos;Atelier d&apos;Olivier — SAS au capital de 1 000 €<br />
              36 bis Rue de Ploemeur, 56260 Larmor-Plage, France<br />
              SIRET : 951 381 011 00018<br />
              RCS Lorient<br />
              Président : Olivier Lafourcade<br />
              Téléphone :{" "}
              <a href="tel:+33658297453" className="text-or hover:underline">
                06 58 29 74 53
              </a>
              <br />
              Email :{" "}
              <a href="mailto:contact@atelier-olivier.fr" className="text-or hover:underline">
                contact@atelier-olivier.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Directeur de la publication</h2>
            <p>Olivier Lafourcade, en qualité de Président.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Hébergement</h2>
            <p>
              Vercel Inc.<br />
              440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" className="text-or hover:underline" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Conception & réalisation</h2>
            <p>
              Site conçu et réalisé par Kitello —{" "}
              <a href="https://kitello.fr" className="text-or hover:underline" target="_blank" rel="noopener noreferrer">
                kitello.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, photographies,
              graphismes, logo) est la propriété exclusive de L&apos;Atelier
              d&apos;Olivier, sauf mention contraire. Toute reproduction, totale ou
              partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Responsabilité</h2>
            <p>
              L&apos;Atelier d&apos;Olivier s&apos;efforce de maintenir les informations
              du site à jour, mais ne peut garantir leur exactitude, leur complétude
              ou leur actualité. L&apos;usage des informations se fait sous la seule
              responsabilité de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Données personnelles</h2>
            <p>
              Le traitement des données personnelles collectées via ce site est
              décrit dans notre{" "}
              <a href="/politique-confidentialite" className="text-or hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
