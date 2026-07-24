import type { Metadata } from "next";
import { MapPin, Target, Users } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn the story behind ${siteConfig.name}, the Regina, Saskatchewan dealership founded by ${siteConfig.owner}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-crown-cream/40 px-4 py-16 text-center md:px-8">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Our Story</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Built on trust, driven by quality — the Kingpin Auto Sales story.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">Meet Sahil Sekhon</h2>
          <p className="text-gray-600">
            Sahil Sekhon founded Kingpin Auto Sales with one goal: bring honest, personal, quality-first car buying
            back to Regina. After years of watching friends and family get burned by pushy sales tactics and hidden
            fees, Sahil set out to build a dealership he&rsquo;d want to buy from himself.
          </p>
          <p className="text-gray-600">
            Today, Kingpin Auto Sales is proud to serve Regina and all of Saskatchewan with a hand-picked selection
            of quality pre-owned vehicles, transparent pricing, and a team that treats every customer like a
            neighbour — because most of them are.
          </p>
        </div>
        <div className="flex items-center justify-center rounded-2xl border border-crown-gold/30 bg-crown-cream/60 p-10 text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-crown-red">Kingpin</p>
            <p className="mt-1 font-serif text-xl font-semibold text-crown-gold">Auto Sales</p>
            <p className="mt-4 text-sm italic text-gray-600">&ldquo;Where Quality Drives Trust.&rdquo;</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white md:px-8">
        <h2 className="sr-only">Our Mission, Customers, and Home</h2>
        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3">
            <Target className="h-8 w-8 text-crown-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold">Our Mission</h3>
            <p className="text-sm text-gray-300">
              Make buying a quality used car simple, honest, and even a little enjoyable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Users className="h-8 w-8 text-crown-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold">Our Customers</h3>
            <p className="text-sm text-gray-300">
              Regina families, first-time buyers, and everyone in between across Saskatchewan.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="h-8 w-8 text-crown-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold">Our Home</h3>
            <p className="text-sm text-gray-300">
              Proudly based in {siteConfig.address.city}, {siteConfig.address.province}.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center md:px-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900">Ready to find your next car?</h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href="/inventory" size="lg">
            View Inventory
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" size="lg">
            Contact Us
          </CTAButton>
        </div>
      </section>
    </>
  );
}
