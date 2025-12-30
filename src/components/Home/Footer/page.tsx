import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-200 bg-white text-gray-700 py-12">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 " />

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left">
          <Image
            src="/celec-blue.png"
            alt="CELEC Logo"
            width={100}
            height={48}
            className="h-16 w-auto object-contain"
          />
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight py-3 text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-blue-600">
              CELEC CLUB
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-sm max-w-xs hidden sm:block">
              Technology & innovation community at USTHB&apos;s Faculty of Electrical Engineering
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 text-sm text-gray-600">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#faq", label: "FAQ" },
                { href: "#blog", label: "Blog" },
                { href: "#events", label: "Events" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-all duration-300 hover:pl-2 flex items-center group text-xs sm:text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              Events
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Algerian Robot Cup",
                "JunctionXAlgiers",
                "Gaussian Pick",
                "Dishack",
              ].map((event) => (
                <li key={event}>
                  <a
                    href="#events"
                    className="hover:text-purple-600 transition-all duration-300 hover:pl-2 flex items-center group text-xs sm:text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:contact@celec-club.com"
                  className="hover:text-pink-600 transition-colors duration-300 flex items-center gap-2 group text-xs sm:text-sm"
                >
                  <div className="bg-pink-100 p-1.5 rounded-lg group-hover:bg-pink-200 transition-colors">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>contact@celec-club.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="bg-blue-100 p-1.5 rounded-lg">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Labo13, FGE, USTHB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-6 lg:mt-0">
          {[
            {
              href: "https://github.com/celec-club/",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/company/celecusthb/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "https://instagram.com/celec_usthb",
              icon: Instagram,
              label: "Instagram",
            },
          ].map(({ href, icon: Icon, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
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
