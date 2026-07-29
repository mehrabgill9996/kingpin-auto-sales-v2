import type { SanityCarDetail } from "@/sanity/lib/queries";
import { formatMileage, formatPrice } from "@/lib/format";

export default function CarSpecsTable({ car }: { car: SanityCarDetail }) {
  const rows: { label: string; value: string }[] = [
    { label: "Year", value: String(car.year) },
    { label: "Make", value: car.make },
    { label: "Model", value: car.model },
    { label: "Mileage", value: formatMileage(car.mileage) },
    { label: "Transmission", value: car.transmission },
    { label: "Fuel Type", value: car.fuelType },
    { label: "Price", value: formatPrice(car.price) },
  ];

  return (
    <table className="w-full overflow-hidden rounded-xl border border-gray-100 text-left">
      <caption className="sr-only">Specifications for {car.title}</caption>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.label} className={index % 2 === 0 ? "bg-crown-cream/50" : "bg-white"}>
            <th scope="row" className="w-1/3 px-4 py-3 font-serif text-sm font-semibold text-gray-700">
              {row.label}
            </th>
            <td className="px-4 py-3 text-sm text-gray-900">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
