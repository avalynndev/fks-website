"use client";

import FadeImage from "@/components/ui/fade-image";
import { Footer, FooterBottom } from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "next-view-transitions";
import React, { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`sticky lg:absolute top-0 z-50 w-full p-2 transition-colors duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-container mx-auto">
          <nav
            data-slot="navbar"
            className="flex items-center justify-between p-2"
          >
            <nav
              data-slot="navbar-left"
              className="flex items-center justify-start gap-4"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-md md:text-xl font-bold"
              >
                <FadeImage
                  src="/logo.svg"
                  alt="Future Kids School Logo"
                  width={48}
                  height={48}
                />
                <span className="hidden md:inline">Future Kids School</span>
              </Link>
            </nav>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12">
        <main className="overflow-x-hidden md:overflow-visible">
          <div className="relative overflow-hidden">
            <div
              className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-[0.20]"
              style={{
                backgroundImage: "url('/bg-opaque.png')",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
        </main>
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>
              MKR EDUCATIONAL SOCIETY with the brand name{" "}
              <strong>The Future Kid’s School (“FKS”)</strong>
              is an educational institution founded on 8 February 1997 with an
              objective to give the child an education as a “child would want
              it.” It was founded by <strong>Ms. M Shailaja Rao</strong>. It’s a
              co-educational day school where we work towards making the future
              generations responsible. Our lessons are based on the CICSE board
              recommendations, but not limited to them!
            </p>
            <p>
              Our institution envisions more than mere textbook learning. It
              creates a stimulating and dynamic learning atmosphere. We have
              uniquely designed programs that hone various facets of children
              that allow them to blossom at their own pace. This coupled with
              innovative methods is a great advantage for students.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Consent to Privacy Policy
            </h2>
            <p>
              MKR Society respects the privacy of all users who access and
              utilize its website{" "}
              <a
                href="https://www.thefks.in"
                className="text-blue-600 underline"
              >
                www.thefks.in
              </a>{" "}
              and other websites associated with such URL (collectively the
              "Website"). Any Information collected from you through the Website
              shall be governed by this Privacy Policy (“Privacy Policy”).
            </p>
            <p>
              By accessing the Website, registering on the Website, or availing
              any services provided by MKR Society through the Website, you
              provide an unconditional consent, as required under applicable
              law, for the collection, usage, disclosure, retention and
              processing of your Information including Personal Information by
              MKR Society in accordance with this Privacy Policy.
            </p>
            <p>
              In the event you do not consent to the collection, use, storage
              and/or disclosure of your Information by MKR Society, please exit
              the Website and discontinue use. You can also withdraw your
              consent at any time by writing to MKR Society at{" "}
              <a
                href="mailto:connect@thefks.in"
                className="text-blue-600 underline"
              >
                connect@thefks.in
              </a>
              . Such withdrawal of consent will result in discontinuation of:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Your access and utilization of the Website</li>
              <li>The services for which such Information is required</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Collection and Storage of Information
            </h2>
            <p>
              As used in this Privacy Policy, “Information” shall include data,
              message, text, images, sound, voice, codes, computer programs,
              software, databases or microfilm or computer-generated microfiche.
              “Personal Information” shall mean any information capable of
              identifying you (either directly or indirectly) in combination
              with other information available or likely to be available with
              MKR Society.
            </p>
            <p>
              MKR Society may collect Information including Personal Information
              when you (student/parent/guardian etc.) access and utilize its
              Website for purposes such as enquiry, registration, participation
              in survey and discussion forums etc., including but not limited
              to:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Unique identifiers such as user name, account number, password
              </li>
              <li>
                Contact information such as names, addresses, e-mails, telephone
                numbers
              </li>
              <li>
                Demographic details such as age, education, gender, interests
                and pin code
              </li>
            </ul>
            <p>
              MKR Society may also collect technical information such as IP
              address, browser type, domain names, operating system, and access
              times. This technical information is not considered Personal
              Information unless used with other data that personally identifies
              you.
            </p>
            <p>
              The Information may be stored and processed by MKR Society in
              India or other regions maintaining the same level of data
              protection. You shall be deemed to have consented for such
              transfer by accepting this Privacy Policy.
            </p>
            <p>
              MKR Society will not be responsible for the authenticity of any
              Information supplied by you. Any losses due to incorrect
              Information will be solely attributable to you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Use and Disclosure of Information
            </h2>
            <p>
              MKR Society collects and uses your Information for purposes
              including but not limited to:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Administrative and managerial services</li>
              <li>
                Provision of information related to MKR Society’s services
              </li>
              <li>Sending newsletters, advertisements, and notifications</li>
              <li>Apprising you of events conducted by MKR Society</li>
              <li>
                Conducting surveys or research related to MKR Society’s services
              </li>
            </ul>
            <p>
              MKR Society may disclose your Information to affiliates, partners,
              vendors, and service providers bound by confidentiality
              obligations for providing services to you. MKR Society may also
              disclose your Information to comply with applicable laws, court
              orders, or to protect its rights or property.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Security</h2>
            <p>
              MKR Society undertakes commercially reasonable efforts to protect
              your Information with physical, electronic, and managerial
              safeguards in accordance with applicable laws including the
              Information Technology Act, 2000, and related rules. However, MKR
              Society does not guarantee the continued security or
              confidentiality of your Information, and usage shall be at your
              own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Third Party Sites</h2>
            <p>
              MKR Society’s Website may contain links to third-party websites.
              This Privacy Policy does not cover the privacy practices of those
              third parties. MKR Society disclaims any responsibility for such
              sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
            <p>
              MKR Society’s Website uses cookies to improve your browsing
              experience. Cookies help remember your preferences and display
              relevant content. You may choose to disable cookies in your
              browser settings, though some features may not function properly
              as a result.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Updating Your Personal Information
            </h2>
            <p>
              You may review, correct, update, or delete your Personal
              Information by writing to{" "}
              <a
                href="mailto:connect@thefks.in"
                className="text-blue-600 underline"
              >
                connect@thefks.in
              </a>{" "}
              with sufficient proof of identity and documentation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Notification of Changes
            </h2>
            <p>
              MKR Society may amend this Privacy Policy from time to time by
              posting updates on the Website. You are encouraged to review this
              policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
            <p>
              This Privacy Policy is governed by and construed in accordance
              with the laws of India. You agree to submit to the exclusive
              jurisdiction of the courts at Hyderabad for any disputes arising
              out of or in connection with this policy.
            </p>
            <p>
              MKR Society shall not be liable for any indirect, consequential,
              or special damages, even if foreseeable.
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full px-4 bg-transparent">
        <div className="max-w-container mx-auto">
          <Footer className="bg-transparent">
            <FooterBottom>
              <div>© 2025 The Future Kid's School. All rights reserved.</div>
              <div className="flex items-center gap-4">
                {[
                  { text: "Privacy Policy", href: "/privacy-policy" },
                  { text: "Sitemap", href: "/sitemap" },
                ].map((policy, index) => (
                  <Link key={index} href={policy.href}>
                    {policy.text}
                  </Link>
                ))}
                <ModeToggle />
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </>
  );
}
