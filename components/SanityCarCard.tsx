import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { SanityCar } from "@/sanity/lib/queries";
import { formatPrice } from "@/lib/format";

export default function SanityCarCard({ car }: { car: SanityCar }) {
  const imageUrl = car.coverImage
    ? urlFor(car.coverImage).width(800).height(600).fit("crop").auto("format").url()
    : null;

  return (
    <Link
      href={`/inventory/${car.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-crown-gold/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-crown-cream">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${car.year} ${car.make} ${car.title} for sale at Kingpin Auto Sales`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No image available
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-crown-red px-3 py-1 text-xs font-semibold text-white shadow">
          {car.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-900">{car.title}</h3>
          <p className="text-sm text-gray-500">
            {car.year} {car.make}
          </p>
        </div>
        <p className="mt-auto font-serif text-2xl font-bold text-crown-red">{formatPrice(car.price)}</p>
      </div>
    </Link>
  );
}
