import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} in ${siteConfig.address.city}, ${siteConfig.address.province}. Call, email, or send us a message.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Questions about a vehicle, financing, or trade-ins? We&rsquo;d love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Send us a message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="font-serif text-xl font-semibold text-gray-900">Get in touch</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crown-red" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-crown-red" aria-hidden="true" />
                <a href={siteConfig.phoneHref} className="hover:text-crown-red">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-crown-red" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-crown-red">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-crown-red" aria-hidden="true" />
                <span>
                  {siteConfig.hours.map((entry) => (
                    <span key={entry.days} className="block">
                      {entry.days}: {entry.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <iframe
              title={`${siteConfig.name} location map — Regina, SK`}
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
