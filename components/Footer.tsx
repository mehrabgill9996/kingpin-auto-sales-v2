import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site-config";

const quickLinks = [
  { href: "/inventory", label: "Inventory" },
  { href: "/trade-in", label: "Trade-In Value" },
  { href: "/financing", label: "Financing" },
  { href: "/recently-sold", label: "Recently Sold" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/feedback", label: "Feedback" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-crown-gold/20 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-white" aria-label="Kingpin Auto Sales home">
            Kingpin <span className="text-crown-gold">Auto Sales</span>
          </Link>
          <p className="max-w-sm text-sm text-gray-400">
            {siteConfig.tagline} Family-owned and operated in {siteConfig.address.city}, {siteConfig.address.province} by {siteConfig.owner}.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Kingpin Auto Sales on Facebook"
              className="rounded-full border border-gray-700 p-2 text-gray-300 transition-colors hover:border-crown-gold hover:text-crown-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Kingpin Auto Sales on Instagram"
              className="rounded-full border border-gray-700 p-2 text-gray-300 transition-colors hover:border-crown-gold hover:text-crown-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-crown-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crown-gold" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-crown-gold" />
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-crown-gold">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-crown-gold" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-crown-gold">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-crown-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
