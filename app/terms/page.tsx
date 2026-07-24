import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Review the terms of service governing your use of the ${siteConfig.name} website.`,
  alternates: { canonical: "/terms" },
};

const lastUpdated = new Date().toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="font-serif text-4xl font-bold text-gray-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

      <div className="mt-8 space-y-8 text-gray-600">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the {siteConfig.name} website. By
          accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not
          use this website.
        </p>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By using this website, you confirm that you are at least 18 years of age, or that you have the consent
            of a parent or guardian, and that you agree to comply with these Terms and all applicable laws and
            regulations.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">2. Use of Website</h2>
          <p className="mt-3">
            You agree to use this website only for lawful purposes and in a manner that does not infringe the
            rights of, restrict, or inhibit anyone else&rsquo;s use of the site. You may not use this website to
            transmit harmful, offensive, or unlawful content.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">3. Vehicle Listings Disclaimer</h2>
          <p className="mt-3">
            Vehicle listings, including pricing, mileage, specifications, and availability, are provided for
            informational purposes and are subject to change without notice. While we strive for accuracy, we do
            not warrant that all information is complete, current, or error-free. Please contact Kingpin Auto Sales
            directly to confirm vehicle details, pricing, and availability before making any purchasing decisions.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>
          <p className="mt-3">
            All content on this website, including text, graphics, logos, and images, is the property of{" "}
            {siteConfig.name} or its licensors and is protected by applicable intellectual property laws. You may
            not reproduce, distribute, or create derivative works from this content without our prior written
            consent.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">5. Third-Party Links</h2>
          <p className="mt-3">
            Our website may contain links to third-party websites, such as map services or social media platforms.
            We are not responsible for the content, accuracy, or practices of any linked third-party sites.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of this website or reliance on any
            information contained within it.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">7. Governing Law</h2>
          <p className="mt-3">
            These Terms shall be governed by and construed in accordance with the laws of the Province of
            Saskatchewan and the federal laws of Canada applicable therein.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">8. Changes to These Terms</h2>
          <p className="mt-3">
            We reserve the right to update or modify these Terms at any time. Continued use of the website after
            any changes constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">9. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about these Terms, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-crown-red hover:underline">
              {siteConfig.email}
            </a>{" "}
            or{" "}
            <a href={siteConfig.phoneHref} className="font-medium text-crown-red hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
