import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles — L'Atelier d'Olivier.",
  robots: { index: false, follow: true },
};

export default function PolitiquePage() {
  return (
    <article className="bg-creme text-noir pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-4">RGPD</p>
        <h1 className="font-display italic font-semibold text-[44px] lg:text-[64px] leading-[1.05] mb-4">
          Politique de confidentialité
        </h1>
        <p className="font-sans text-sm text-noir/60 mb-12">Dernière mise à jour : avril 2026</p>

        <div className="space-y-10 font-sans text-[16px] text-noir/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Responsable du traitement</h2>
            <p>
              L&apos;Atelier d&apos;Olivier (SAS) — 36 bis Rue de Ploemeur, 56260
              Larmor-Plage — SIRET 951 381 011 00018.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Données collectées</h2>
            <p>Lorsque vous remplissez le formulaire de contact, nous collectons :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Votre numéro de téléphone (facultatif)</li>
              <li>Le type de projet</li>
              <li>Le contenu de votre message</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Finalités du traitement</h2>
            <p>
              Vos données sont utilisées exclusivement pour traiter votre demande
              (réponse, devis, prise de rendez-vous). Elles ne sont jamais cédées à
              des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Base légale</h2>
            <p>
              Le traitement repose sur votre consentement (case cochée dans le
              formulaire) et sur l&apos;intérêt légitime d&apos;un prestataire à
              répondre à une demande commerciale.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Durée de conservation</h2>
            <p>
              Vos données sont conservées 3 ans à compter de notre dernier échange,
              puis supprimées.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, écrivez-nous à{" "}
              <a href="mailto:contact@atelier-olivier.fr" className="text-or hover:underline">
                contact@atelier-olivier.fr
              </a>
              . Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-or hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Cookies</h2>
            <p>
              Ce site utilise uniquement un cookie technique (localStorage) pour se
              souvenir de votre acceptation du bandeau d&apos;information. Aucun
              cookie de mesure d&apos;audience ou de publicité n&apos;est déposé.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-noir mb-3">Hébergeur</h2>
            <p>
              Les données du site sont hébergées par Vercel Inc. (440 N Barranca
              Avenue #4133, Covina, CA 91723, États-Unis). Les transferts hors UE
              sont encadrés par les clauses contractuelles types de la Commission
              européenne.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
