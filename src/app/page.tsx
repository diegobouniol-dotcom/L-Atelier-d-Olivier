import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const metiers = [
  {
    num: "01.",
    titre: "Agencement sur-mesure",
    desc: "Bibliothèques intégrées, dressings, verrières d'intérieur, banquettes, meubles spécifiques. Chaque pièce est dessinée puis fabriquée à l'atelier, ajustée au millimètre.",
  },
  {
    num: "02.",
    titre: "Rénovation complète",
    desc: "Rénovation de salles de bains, cuisines, locaux commerciaux, bureaux. De la dépose à la finition, je m'occupe de tout, en restant le seul interlocuteur.",
  },
  {
    num: "03.",
    titre: "Menuiserie traditionnelle",
    desc: "Portes, fenêtres, escaliers, parquets, lambris. Bois nobles travaillés dans le respect du métier, finitions soignées, ajustages précis.",
  },
  {
    num: "04.",
    titre: "Dépannage & urgences",
    desc: "Intervention rapide sur dégâts des eaux, casses, problèmes ponctuels. Diagnostic juste, solution durable, pas de devis bidon.",
  },
];

const projets = [
  {
    src: "/images/01-renovation-restaurant-HD.jpg",
    titre: "Rénovation restaurant — Lorient",
    desc: "Banquettes velours, parquet bois massif, lambris chêne",
    badge: "AVANT / APRÈS",
  },
  {
    src: "/images/02-bureaux-verriere-HD.jpg",
    titre: "Aménagement bureaux",
    desc: "Verrière atelier sur-mesure, papier peint d'accent, parquet flottant",
    badge: "RÉALISATION",
  },
  {
    src: "/images/03-renovation-sdb-HD.jpg",
    titre: "Rénovation salle de bain",
    desc: "Plan-vasque teck, douche italienne, parquet hydrofuge",
    badge: "AVANT / APRÈS",
  },
];

const temoignages = [
  {
    quote:
      "Travail de grande qualité, conseils pertinents, réactivité exemplaire, délais parfaitement respectés. Une collaboration fluide et efficace du début à la fin.",
    auteur: "Rénovation locaux commerciaux",
  },
  {
    quote:
      "Un artisan extrêmement polyvalent, attentif. Il diagnostique vite, trouve toujours une solution miraculeuse et a la fierté du travail bien fait.",
    auteur: "Particulier, Larmor-Plage",
  },
  {
    quote:
      "Ponctuel, méticuleux, laisse toujours le chantier propre. Cliente exigeante, j'ai souvent été déçue par les artisans : Olivier, je le recommande sans réserve.",
    auteur: "Particulière, Lorient",
  },
];

const process = [
  {
    num: "01",
    titre: "Premier contact",
    desc: "Vous m'appelez ou laissez un message. Je vous rappelle sous 48h, pas de répondeur sans suite.",
  },
  {
    num: "02",
    titre: "Visite & diagnostic",
    desc: "Je viens chez vous, je regarde, j'écoute, je conseille. Sans engagement, sans facture.",
  },
  {
    num: "03",
    titre: "Devis détaillé",
    desc: "Vous recevez un devis clair, ligne par ligne, avec les délais et les matériaux. Pas de surprise.",
  },
  {
    num: "04",
    titre: "Réalisation",
    desc: "Conception en atelier, pose chez vous, chantier laissé propre. Garantie sur tous mes ouvrages.",
  },
];

const villes = [
  "Larmor-Plage",
  "Lorient",
  "Ploemeur",
  "Quéven",
  "Lanester",
  "Caudan",
  "Guidel",
  "Port-Louis",
  "Riantec",
  "Hennebont",
];

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="inline-flex gap-1 text-or" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-noir">
        <Image
          src="/images/04-portrait-olivier-HD.jpg"
          alt="Olivier Lafourcade, menuisier-agenceur, devant son atelier à Larmor-Plage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,14,12,0.95) 0%, rgba(15,14,12,0.6) 50%, rgba(15,14,12,0.2) 100%)",
          }}
        />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-[640px] lg:max-w-[52%]">
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-6 reveal">
              Menuiserie · Agencement · Rénovation
            </p>
            <h1 className="font-display italic font-semibold text-white leading-[1.02] text-[56px] sm:text-[72px] lg:text-[104px] mb-8 reveal">
              L&apos;art du sur-mesure,
              <br />
              façonné main.
            </h1>
            <p className="font-sans text-lg lg:text-xl text-creme/85 max-w-md mb-10 leading-relaxed reveal">
              Olivier Lafourcade, artisan menuisier installé à Larmor-Plage.
              Je conçois, fabrique et pose des ouvrages bois sur-mesure pour
              particuliers et professionnels.
            </p>
            <div className="flex flex-wrap gap-4 mb-12 reveal">
              <a
                href="tel:+33658297453"
                className="bg-or text-noir font-sans font-semibold text-[15px] px-8 py-4 hover:bg-or-clair transition-colors"
              >
                Demander un devis
              </a>
              <Link
                href="/realisations"
                className="border border-or text-or font-sans font-semibold text-[15px] px-8 py-4 hover:bg-or/10 transition-colors"
              >
                Voir mes réalisations
              </Link>
            </div>

            <div className="flex items-center gap-3 text-creme reveal">
              <Stars size={16} />
              <span className="font-sans text-sm text-white/80">
                <span className="text-white font-semibold">5,0 / 5</span> sur 27
                avis Google
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-or/70">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-or/40" />
        </div>
      </section>

      {/* 2. BANDEAU CONFIANCE */}
      <section className="bg-noir text-white border-t border-or/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {[
              { chiffre: "5,0 / 5", label: "27 avis Google" },
              { chiffre: "20+ ans", label: "d'expérience" },
              { chiffre: "100%", label: "sur-mesure" },
              { chiffre: "48h", label: "délai de réponse" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className={`flex flex-col items-center text-center lg:px-6 ${
                  i < arr.length - 1 ? "lg:border-r lg:border-or/30" : ""
                }`}
              >
                <div className="font-display italic font-semibold text-or text-[48px] lg:text-[64px] leading-none mb-3">
                  {item.chiffre}
                </div>
                <div className="font-sans font-medium text-[11px] uppercase tracking-[0.3em] text-white/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAVOIR-FAIRE */}
      <section id="savoir-faire" className="bg-creme text-noir py-24 lg:py-36 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">
              Savoir-faire
            </p>
            <h2 className="font-display italic font-semibold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] mb-16 max-w-3xl">
              Un atelier, quatre savoir-faire.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {metiers.map((m, i) => (
              <Reveal key={m.num} delay={i * 0.08}>
                <div className="border-t border-creme-dark pt-8">
                  <div className="font-display italic font-semibold text-or text-[48px] lg:text-[56px] leading-none mb-5">
                    {m.num}
                  </div>
                  <h3 className="font-display text-[28px] lg:text-[32px] font-semibold text-noir mb-4">
                    {m.titre}
                  </h3>
                  <p className="font-sans text-[16px] text-noir/75 leading-relaxed mb-5 max-w-lg">
                    {m.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="font-sans text-sm font-semibold text-or link-or"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AVANT / APRÈS */}
      <section className="bg-noir text-white py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">
              Transformations
            </p>
            <h2 className="font-display italic font-semibold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] mb-6 max-w-3xl">
              De la démolition à la livraison.
            </h2>
            <p className="font-sans text-lg text-creme/70 max-w-2xl mb-16 leading-relaxed">
              Chaque chantier raconte la même histoire : un espace vidé, repensé,
              et rendu vivant.
            </p>
          </Reveal>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((p, i) => (
              <Reveal key={p.src} delay={i * 0.1}>
                <article className="group w-full max-w-[380px] mx-auto border border-or/20 rounded-[2px] overflow-hidden bg-noir-warm/40">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.titre}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-[400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-noir text-or font-sans text-[11px] font-semibold uppercase tracking-[0.2em] px-[14px] py-2">
                      {p.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display italic text-[22px] text-white leading-tight mb-2">
                      {p.titre}
                    </h3>
                    <p
                      className="font-sans text-[13px] text-white/70 leading-relaxed overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/realisations"
              className="inline-block font-display italic text-or text-2xl link-or"
            >
              Voir toutes mes réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. À PROPOS */}
      <section id="a-propos" className="bg-creme text-noir py-24 lg:py-36 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-noir-warm">
                <Image
                  src="/images/04-portrait-olivier-HD.jpg"
                  alt="Portrait d'Olivier Lafourcade, artisan menuisier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">
                L&apos;artisan
              </p>
              <h2 className="font-display italic font-semibold text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] mb-10">
                Olivier Lafourcade,
                <br />
                menuisier-agenceur.
              </h2>
              <div className="space-y-6 font-sans text-[17px] text-noir/80 leading-relaxed">
                <p>
                  Installé à Larmor-Plage avec mon atelier, je travaille seul
                  depuis plus de vingt ans dans la menuiserie et l&apos;agencement.
                  Particuliers, restaurateurs, bureaux : chaque projet est conçu
                  et exécuté par mes mains.
                </p>
                <p>
                  Mon engagement tient en quatre points : un diagnostic honnête,
                  des conseils sincères, un chantier laissé propre, et un travail
                  dont je signe chaque pièce.
                </p>
                <p>
                  Du croquis à la pose finale, je suis votre seul interlocuteur.
                  Aucun sous-traitant. Aucune surprise sur la facture.
                </p>
              </div>
              <blockquote className="mt-10 pl-6 border-l-2 border-or">
                <p className="font-display italic text-or text-[24px] lg:text-[32px] leading-tight">
                  « Le bois ne ment pas. Quand on le respecte, il vous le rend
                  pendant trente ans. »
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. TÉMOIGNAGES */}
      <section className="bg-noir text-white py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">
              Témoignages
            </p>
            <h2 className="font-display italic font-semibold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] mb-16 max-w-3xl">
              Ce qu&apos;ils en disent.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {temoignages.map((t, i) => (
              <Reveal key={t.auteur} delay={i * 0.1}>
                <figure className="h-full border border-or/30 p-8 lg:p-10 flex flex-col bg-noir-warm/40">
                  <blockquote className="flex-1 font-display italic text-white/90 text-[19px] lg:text-[20px] leading-relaxed mb-6">
                    « {t.quote} »
                  </blockquote>
                  <div className="mt-auto">
                    <Stars />
                    <figcaption className="mt-3 font-sans text-sm text-creme/70">
                      — {t.auteur}
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-or link-or"
            >
              <Stars size={12} />
              Voir les 27 avis 5★ sur Google →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="bg-creme text-noir py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">
              Process
            </p>
            <h2 className="font-display italic font-semibold text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] mb-20 max-w-3xl">
              Quatre étapes, pas une de plus.
            </h2>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-or/40" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {process.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.08}>
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border border-or bg-creme flex items-center justify-center mb-6 mx-auto lg:mx-0 relative z-10">
                      <span className="font-display italic text-or text-[28px] font-semibold">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-[22px] lg:text-[24px] text-noir mb-3 text-center lg:text-left">
                      {p.titre}
                    </h3>
                    <p className="font-sans text-[15px] text-noir/75 leading-relaxed text-center lg:text-left">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. ZONE D'INTERVENTION */}
      <section className="bg-creme text-noir pb-24 lg:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="border-t border-creme-dark pt-20">
            <Reveal>
              <h2 className="font-display italic font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.05] mb-6 max-w-3xl">
                L&apos;atelier rayonne autour de la rade.
              </h2>
              <p className="font-sans text-[17px] text-noir/75 max-w-2xl mb-14 leading-relaxed">
                Basé à Larmor-Plage, j&apos;interviens dans toute l&apos;agglomération
                de Lorient. Pour des projets plus éloignés, contactez-moi
                directement, on en discute.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-or/40">
                {villes.map((ville) => (
                  <li
                    key={ville}
                    className="bg-creme px-6 py-6 font-display italic text-[20px] lg:text-[22px] text-noir text-center"
                  >
                    {ville}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. CTA FINALE */}
      <section className="bg-noir text-white py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-6">
              Un projet ?
            </p>
            <h2 className="font-display italic font-semibold text-[56px] sm:text-[72px] lg:text-[96px] leading-[1.02] mb-8">
              Parlons-en.
            </h2>
            <p className="font-sans text-lg lg:text-xl text-creme/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Décrivez-moi ce que vous imaginez. Je vous rappelle sous 48h pour
              en parler de vive voix.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+33658297453"
                className="bg-or text-noir font-sans font-semibold text-base px-10 py-5 hover:bg-or-clair transition-colors"
              >
                06 58 29 74 53
              </a>
              <Link
                href="/contact"
                className="border border-or text-or font-sans font-semibold text-base px-10 py-5 hover:bg-or/10 transition-colors"
              >
                Envoyer un message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
