"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { technologySponsor } from "@/utils/sponsors";

export default function TechnologySponsor() {
    return (
        <section
            id="sponsors"
            aria-labelledby="technology-sponsors-heading"
            className="py-20 bg-white dark:bg-black overflow-hidden"
        >
            <div className="text-center mb-14 px-4">
                <h2
                    id="technology-sponsors-heading"
                    className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white"
                >
                    Technology Sponsors
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We&apos;re proud to be supported by our{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        Technology Sponsors
                    </span>
                    .
                </p>
            </div>

            <hr className="w-screen border-gray-200 dark:border-blue-900/40 mb-10" />

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10"
                >
                    {technologySponsor.map((sponsor) => (
                        <motion.div
                            key={sponsor.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                width={160}
                                height={80}
                                className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <hr className="w-screen border-gray-200 dark:border-blue-900/40 mt-10" />
        </section>
    );
}
