import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteControls } from "@/components/site-controls";
import { company, seoKeywords } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://akaconstructions.in"),
  title: {
    default: "A.K.A Constructions | Construction Company in Mohali",
    template: "%s | A.K.A Constructions",
  },
  description:
    "A.K.A Constructions delivers residential, commercial, renovation and civil construction services across Mohali and Punjab with disciplined project management.",
  keywords: seoKeywords,
  openGraph: {
    title: "A.K.A Constructions | Building Excellence, Creating Trust",
    description:
      "Premium construction services in Sahibzada Ajit Singh Nagar, Mohali, Punjab.",
    url: "https://akaconstructions.in",
    siteName: "A.K.A Constructions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Modern construction site with tower crane and concrete structure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.K.A Constructions",
    description: "Construction services in Mohali and Punjab.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 406, Second Floor, Sector 82",
    addressLocality: "Sahibzada Ajit Singh Nagar",
    addressRegion: "Punjab",
    postalCode: "140307",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: ["Mohali", "Punjab", "Sahibzada Ajit Singh Nagar"],
  priceRange: "$$",
  url: "https://akaconstructions.in",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteControls />
      </body>
    </html>
  );
}
