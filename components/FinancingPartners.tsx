import { Landmark } from "lucide-react";
import { financingPartners } from "@/data/financingPartners";

type FinancingPartnersProps = {
  showHeading?: boolean;
};

export default function FinancingPartners({ showHeading = true }: FinancingPartnersProps) {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        {showHeading && (
          <>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">Our Financing Partners</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              We work with Canada&rsquo;s leading lenders to get you approved fast &mdash; no matter your credit
              history.
            </p>
          </>
        )}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {financingPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-crown-cream/30 px-4 py-6 text-center shadow-sm transition-colors hover:border-crown-gold/40"
            >
              <Landmark className="h-6 w-6 text-crown-red" aria-hidden="true" />
              <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-lg text-xs text-gray-400">
          Names shown are representative lender examples for illustration purposes only. Logos are generic
          placeholders, not official trademarks, and do not imply endorsement.
        </p>
      </div>
    </section>
  );
}
