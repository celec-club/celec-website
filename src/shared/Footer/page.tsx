import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  { href: "https://github.com/celec-club/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/company/celecusthb/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/celec_usthb", icon: Instagram, label: "Instagram" },
];

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
  { href: "#events", label: "Events" },
];

const EVENTS = ["Algerian Robot Cup", "JunctionXAlgiers", "Gaussian Pick", "Dishack"];

const FooterSection = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
  <div>
    <h4 className="font-bold mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }} />
      {title}
    </h4>
    {children}
  </div>
);

const FooterLink = ({ href, label, color }: { href: string; label: string; color?: string }) => (
  <li>
    <a
      href={href}
      className={`flex items-center group text-xs sm:text-sm transition-all duration-300 hover:pl-2 ${color ? `hover:text-[${color}]` : "hover:text-blue-600"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-2 opacity-0 group-hover:opacity-100`}
        style={{ backgroundColor: color || "#3b82f6" }}
      />
      {label}
    </a>
  </li>
);

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-200 bg-white text-gray-700 py-12">
      <div className="absolute top-0 left-0 right-0 h-1" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-3xl font-bold tracking-tight py-3 text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-blue-600">
              CELEC CLUB
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-sm max-w-xs hidden sm:block">
              Technology & innovation community at USTHB&apos;s Faculty of Electrical Engineering
            </p>

            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-6 lg:mt-0">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="mt-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 text-sm text-gray-600">
          <FooterSection title="Quick Links" color="#3b82f6">
            <ul className="space-y-2 sm:space-y-3">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} color="#3b82f6" />
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Events" color="#8b5cf6">
            <ul className="space-y-2 sm:space-y-3">
              {EVENTS.map((event) => (
                <FooterLink key={event} href="#events" label={event} color="#8b5cf6" />
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us" color="#ec4899">
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:usthb.celec@gmail.com"
                  className="flex items-center gap-2 group text-xs sm:text-sm transition-colors duration-300 hover:text-pink-600"
                >
                  <div className="bg-pink-100 p-1.5 rounded-lg group-hover:bg-pink-200 transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>usthb.celec@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm">
                <a href="https://maps.app.goo.gl/bDsV35SusKT9k2LN8" className="flex items-center gap-2 group text-xs sm:text-sm transition-colors duration-300 hover:text-blue-600" target="_blank">
                  <div className="bg-blue-100 p-1.5 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <span>Labo13, FGE, USTHB, Bab Ezzouar</span>
                </a>
              </li>
            </ul>
          </FooterSection>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-gray-500 text-xs sm:text-sm">
          <p className="uppercase tracking-wider">
            © {new Date().getFullYear()} CELEC Club. All rights reserved.
          </p>
          <p className="uppercase tracking-wider">
            Hosted by{" "}
            <a
              href="https://algerietelecom.dz/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500 underline transition-colors normal-case"
            >
              Algérie Télécom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
