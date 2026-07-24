import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <p className="font-serif text-6xl font-bold text-crown-red">404</p>
      <h1 className="font-serif text-3xl font-bold text-gray-900">This road doesn&rsquo;t lead anywhere.</h1>
      <p className="max-w-md text-gray-600">
        The page you&rsquo;re looking for has been sold, moved, or never existed. Let&rsquo;s get you back on the
        road.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/">Back to Home</CTAButton>
        <CTAButton href="/inventory" variant="secondary">
          View Inventory
        </CTAButton>
      </div>
    </section>
  );
}
