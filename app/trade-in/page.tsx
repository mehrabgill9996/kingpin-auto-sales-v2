import type { Metadata } from "next";
import TradeInForm from "@/components/TradeInForm";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Trade-In Value Estimator",
  description: `Get a free, instant estimated trade-in value for your vehicle at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}.`,
  alternates: { canonical: "/trade-in" },
};

export default function TradeInPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">What&rsquo;s Your Trade-In Worth?</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Answer a few quick questions for an instant, no-obligation estimated value range on your current vehicle.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-gray-100 p-6 shadow-sm md:p-8">
        <TradeInForm />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          Ready for an exact number? Book an in-person appraisal and we&rsquo;ll give you a firm offer on the spot.
        </p>
        <CTAButton href="/contact" variant="secondary" className="mt-4">
          Book an Appraisal
        </CTAButton>
      </div>
    </section>
  );
}
