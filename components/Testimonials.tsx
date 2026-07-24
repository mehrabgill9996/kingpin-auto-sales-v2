import Link from "next/link";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-crown-gold text-crown-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-crown-cream/40 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Real feedback from drivers across Saskatchewan who bought with Kingpin Auto Sales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <StarRating rating={item.rating} />
              <p className="flex-1 text-sm leading-relaxed text-gray-600">&ldquo;{item.comment}&rdquo;</p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-serif font-semibold text-gray-900">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.location}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Had a great experience?{" "}
          <Link href="/feedback" className="font-medium text-crown-red hover:underline">
            Share your feedback
          </Link>
        </p>
      </div>
    </section>
  );
}
