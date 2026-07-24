import type { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Feedback",
  description: `Share your experience with ${siteConfig.name}. We'd love to hear how we did.`,
  alternates: { canonical: "/feedback" },
};

export default function FeedbackPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Share Your Feedback</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Bought a car with us or stopped by the lot? Let us know how we&rsquo;re doing.
        </p>
      </div>
      <div className="mt-10 rounded-2xl border border-gray-100 p-8 shadow-sm">
        <FeedbackForm />
      </div>
    </section>
  );
}
