import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the privacy policy for ${siteConfig.name}, explaining how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
};

const lastUpdated = new Date().toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="font-serif text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

      <div className="mt-8 space-y-8 text-gray-600">
        <p>
          {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
          committed to protecting the personal information you share with us when you visit our website, browse our
          inventory, or contact our dealership in {siteConfig.address.city}, {siteConfig.address.province}. This
          Privacy Policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
          <p className="mt-3">
            We may collect personal information that you voluntarily provide to us, such as your name, email
            address, phone number, and any message details, when you submit our contact form, feedback form, or
            otherwise communicate with us. We may also automatically collect certain technical information, such as
            your browser type, device information, and pages visited, through standard web analytics tools.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
          <p className="mt-3">
            We use the information we collect to respond to your inquiries, provide information about vehicles and
            services, improve our website and customer experience, and communicate with you about your interactions
            with Kingpin Auto Sales. We do not sell your personal information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">3. Cookies &amp; Tracking Technologies</h2>
          <p className="mt-3">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience,
            remember your preferences, and understand how visitors interact with our site. You can adjust your
            browser settings to refuse cookies, though this may affect certain website features.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">4. Third-Party Disclosure</h2>
          <p className="mt-3">
            We may share information with trusted third-party service providers who assist us in operating our
            website or conducting our business (such as hosting or analytics providers), provided those parties
            agree to keep this information confidential. We may also disclose information when required by law or
            to protect the rights, property, or safety of Kingpin Auto Sales, our customers, or others.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">5. Data Security</h2>
          <p className="mt-3">
            We take reasonable administrative and technical measures to protect the personal information we collect
            from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission
            over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">6. Your Rights &amp; Choices</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of the personal information we hold about you at
            any time by contacting us using the details below. We will respond to reasonable requests in accordance
            with applicable privacy laws.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">7. Children&rsquo;s Privacy</h2>
          <p className="mt-3">
            Our website is not directed at children under the age of 13, and we do not knowingly collect personal
            information from children.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">8. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated
            revision date.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900">9. Contact Us</h2>
          <p className="mt-3">
            If you have questions or concerns about this Privacy Policy or how your information is handled, please
            contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-crown-red hover:underline">
              {siteConfig.email}
            </a>{" "}
            or{" "}
            <a href={siteConfig.phoneHref} className="font-medium text-crown-red hover:underline">
              {siteConfig.phone}
            </a>
            , or by mail at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}.
          </p>
        </div>
      </div>
    </section>
  );
}
