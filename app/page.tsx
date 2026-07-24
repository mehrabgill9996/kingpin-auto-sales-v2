import type { Metadata } from "next";
import { Award, Clock, Handshake, MapPin, Phone, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CarCard from "@/components/CarCard";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
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
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Kingpin <span className="text-crown-red">Auto Sales</span>
          </h1>
          <p className="font-serif text-xl italic text-crown-gold md:text-2xl">&ldquo;Where Quality Drives Trust.&rdquo;</p>
          <p className="max-w-xl text-gray-600">
            Regina, Saskatchewan&rsquo;s home for quality pre-owned vehicles — hand-picked, honestly priced, and backed
            by a dealership that treats you like family.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/inventory" size="lg">
              View Inventory
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
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

      <Testimonials />

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
          <CTAButton href="/contact" size="md">
            Get Directions
          </CTAButton>
        </div>
      </section>
    </>
  );
}
