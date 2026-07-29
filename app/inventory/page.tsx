import type { Metadata } from "next";
import SanityInventoryFilters from "@/components/SanityInventoryFilters";
import CTAButton from "@/components/CTAButton";
import { client } from "@/sanity/lib/client";
import { carsQuery, type SanityCar } from "@/sanity/lib/queries";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Inventory",
  description: `Browse quality pre-owned vehicles for sale at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}.`,
  alternates: { canonical: "/inventory" },
};

export default async function InventoryPage() {
  const cars = await client.fetch<SanityCar[]>(carsQuery, {}, { next: { revalidate: 0 } });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Our Inventory</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Every vehicle at Kingpin Auto Sales is hand-picked and ready for its next owner in Regina and beyond.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-crown-gold/30 bg-crown-cream/40 p-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-lg font-semibold text-gray-900">Have a vehicle to trade in?</h2>
          <p className="text-sm text-gray-600">Get an instant estimated value before you buy.</p>
        </div>
        <CTAButton href="/trade-in" size="sm" className="shrink-0">
          Get Your Trade-In Value
        </CTAButton>
      </div>

      <div className="mt-10">
        <h2 className="sr-only">Available Vehicles</h2>
        <SanityInventoryFilters cars={cars} />
      </div>
    </section>
  );
}
