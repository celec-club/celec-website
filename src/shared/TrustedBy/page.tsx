"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/utils/sponsors";

export default function TrustedBy() {
    const midpoint = Math.ceil(sponsors.length / 2);
    const topRowSponsors = sponsors.slice(0, midpoint);
    const bottomRowSponsors = sponsors.slice(midpoint);

    return (
        <section id="sponsors" className="py-16 md:py-20 bg-white overflow-hidden">
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
                    Trusted By
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                    We're proud to be supported by these outstanding{" "}
                    <span className="font-bold text-gray-900">Sponsors</span>.
                </p>
            </div>

            {/* Animated Logos */}
            <div className="w-full relative overflow-hidden space-y-6 sm:space-y-8 md:space-y-10">
                <hr className="border-t border-gray-200 mb-4 sm:mb-6" />

                {/* Top Row - Scrolling Left */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-6 sm:gap-8 md:gap-12"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        style={{ willChange: "transform" }}
                    >
                        {[...topRowSponsors, ...topRowSponsors].map((sponsor, index) => (
                            <div
                                key={`top-${index}`}
                                className="flex items-center justify-center min-w-20 sm:min-w-30 md:min-w-40 shrink-0"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={160}
                                    height={80}
                                    className="object-contain h-16 sm:h-20 md:h-24 w-auto opacity-80 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Scrolling Right */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-6 sm:gap-8 md:gap-12"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        style={{ willChange: "transform" }}
                    >
                        {[...bottomRowSponsors, ...bottomRowSponsors].map((sponsor, index) => (
                            <div
                                key={`bottom-${index}`}
                                className="flex items-center justify-center min-w-20 sm:min-w-30 md:min-w-40 shrink-0"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={160}
                                    height={80}
                                    className="object-contain h-16 sm:h-20 md:h-24 w-auto opacity-80 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <hr className="border-t border-gray-200 mt-4 sm:mt-6" />
            </div>
        </section>
    );
}
