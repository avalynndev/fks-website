import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../ui/footer";
import { ModeToggle } from "../ui/mode-toggle";
import FadeImage from "@/components/ui/fade-image";
import { Link } from "next-view-transitions";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = (
    <FadeImage
      src="/logo.svg"
      alt="Future Kids School Logo"
      width={48}
      height={48}
    />
  ),
  name = "The Future Kid's School",
  columns = [
    {
      title: "Links",
      links: [
        { text: "Home", href: "/" },
        { text: "Admissions", href: "/playgroup-jubileehills/connect" },
        { text: "Well Being", href: "/playgroup-jubileehills/well-being" },
        { text: "Campus", href: "/playgroup-jubileehills/campus" },
      ],
    },
  ],
  copyright = "© 2025 The Future Kid's School. All rights reserved.",
  policies = [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Sitemap", href: "/sitemap" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full px-4 bg-transparent", className)}>
      <div className="max-w-container mx-auto">
        <Footer className="bg-transparent">
          <FooterContent>
            <FooterColumn className="col-span-2">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p>
                Plot No. 1248, Rd Number 62, Lane adjacent to Heritage Fresh,
                Jubilee Hills, Hyderabad, Telangana 500033
              </p>
              <p>📞 +91 72079 90125</p>
              <p>📧 connect@thefkspg.in</p>
            </FooterColumn>
            <FooterColumn className="md:col-start-4">
              {columns[0].links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="text-muted-foreground text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <Link key={index} href={policy.href}>
                  {policy.text}
                </Link>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
