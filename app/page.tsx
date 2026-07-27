import type { Metadata } from "next";
import { Award, Clock, Crown, Handshake, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CarCard from "@/components/CarCard";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";
import RecentlySold from "@/components/RecentlySold";
import FinancingPartners from "@/components/FinancingPartners";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    body: "Every vehicle is inspected and sold with honest, upfront pricing — no hidden fees, no surprises.",
  },
  {
    icon: Award,
    title: "Quality You Can Feel",
    body: "We hand-select every car on our lot to meet a higher standard of reliability and value.",
  },
  {
    icon: Handshake,
    title: "Local & Personal",
    body: "As a Regina-owned dealership, Sahil and the team treat every customer like family.",
  },
];

export default function HomePage() {
  const featuredCars = cars.slice(0, 4);

  return (
    <>
      <JsonLd />

      <section className="relative overflow-hidden bg-gradient-to-b from-crown-cream to-white px-4 py-20 text-center md:py-28">
        <div
          className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-crown-gold/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-16 -z-10 h-80 w-80 rounded-full bg-crown-red/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="bg-dot-grid absolute inset-0 -z-10 opacity-[0.06]" aria-hidden="true" />

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-crown-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-crown-red shadow-sm backdrop-blur">
            <Crown className="h-3.5 w-3.5 text-crown-gold" aria-hidden="true" />
            Regina&rsquo;s Trusted Pre-Owned Dealer
          </span>

          <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-tight tracking-tight text-crown-red drop-shadow-sm [animation-delay:100ms] md:text-6xl">
            Kingpin <span className="text-crown-gold">Auto Sales</span>
          </h1>

          <p className="animate-fade-in-up font-serif text-xl italic text-crown-gold [animation-delay:200ms] md:text-2xl">
            &ldquo;Where Quality Drives Trust.&rdquo;
          </p>

          <div className="animate-fade-in-up flex items-center gap-3 [animation-delay:250ms]" aria-hidden="true">
            <span className="h-px w-10 bg-crown-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-crown-gold" />
            <span className="h-px w-10 bg-crown-gold/40" />
          </div>

          <p className="animate-fade-in-up max-w-xl text-gray-600 [animation-delay:300ms]">
            Regina, Saskatchewan&rsquo;s home for quality pre-owned vehicles — hand-picked, honestly priced, and backed
            by a dealership that treats you like family.
          </p>

          <div className="animate-fade-in-up flex flex-col gap-3 [animation-delay:400ms] sm:flex-row">
            <CTAButton href="/inventory" size="lg">
              View Inventory
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
          </div>

          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm text-gray-500 [animation-delay:500ms]">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-crown-gold text-crown-gold" aria-hidden="true" />
              4.9★ Google Rated
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-crown-red" aria-hidden="true" />
              No Hidden Fees
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-crown-red" aria-hidden="true" />
              Locally Owned in {siteConfig.address.city}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">About Kingpin Auto Sales</h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
          Founded by <strong className="text-gray-900">Sahil Sekhon</strong>, Kingpin Auto Sales is a Regina-based
          dealership built on a simple idea: buying a car should feel exciting, not exhausting. We hand-select every
          vehicle on our lot, stand behind what we sell, and work with every customer to find a car that fits their
          life and budget.
        </p>
        <CTAButton href="/about" variant="ghost" className="mt-6">
          Learn our story →
        </CTAButton>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">Featured Vehicles</h2>
            <p className="max-w-xl text-gray-600">A preview of what&rsquo;s currently on our lot in Regina.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/inventory" size="lg">
              View Full Inventory
            </CTAButton>
          </div>
        </div>
      </section>

      <RecentlySold />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Kingpin</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 p-8 text-center shadow-sm"
            >
              <span className="rounded-full bg-crown-red/10 p-4">
                <Icon className="h-8 w-8 text-crown-red" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <FinancingPartners />

      <GoogleReviews />

      <section className="bg-gray-950 px-4 py-14 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Visit Us in Regina, SK</h2>
            <p className="mt-2 max-w-md text-gray-300">
              Stop by the lot, take a test drive, and see why Regina trusts Kingpin Auto Sales.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-gray-200 sm:flex-row sm:gap-8">
            <span className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-crown-gold" aria-hidden="true" />
              {siteConfig.address.city}, {siteConfig.address.province}
            </span>
            <span className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-crown-gold" aria-hidden="true" />
              {siteConfig.phone}
            </span>
            <span className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-crown-gold" aria-hidden="true" />
              Mon&ndash;Sat, 9am&ndash;6pm
            </span>
          </div>
          <CTAButton
            href={siteConfig.mapsDirectionsUrl}
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </CTAButton>
        </div>
      </section>
    </>
  );
}
