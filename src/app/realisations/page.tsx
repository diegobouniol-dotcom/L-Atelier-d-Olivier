import type { Metadata } from "next";
import Gallery, { type Projet } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Mes réalisations",
  description:
    "Sélection de projets récents d'agencement et de rénovation réalisés par Olivier Lafourcade à Larmor-Plage et dans l'agglomération de Lorient.",
};

const projets: Projet[] = [
  {
    src: "/images/01-renovation-restaurant-HD.jpg",
    titre: "Rénovation restaurant — Lorient",
    desc: "Rénovation complète : banquettes velours, parquet bois massif, lambris chêne, suspensions design.",
  },
  {
    src: "/images/02-bureaux-verriere-HD.jpg",
    titre: "Aménagement bureaux — verrière atelier",
    desc: "Verrière atelier sur-mesure, mur d'accent papier peint tropical, parquet flottant.",
  },
  {
    src: "/images/03-renovation-sdb-HD.jpg",
    titre: "Rénovation salle de bain",
    desc: "Plan-vasque teck sur-mesure, parquet hydrofuge, douche à l'italienne. Finitions haut de gamme.",
  },
  {
    src: "/images/04-portrait-olivier-HD.jpg",
    titre: "À l'atelier",
    desc: "Olivier sur le terrain, devant son atelier à Larmor-Plage. Plus de vingt ans de menuiserie et d'agencement.",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-noir text-white pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-5">
            Galerie
          </p>
          <h1 className="font-display italic font-semibold text-[52px] sm:text-[72px] lg:text-[96px] leading-[1.02] mb-6">
            Mes réalisations.
          </h1>
          <p className="font-sans text-lg text-creme/70 max-w-2xl leading-relaxed">
            Une sélection de projets récents — particuliers, restaurateurs,
            bureaux. Cliquez sur un visuel pour le voir en grand.
          </p>
        </div>
      </section>

      <section className="bg-creme text-noir py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Gallery projets={projets} />

          <div className="mt-20 pt-12 border-t border-creme-dark text-center">
            <p className="font-display italic text-noir/70 text-2xl mb-6 max-w-2xl mx-auto">
              « D&apos;autres chantiers s&apos;ajouteront bientôt — chaque projet
              mérite ses photos. »
            </p>
            <a
              href="tel:+33658297453"
              className="inline-block bg-noir text-or font-sans font-semibold text-[15px] px-10 py-5 hover:bg-noir-warm transition-colors"
            >
              Parler de votre projet — 06 58 29 74 53
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
