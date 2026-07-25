"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import CTAButton from "./CTAButton";

type EmploymentStatus = "Employed Full-Time" | "Employed Part-Time" | "Self-Employed" | "Unemployed" | "Retired";

const employmentStatuses: EmploymentStatus[] = [
  "Employed Full-Time",
  "Employed Part-Time",
  "Self-Employed",
  "Unemployed",
  "Retired",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  employmentStatus: EmploymentStatus;
  monthlyIncome: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  employmentStatus: "Employed Full-Time",
  monthlyIncome: "",
};

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
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }
  if (!values.monthlyIncome.trim() || Number(values.monthlyIncome) < 0) {
    errors.monthlyIncome = "Please enter your monthly income.";
  }
  return errors;
}

export default function FinancingForm() {
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
        <h3 className="font-serif text-2xl font-bold text-crown-red">Application Received!</h3>
        <p className="mt-2 text-gray-600">
          This is a demo application form &mdash; no data was submitted to a lender. A member of our team will follow
          up with real financing options soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-crown-red underline-offset-4 hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="fin-name" className="mb-1 block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="fin-name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "fin-name-error" : undefined}
        />
        {errors.name && (
          <p id="fin-name-error" className="mt-1 text-sm text-crown-red">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fin-email" className="mb-1 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="fin-email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "fin-email-error" : undefined}
          />
          {errors.email && (
            <p id="fin-email-error" className="mt-1 text-sm text-crown-red">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="fin-phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="fin-phone"
            type="tel"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "fin-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="fin-phone-error" className="mt-1 text-sm text-crown-red">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fin-employment" className="mb-1 block text-sm font-medium text-gray-700">
            Employment Status
          </label>
          <select
            id="fin-employment"
            value={values.employmentStatus}
            onChange={(event) => handleChange("employmentStatus", event.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
          >
            {employmentStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="fin-income" className="mb-1 block text-sm font-medium text-gray-700">
            Monthly Income (CAD)
          </label>
          <input
            id="fin-income"
            type="number"
            min="0"
            value={values.monthlyIncome}
            onChange={(event) => handleChange("monthlyIncome", event.target.value)}
            placeholder="e.g. 4000"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 focus:border-crown-gold focus:outline-none focus:ring-2 focus:ring-crown-gold/30"
            aria-invalid={Boolean(errors.monthlyIncome)}
            aria-describedby={errors.monthlyIncome ? "fin-income-error" : undefined}
          />
          {errors.monthlyIncome && (
            <p id="fin-income-error" className="mt-1 text-sm text-crown-red">
              {errors.monthlyIncome}
            </p>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400">
        This is a demo application for illustration purposes only. No information is sent to a real lender.
      </p>

      <CTAButton type="submit" className="w-full sm:w-auto">
        Apply for Financing
      </CTAButton>
    </form>
  );
}
