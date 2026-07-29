import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CarSpecsTable from "@/components/CarSpecsTable";
import CTAButton from "@/components/CTAButton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { carBySlugQuery, type SanityCarDetail } from "@/sanity/lib/queries";
import { formatPrice, vehicleTitle } from "@/lib/format";
import { siteConfig } from "@/data/site-config";

// Skip static prerendering so Studio edits (year/make/model, fuel type,
// cover image, price, etc.) are reflected on every request.
export const dynamic = "force-dynamic";
export const revalidate = 0;

type CarPageParams = { slug: string };

const freshFetch = { next: { revalidate: 0 } } as const;

export async function generateMetadata({ params }: { params: CarPageParams }): Promise<Metadata> {
  const car = await client.fetch<SanityCarDetail | null>(
    carBySlugQuery,
    { slug: params.slug },
    freshFetch,
  );

  if (!car) {
    return { title: "Vehicle Not Found" };
  }

  const title = vehicleTitle(car);
  const description = `${car.description} Priced at ${formatPrice(car.price)} at ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}.`;
  const imageUrl = car.coverImage
    ? urlFor(car.coverImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/inventory/${car.slug}` },
    openGraph: {
      title,
      description,
      images: imageUrl ? [{ url: imageUrl, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function CarDetailPage({ params }: { params: CarPageParams }) {
  const car = await client.fetch<SanityCarDetail | null>(
    carBySlugQuery,
    { slug: params.slug },
    freshFetch,
  );

  if (!car) {
    notFound();
  }

  const title = vehicleTitle(car);

  const galleryImages =
    car.imageGallery && car.imageGallery.length > 0
      ? car.imageGallery
      : car.coverImage
        ? [car.coverImage, car.coverImage, car.coverImage]
        : [];

  const mainImageUrl = car.coverImage
    ? urlFor(car.coverImage).width(1000).height(750).fit("crop").auto("format").url()
    : null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <Link href="/inventory" className="inline-flex items-center gap-2 text-sm font-medium text-crown-red hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Inventory
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-crown-cream">
            {mainImageUrl ? (
              <Image
                src={mainImageUrl}
                alt={`${title} — main photo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-400">No image available</div>
            )}
          </div>
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-crown-cream">
                  <Image
                    src={urlFor(image).width(400).height(300).fit("crop").auto("format").url()}
                    alt={`${title} — view ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl font-bold text-gray-900">{title}</h1>
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

          <div className="rounded-2xl border border-crown-gold/30 bg-crown-cream/40 p-5">
            <p className="text-sm text-gray-600">
              Have a car to trade toward this one? Get an instant estimated value.
            </p>
            <CTAButton href="/trade-in" variant="ghost" size="sm" className="mt-2">
              Get Your Trade-In Value →
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
