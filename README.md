# Kingpin Auto Sales

A modern, minimal, SEO-optimized website for **Kingpin Auto Sales**, a car dealership in Regina, Saskatchewan owned by Sahil Sekhon. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting Started

This project was hand-built without running `npm install`, since Node.js/npm were not available in the build environment. Before running it locally, make sure Node.js 18.18+ (or 20+) is installed, then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Other available scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project Structure

```text
app/                     # Next.js App Router routes
  page.tsx                 Home
  inventory/page.tsx        Inventory listing (filter/sort)
  inventory/[slug]/page.tsx Car detail page (static-generated per car)
  about/, contact/, feedback/, privacy-policy/, terms/
  not-found.tsx            Branded 404 page
  sitemap.ts, robots.ts    SEO file conventions
components/              # Reusable UI components
data/
  site-config.ts           Dealership name, address, phone, email, socials
lib/
  format.ts                Price / mileage formatting helpers
sanity/
  schemaTypes/car.ts        Car document schema (title, price, make/model, year, mileage, transmission, fuel type, description, images, status)
  lib/queries.ts            GROQ queries + TypeScript types used to fetch cars
public/
  logo.png                 Crown + car logo (placeholder — replace with your real logo)
```

## Replacing the Logo

Drop your real logo file in at `public/logo.png` (same filename) to replace the placeholder crown-and-car mark used across the Navbar, Footer, Home hero, About page, and metadata/social preview images.

## Editing Inventory

Vehicle inventory is managed live in Sanity Studio (`/studio`), not in code. Add, edit, or remove `Car` documents there — the inventory grid, featured cars on the homepage, and the per-car detail pages (`/inventory/[slug]`) are all generated from Sanity at request/build time via `sanity/lib/queries.ts`, including `generateStaticParams` for static generation.

## Editing Dealership Info

Contact details, address, hours, and social links are centralized in `data/site-config.ts` and used throughout the Footer, Contact page, JSON-LD structured data, and page metadata.
