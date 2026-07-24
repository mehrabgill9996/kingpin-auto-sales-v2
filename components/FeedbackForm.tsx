"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Star } from "lucide-react";
import CTAButton from "./CTAButton";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError("Please add your name, a star rating, and a short comment.");
      return;
    }
    setError("");
    setSubmitted(true);
    setName("");
    setRating(0);
    setComment("");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-crown-gold/30 bg-crown-cream/50 p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-crown-red">Thank you for your feedback!</h3>
        <p className="mt-2 text-gray-600">
          We appreciate you taking the time to share your experience with Kingpin Auto Sales.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-crown-red underline-offset-4 hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="fb-name" className="mb-1 block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          id="fb-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
        />
      </div>

      <div>
        <span className="mb-1 block text-sm font-medium text-gray-700">Rating</span>
        <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${star} star${star > 1 ? "s" : ""}`}
              aria-pressed={rating === star}
              className="p-1"
            >
              <Star
                className={`h-7 w-7 transition-colors ${
                  (hoverRating || rating) >= star ? "fill-crown-gold text-crown-gold" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="fb-comment" className="mb-1 block text-sm font-medium text-gray-700">
          Comment
        </label>
        <textarea
          id="fb-comment"
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
        />
      </div>

      {error && <p className="text-sm text-crown-red">{error}</p>}

      <CTAButton type="submit">Submit Feedback</CTAButton>
    </form>
  );
}
