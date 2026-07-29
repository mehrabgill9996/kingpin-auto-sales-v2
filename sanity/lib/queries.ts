import type { SanityImageSource } from '@sanity/image-url'

// Cars are ordered by `_createdAt` (the built-in "published" timestamp Sanity
// stamps on every document) since the car schema doesn't yet have a
// dedicated `publishedAt` field.
export const carsQuery = `*[_type == "car"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  price,
  make,
  model,
  year,
  coverImage
}`

export type SanityCar = {
  _id: string
  title: string
  slug: string
  price: number
  make: string
  model: string
  year: number
  coverImage: SanityImageSource | null
}

export const carSlugsQuery = `*[_type == "car"]{"slug": slug.current}`

export const carBySlugQuery = `*[_type == "car" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  price,
  make,
  model,
  year,
  mileage,
  transmission,
  fuelType,
  description,
  status,
  coverImage,
  imageGallery
}`

export type SanityCarDetail = {
  _id: string
  title?: string
  slug: string
  price: number
  make: string
  model: string
  year: number
  mileage: number
  transmission: string
  fuelType?: string | null
  description: string
  status: string
  coverImage: SanityImageSource | null
  imageGallery: SanityImageSource[] | null
}
