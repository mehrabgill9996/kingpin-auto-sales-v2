import Image from "next/image";
import Link from "next/link";
import { Calendar, Fuel, Gauge, Settings } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatMileage, formatPrice } from "@/lib/format";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/inventory/${car.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-crown-gold/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-crown-cream">
        <Image
          src={car.imagePlaceholder}
          alt={`${car.year} ${car.make} ${car.model} for sale at Kingpin Auto Sales`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-crown-red px-3 py-1 text-xs font-semibold text-white shadow">
          {car.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-900">{car.name}</h3>
          <p className="text-sm text-gray-500">
            {car.year} {car.make} {car.model}
          </p>
        </div>

        <p className="font-serif text-2xl font-bold text-crown-red">{formatPrice(car.price)}</p>

        <dl className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4 text-crown-gold" aria-hidden="true" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-4 w-4 text-crown-gold" aria-hidden="true" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4 text-crown-gold" aria-hidden="true" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-crown-gold" aria-hidden="true" />
            <span>{car.year}</span>
          </div>
        </dl>
      </div>
    </Link>
  );
}
