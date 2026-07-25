import type { Metadata } from "next";
import FinancingPartners from "@/components/FinancingPartners";
import FinancingForm from "@/components/FinancingForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Financing",
  description: `Explore financing options and apply online at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}. We work with Canada's leading lenders to get you approved fast.`,
  alternates: { canonical: "/financing" },
};

export default function FinancingPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-16 text-center md:px-8">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Financing Made Simple</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Good credit, bad credit, or no credit &mdash; we&rsquo;ll work with you to find a payment plan that fits
          your budget.
        </p>
      </section>

      <FinancingPartners />

      <section className="mx-auto max-w-2xl px-4 pb-16 md:px-8">
        <div className="rounded-2xl border border-gray-100 p-6 shadow-sm md:p-8">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Apply for Financing</h2>
          <p className="mt-1 text-sm text-gray-500">
            Fill out this quick demo form and our team will follow up with real financing options.
          </p>
          <div className="mt-6">
            <FinancingForm />
          </div>
        </div>
      </section>
    </>
  );
}
