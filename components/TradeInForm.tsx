"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import CTAButton from "./CTAButton";
import { formatPrice } from "@/lib/format";
import { conditions, estimateTradeInValue, type Condition, type TradeInEstimateResult } from "@/lib/tradeInEstimate";

type FormState = {
  year: string;
  make: string;
  model: string;
  mileage: string;
  condition: Condition;
  name: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1989 }, (_, index) => currentYear - index);

const initialState: FormState = {
  year: String(currentYear - 5),
  make: "",
  model: "",
  mileage: "",
  condition: "Good",
  name: "",
  email: "",
  phone: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.make.trim()) {
    errors.make = "Please enter the make.";
  }
  if (!values.model.trim()) {
    errors.model = "Please enter the model.";
  }
  if (!values.mileage.trim() || Number(values.mileage) < 0) {
    errors.mileage = "Please enter the mileage in km.";
  }
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

export default function TradeInForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [estimate, setEstimate] = useState<TradeInEstimateResult | null>(null);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setEstimate(
        estimateTradeInValue({
          year: Number(values.year),
          mileage: Number(values.mileage),
          condition: values.condition,
        })
      );
    }
  }

  if (estimate) {
    return (
      <div className="rounded-2xl border border-crown-gold/30 bg-crown-cream/50 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-crown-gold">Demo Estimate</p>
        <h3 className="mt-2 font-serif text-2xl font-bold text-crown-red">Your Estimated Trade-In Value</h3>
        <p className="mt-4 font-serif text-4xl font-bold text-gray-900">
          {formatPrice(estimate.low)} &ndash; {formatPrice(estimate.high)}
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
          Estimated value only, subject to in-person inspection. Final trade-in value may vary based on vehicle
          condition, market demand, and a physical inspection at our lot.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/contact" size="md">
            Book an Appraisal
          </CTAButton>
          <button
            type="button"
            onClick={() => setEstimate(null)}
            className="font-semibold text-crown-red underline-offset-4 hover:underline"
          >
            Estimate another vehicle
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="year" className="mb-1 block text-sm font-medium text-gray-700">
            Year
          </label>
          <select
            id="year"
            value={values.year}
            onChange={(event) => handleChange("year", event.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="condition" className="mb-1 block text-sm font-medium text-gray-700">
            Condition
          </label>
          <select
            id="condition"
            value={values.condition}
            onChange={(event) => handleChange("condition", event.target.value as Condition)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          >
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="make" className="mb-1 block text-sm font-medium text-gray-700">
            Make
          </label>
          <input
            id="make"
            type="text"
            value={values.make}
            onChange={(event) => handleChange("make", event.target.value)}
            placeholder="e.g. Honda"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.make)}
            aria-describedby={errors.make ? "make-error" : undefined}
          />
          {errors.make && (
            <p id="make-error" className="mt-1 text-sm text-crown-red">
              {errors.make}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="model" className="mb-1 block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            id="model"
            type="text"
            value={values.model}
            onChange={(event) => handleChange("model", event.target.value)}
            placeholder="e.g. Civic"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.model)}
            aria-describedby={errors.model ? "model-error" : undefined}
          />
          {errors.model && (
            <p id="model-error" className="mt-1 text-sm text-crown-red">
              {errors.model}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mileage" className="mb-1 block text-sm font-medium text-gray-700">
            Mileage (km)
          </label>
          <input
            id="mileage"
            type="number"
            min="0"
            value={values.mileage}
            onChange={(event) => handleChange("mileage", event.target.value)}
            placeholder="e.g. 85000"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.mileage)}
            aria-describedby={errors.mileage ? "mileage-error" : undefined}
          />
          {errors.mileage && (
            <p id="mileage-error" className="mt-1 text-sm text-crown-red">
              {errors.mileage}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <p className="mb-4 text-sm font-semibold text-gray-700">Your contact info</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
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

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
              Phone Number <span className="text-gray-400">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            />
          </div>
        </div>
      </div>

      <CTAButton type="submit" className="w-full sm:w-auto">
        Get My Estimated Value
      </CTAButton>
    </form>
  );
}
