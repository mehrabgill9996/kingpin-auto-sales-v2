import { siteConfig } from "@/data/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: "CA",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
