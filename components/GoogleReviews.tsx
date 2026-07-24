import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="bg-crown-cream/40 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Real reviews from Kingpin Auto Sales customers on Google.
          </p>
        </div>

        {/* Elfsight Google Reviews widget — script is loaded client-side after
            hydration via next/script, and the target div starts empty on both
            server and client render, so there is no hydration mismatch. */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-f3d0b88e-fb4a-483f-9287-3825e456c5bb" data-elfsight-app-lazy />
      </div>
    </section>
  );
}
