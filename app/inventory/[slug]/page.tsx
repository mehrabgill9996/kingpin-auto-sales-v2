import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CarSpecsTable from "@/components/CarSpecsTable";
import CTAButton from "@/components/CTAButton";
import { cars } from "@/data/cars";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/data/site-config";

type CarPageParams = { slug: string };

export function generateStaticParams(): CarPageParams[] {
  return cars.map((car) => ({ slug: car.slug }));
}

export function generateMetadata({ params }: { params: CarPageParams }): Metadata {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    return { title: "Vehicle Not Found" };
  }

  const title = `${car.name} — ${car.year} ${car.make} ${car.model}`;
  const description = `${car.description} Priced at ${formatPrice(car.price)} at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}.`;

  return {
    title,
    description,
    alternates: { canonical: `/inventory/${car.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: car.imagePlaceholder, alt: `${car.year} ${car.make} ${car.model}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [car.imagePlaceholder],
    },
  };
}

export default function CarDetailPage({ params }: { params: CarPageParams }) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    notFound();
  }

  const galleryImages = [car.imagePlaceholder, car.imagePlaceholder, car.imagePlaceholder];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <Link href="/inventory" className="inline-flex items-center gap-2 text-sm font-medium text-crown-red hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Inventory
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-crown-cream">
            <Image
              src={car.imagePlaceholder}
              alt={`${car.year} ${car.make} ${car.model} — main photo`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-crown-cream">
                <Image
                  src={src}
                  alt={`${car.year} ${car.make} ${car.model} — view ${index + 1}`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl font-bold text-gray-900">{car.name}</h1>
            <p className="mt-1 text-lg text-gray-500">
              {car.year} {car.make} {car.model}
            </p>
            <p className="mt-4 font-serif text-3xl font-bold text-crown-red">{formatPrice(car.price)}</p>
          </div>

          <p className="text-gray-600">{car.description}</p>

          <CarSpecsTable car={car} />

          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" size="lg">
              Contact About This Car
            </CTAButton>
            <CTAButton href="/inventory" variant="secondary" size="lg">
              Back to Inventory
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
