"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/financing", label: "Financing" },
  { href: "/recently-sold", label: "Recently Sold" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/feedback", label: "Feedback" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8" aria-label="Main navigation">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-wide text-crown-red md:text-xl"
          aria-label="Kingpin Auto Sales home"
        >
          Kingpin <span className="text-crown-gold">Auto Sales</span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-black transition-colors hover:text-crown-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href="/trade-in" variant="secondary" size="sm">
            Trade-In Value
          </CTAButton>
          <CTAButton href="/inventory" size="sm">
            View Inventory
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-black lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2 font-medium text-black hover:bg-crown-cream hover:text-crown-red"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex flex-col gap-2 pt-2">
            <CTAButton
              href="/trade-in"
              variant="secondary"
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Your Trade-In Value
            </CTAButton>
            <CTAButton href="/inventory" className="w-full text-center" onClick={() => setIsOpen(false)}>
              View Inventory
            </CTAButton>
          </li>
        </ul>
      )}
    </header>
  );
}
