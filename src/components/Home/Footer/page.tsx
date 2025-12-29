import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-linear-to-t from-[#0A0F2D]/95 to-[#0A0F2D] text-white py-12">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 " />

            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-12">
                {/* Brand & Description - Enhanced with gradient */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full" />
                        <Image
                            src="/celec.png"
                            alt="CELEC Logo"
                            width={100}
                            height={48}
                            className="h-16 w-auto object-contain relative z-10"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight py-3 bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                            CELEC CLUB
                        </h3>
                        <p className="text-blue-200/80 text-sm max-w-xs hidden sm:block">
                            Technology & innovation community at USTHB&apos;s Faculty of Electrical Engineering
                        </p>
                    </div>
                </div>

                {/* Links Section with improved visual hierarchy */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-blue-200">
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "#home", label: "Home" },
                                { href: "#faq", label: "FAQ" },
                                { href: "#blog", label: "Blog" },
                                { href: "#events", label: "Events" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-blue-400 transition-colors duration-300 hover:pl-2 flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Events */}
                    <div>
                        <h4 className="font-bold mb-4 text-white flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            Events
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "#", label: "Algerian Robot Cup" },
                                { href: "#", label: "JunctionXAlgiers" },
                                { href: "#", label: "Gaussian Pick" },
                                { href: "#", label: "Dishack" },
                            ].map((event) => (
                                <li key={event.label}>
                                    <a
                                        href={event.href}
                                        className="hover:text-purple-400 transition-colors duration-300 hover:pl-2 flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {event.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-bold mb-4 text-white flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full" />
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:contact@celec-club.com"
                                    className="hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <div className="bg-pink-500/10 p-1.5 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                                        <Mail className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-sm">contact@celec-club.com</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="bg-blue-500/10 p-1.5 rounded-lg">
                                    <MapPin className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-sm">Labo13, FGE, USTHB</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons with enhanced hover effects */}
                <div className="flex items-center gap-4 justify-center lg:justify-start mt-6 lg:mt-0">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-white hover:bg-gray-800/30 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:scale-110"
                        asChild
                    >
                        <a
                            href="https://github.com/celec-club/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-white hover:bg-blue-700/30 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:scale-110"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/company/celecusthb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-white hover:bg-linear-to-r hover:from-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:scale-110"
                        asChild
                    >
                        <a
                            href="https://instagram.com/celec_usthb"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-blue-300/90">
                        <div className="text-sm uppercase tracking-wider mb-2 md:mb-0 px-2">
                            <p>&copy; {new Date().getFullYear()} CELEC Club. All rights reserved.</p>
                        </div>
                        <div className="text-sm uppercase tracking-wider px-2">
                            <p>
                                Hosted by{" "}
                                <a
                                    href="https://algerietelecom.dz/en/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 underline transition-colors normal-case"
                                >
                                    Algérie Télécom
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}