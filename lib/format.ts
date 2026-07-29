export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(mileage: number): string {
  return `${new Intl.NumberFormat("en-CA").format(mileage)} km`;
}

/**
 * Builds the vehicle title shown across the site directly from a car's
 * year/make/model fields, so it always reflects the latest edits made in
 * Sanity Studio without depending on a separately stored `title` string.
 */
export function vehicleTitle(car: { year: number; make: string; model: string }): string {
  return `${car.year} ${car.make} ${car.model}`.trim();
}
