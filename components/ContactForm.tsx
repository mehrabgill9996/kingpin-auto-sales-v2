"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import CTAButton from "./CTAButton";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-crown-gold/30 bg-crown-cream/50 p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-crown-red">Thank you!</h3>
        <p className="mt-2 text-gray-600">
          Your message has been received. A member of the Kingpin Auto Sales team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-crown-red underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-crown-red">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-crown-red">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone Number <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-crown-red">
            {errors.message}
          </p>
        )}
      </div>

      <CTAButton type="submit" className="w-full sm:w-auto">
        Send Message
      </CTAButton>
    </form>
  );
}
