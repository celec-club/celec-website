"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-[#0A0F2D] text-white py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
                {/* Brand & Description */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left">
                    <Image
                        src="/celec.png"
                        alt="CELEC Logo"
                        width={100}
                        height={48}
                        className="h-16 w-auto object-contain"
                    />
                    <div>
                        <h3 className="text-lg font-semibold tracking-tight py-3">CELEC CLUB</h3>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-blue-200">
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="hover:text-blue-400 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-blue-400 transition">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="hover:text-blue-400 transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#events" className="hover:text-blue-400 transition">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Events */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Events</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">
                                    Algerian Robot Cup
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">
                                    JunctionXAlgiers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">
                                    Gaussian Pick
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">
                                    Dishack
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="">
                        <h4 className="font-bold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:contact@celec-club.com">contact@celec-club.com</a></li>
                            <li>Labo13, FGE, USTHB,161</li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 justify-center lg:justify-start mt-6 lg:mt-0">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-black cursor-pointer"
                        asChild
                    >
                        <a href="https://github.com/celec-club/" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-blue-400 cursor-pointer"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/company/celecusthb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-[#e56969] cursor-pointer"
                        asChild
                    >
                        <a href="https://instagram.com/celec_usthb" target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-white/10 pt-6 text-center text-md text-blue-300 uppercase">
                &copy; {new Date().getFullYear()} CELEC Club. All rights reserved.
            </div>
        </footer>
    );
}
