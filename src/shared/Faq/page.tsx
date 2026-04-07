
"use client";

import { faqItems } from ".";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 ">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about Mindexa
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.15 }}
                    className="space-y-4"
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                        >
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem
                                    value={`faq-${index}`}
                                    className="border rounded-xl border-gray-300 last:border-b overflow-hidden transition-colors data-[state=open]:bg-blue-50"
                                >
                                    <AccordionTrigger className="text-left text-lg px-6 py-4 hover:no-underline font-medium text-gray-900 ">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lg text-gray-700 px-6 pb-6 pt-0">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
