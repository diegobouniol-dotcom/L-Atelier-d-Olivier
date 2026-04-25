import type { Metadata } from "next";
import { Cormorant_Garamond, Italianno, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-olivier-larmor.vercel.app"),
  title: {
    default: "L'Atelier d'Olivier — Menuisier-agenceur à Larmor-Plage",
    template: "%s · L'Atelier d'Olivier",
  },
  description:
    "Olivier Lafourcade, artisan menuisier installé à Larmor-Plage. Agencement sur-mesure, rénovation, menuiserie traditionnelle. 5,0/5 sur Google.",
  keywords: [
    "menuisier Larmor-Plage",
    "agencement sur-mesure Lorient",
    "rénovation Morbihan",
    "menuiserie bois",
    "Olivier Lafourcade",
    "artisan Larmor-Plage",
  ],
  authors: [{ name: "L'Atelier d'Olivier" }],
  openGraph: {
    title: "L'Atelier d'Olivier — Menuisier-agenceur Larmor-Plage",
    description:
      "L'art du sur-mesure, façonné main. Menuisier-agenceur à Larmor-Plage.",
    url: "https://atelier-olivier-larmor.vercel.app",
    siteName: "L'Atelier d'Olivier",
    images: [
      {
        url: "/images/04-portrait-olivier-HD.jpg",
        width: 1600,
        height: 1000,
        alt: "Olivier Lafourcade devant son atelier à Larmor-Plage",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier d'Olivier — Menuisier-agenceur Larmor-Plage",
    description: "L'art du sur-mesure, façonné main.",
    images: ["/images/04-portrait-olivier-HD.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "L'Atelier d'Olivier",
  image: "https://atelier-olivier-larmor.vercel.app/images/04-portrait-olivier-HD.jpg",
  "@id": "https://atelier-olivier-larmor.vercel.app",
  url: "https://atelier-olivier-larmor.vercel.app",
  telephone: "+33658297453",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 bis Rue de Ploemeur",
    addressLocality: "Larmor-Plage",
    postalCode: "56260",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.7185,
    longitude: -3.389,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "27",
  },
  areaServed: [
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${italianno.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-creme text-noir">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
