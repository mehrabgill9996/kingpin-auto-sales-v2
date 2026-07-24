"use client";

import { useMemo, useState } from "react";
import type { Car } from "@/data/cars";
import CarCard from "./CarCard";

type SortOption = "year-desc" | "year-asc" | "price-asc" | "price-desc";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "year-desc", label: "Newest Year" },
  { value: "year-asc", label: "Oldest Year" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function InventoryFilters({ cars }: { cars: Car[] }) {
  const priceMin = Math.min(...cars.map((car) => car.price));
  const priceMax = Math.max(...cars.map((car) => car.price));
  const yearMin = Math.min(...cars.map((car) => car.year));
  const yearMax = Math.max(...cars.map((car) => car.year));

  const [sort, setSort] = useState<SortOption>("year-desc");
  const [maxPrice, setMaxPrice] = useState(priceMax);
  const [minYear, setMinYear] = useState(yearMin);

  const filteredCars = useMemo(() => {
    const filtered = cars.filter((car) => car.price <= maxPrice && car.year >= minYear);
    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-asc":
          return a.year - b.year;
        case "year-desc":
        default:
          return b.year - a.year;
      }
    });
  }, [cars, sort, maxPrice, minYear]);

  return (
    <div>
      <div className="mb-8 grid gap-6 rounded-2xl border border-gray-100 bg-crown-cream/40 p-6 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Sort by
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Max price: <span className="text-crown-red">${maxPrice.toLocaleString()}</span>
          <input
            type="range"
            min={priceMin}
            max={priceMax}
            step={500}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="accent-crown-red"
            aria-label="Maximum price"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Year: {minYear}+
          <input
            type="range"
            min={yearMin}
            max={yearMax}
            step={1}
            value={minYear}
            onChange={(event) => setMinYear(Number(event.target.value))}
            className="accent-crown-red"
            aria-label="Minimum year"
          />
        </label>
      </div>

      {filteredCars.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-gray-200 p-12 text-center text-gray-500">
          No vehicles match your filters. Try adjusting the sliders above.
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        Showing {filteredCars.length} of {cars.length} vehicles
      </p>
    </div>
  );
}
