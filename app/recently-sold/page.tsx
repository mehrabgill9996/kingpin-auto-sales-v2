import type { Metadata } from "next";
import RecentlySold from "@/components/RecentlySold";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Recently Sold Vehicles",
  description: `See recently sold vehicles from ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province} — proof that quality doesn't sit on our lot for long.`,
  alternates: { canonical: "/recently-sold" },
};

export default function RecentlySoldPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center md:px-8">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Recently Sold</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          A look at some of the vehicles our customers have recently driven home from Kingpin Auto Sales.
        </p>
      </section>

      <RecentlySold showHeading={false} />

      <section className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8">
        <p className="text-gray-600">Don&rsquo;t see what you&rsquo;re looking for? New inventory arrives every week.</p>
        <CTAButton href="/inventory" size="lg" className="mt-4">
          View Current Inventory
        </CTAButton>
      </section>
    </>
  );
}
