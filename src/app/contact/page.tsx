import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Olivier Lafourcade, menuisier-agenceur à Larmor-Plage. Réponse sous 48h, sans engagement.",
};

export default function ContactPage() {
  const mapsSrc =
    "https://www.google.com/maps?q=36+bis+Rue+de+Ploemeur+56260+Larmor-Plage&output=embed";

  return (
    <>
      <section className="bg-creme text-noir pt-36 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.3em] text-or mb-5">
            Contact
          </p>
          <h1 className="font-display italic font-semibold text-[52px] sm:text-[68px] lg:text-[88px] leading-[1.02] mb-6">
            Parlons de votre projet.
          </h1>
          <p className="font-sans text-lg text-noir/75 max-w-2xl leading-relaxed">
            Décrivez-moi ce que vous imaginez. Réponse sous 48h, sans engagement.
          </p>
        </div>
      </section>

      <section className="bg-creme text-noir pb-24 lg:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Card + Map */}
            <aside className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-noir text-white p-8 lg:p-10">
                <p className="font-script text-4xl text-or leading-none mb-6">
                  L&apos;Atelier d&apos;Olivier
                </p>
                <div className="divider-or mb-6" />
                <dl className="space-y-5 font-sans text-[15px] text-white/80 leading-relaxed">
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.2em] text-or mb-1">Téléphone</dt>
                    <dd>
                      <a href="tel:+33658297453" className="text-white font-semibold text-lg hover:text-or transition-colors">
                        06 58 29 74 53
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.2em] text-or mb-1">Adresse</dt>
                    <dd className="not-italic">
                      36 bis Rue de Ploemeur
                      <br />
                      56260 Larmor-Plage
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.2em] text-or mb-1">Email</dt>
                    <dd>
                      <a href="mailto:contact@atelier-olivier.fr" className="hover:text-or transition-colors">
                        contact@atelier-olivier.fr
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.2em] text-or mb-1">Horaires</dt>
                    <dd>
                      Lundi – Vendredi : 8h – 19h
                      <br />
                      <span className="text-white/50">Samedi – Dimanche : fermé</span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-0 h-[320px] w-full overflow-hidden bg-noir-warm">
                <iframe
                  src={mapsSrc}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Plan — L'Atelier d'Olivier, 36 bis Rue de Ploemeur, Larmor-Plage"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
