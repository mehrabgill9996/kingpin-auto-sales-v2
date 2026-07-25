import Image from "next/image";
import { soldCars } from "@/data/soldCars";
import { formatPrice } from "@/lib/format";

type RecentlySoldProps = {
  showHeading?: boolean;
};

export default function RecentlySold({ showHeading = true }: RecentlySoldProps) {
  return (
    <section className="bg-crown-cream/40 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">Recently Sold</h2>
            <p className="max-w-xl text-gray-600">
              Great vehicles don&rsquo;t stay on our lot for long &mdash; here&rsquo;s a look at a few recent success
              stories.
            </p>
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {soldCars.map((car) => (
            <div
              key={car.id}
              aria-disabled="true"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src={car.imagePlaceholder}
                  alt={`${car.year} ${car.make} ${car.model} — sold`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/15" />
                <span className="absolute right-[-42px] top-5 w-44 rotate-45 bg-crown-red py-1 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  Sold
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  {car.year} {car.make} {car.model}
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
                  <span className="font-semibold text-gray-400 line-through">{formatPrice(car.soldPrice)}</span>
                  <span className="font-medium text-crown-red">Sold {car.soldDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
