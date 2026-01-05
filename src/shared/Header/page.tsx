"use client";

import Image from "next/image";
import { Menu, X, Calendar, Clock, XCircle } from "lucide-react";
import { navLinks } from "@/utils/links";
import { useHeader } from "@/hooks/useHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Configuration for registration deadline
const REGISTRATION_DEADLINE = "2026-01-25T23:59:59";
const TIME_ZONE = "Africa/Algiers";

export default function Header() {
    const { isOpen, setIsOpen, headerShrink, headerRef, handleNavClick } = useHeader();
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState<string>("");
    const [isHovering, setIsHovering] = useState(false);
    const [showDeadlinePopup, setShowDeadlinePopup] = useState(false);

    useEffect(() => {
        const checkDeadline = () => {
            const now = new Date();
            const deadline = new Date(REGISTRATION_DEADLINE);
            if (now > deadline) {
                setIsRegistrationOpen(false);
                setTimeRemaining("Registration Closed");
                return;
            }
            const diffMs = deadline.getTime() - now.getTime();
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            if (diffDays > 0) setTimeRemaining(`${diffDays}d ${diffHours}h left`);
            else if (diffHours > 0) setTimeRemaining(`${diffHours}h ${diffMinutes}m left`);
            else setTimeRemaining(`${diffMinutes}m left`);
            setIsRegistrationOpen(true);
        };
        checkDeadline();
        const interval = setInterval(checkDeadline, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (isHovering && isRegistrationOpen) {
            setShowDeadlinePopup(true);
            timeoutId = setTimeout(() => setShowDeadlinePopup(false), 10000);
        } else setShowDeadlinePopup(false);
        return () => { if (timeoutId) clearTimeout(timeoutId); };
    }, [isHovering, isRegistrationOpen]);

    const handleJoinClick = (e: React.MouseEvent) => {
        if (!isRegistrationOpen) { e.preventDefault(); e.stopPropagation(); }
    };

    const handleClosePopup = () => setShowDeadlinePopup(false);
    const registrationWebsite = () => "https://registrations.celec.codes";

    const JoinButton = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className="relative">
            <a
                href={isRegistrationOpen ? registrationWebsite() : "#"}
                target={isRegistrationOpen ? "_blank" : undefined}
                rel={isRegistrationOpen ? "noopener noreferrer" : undefined}
                onClick={handleJoinClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${isMobile
                    ? "px-6 py-2 text-base"
                    : headerShrink
                        ? "px-5 py-1.5 text-sm"
                        : "px-6 py-2"
                    } ${isRegistrationOpen
                        ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                        : "bg-gray-300/50 text-gray-500 cursor-not-allowed"
                    }`}
                title={!isRegistrationOpen ? "Registration period has ended" : "Join CELEC Club"}
            >
                {isRegistrationOpen ? (
                    <>
                        <span>Join</span>
                        {!isMobile && (
                            <span className="hidden lg:inline text-xs opacity-80 font-normal">
                                {timeRemaining}
                            </span>
                        )}
                    </>
                ) : (
                    <>
                        <Calendar size={14} />
                        <span>Closed</span>
                    </>
                )}
            </a>

            <AnimatePresence>
                {showDeadlinePopup && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-64 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 z-50"
                    >
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="Close deadline information"
                        >
                            <XCircle size={16} />
                        </button>
                        <div className="flex items-start gap-3">
                            <Clock size={18} className="text-blue-500 mt-0.5 shrink-0" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-medium text-gray-900">Registration Deadline</p>
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                        Auto-hides in 10s
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">
                                    Join before: <span className="text-blue-600 font-medium">
                                        {new Date(REGISTRATION_DEADLINE).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'short', day: 'numeric',
                                            hour: '2-digit', minute: '2-digit', timeZone: TIME_ZONE
                                        })}
                                    </span>
                                </p>
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                                    <span className="text-xs font-medium text-blue-600">{timeRemaining}</span>
                                    <span className="text-xs text-gray-500">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isRegistrationOpen && isHovering && !isMobile && (
                <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-gray-100 rounded-lg shadow border border-gray-200 z-50">
                    <div className="flex items-start gap-3">
                        <Calendar size={16} className="text-gray-500 mt-0.5" />
                        <div>
                            <p className="font-medium text-gray-900">Registration Closed</p>
                            <p className="text-sm text-gray-700 mt-1">
                                The registration period ended on{" "}
                                <span className="text-gray-500 font-medium">
                                    {new Date(REGISTRATION_DEADLINE).toLocaleDateString('en-US', {
                                        year: 'numeric', month: 'long', day: 'numeric'
                                    })}
                                </span>
                            </p>
                            <p className="text-xs text-gray-500 mt-2">Stay tuned for next season!</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <motion.header
            ref={headerRef}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerShrink
                ? "py-2 backdrop-blur-lg bg-white/90 border-b border-gray-200"
                : "py-3 backdrop-blur-sm bg-white/80 border-b border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center space-x-3"
                >
                    <a href="#" className="flex items-center">
                        <Image
                            src="/celec-blue.png"
                            width={100}
                            height={64}
                            alt="CELEC Logo"
                            className={`transition-all duration-300 ${headerShrink ? "h-14 w-auto" : "h-16 w-auto"}`}
                        />
                    </a>
                    <a href="https://algerietelecom.dz/en">
                        <Image
                            src="/sponsors/at.png"
                            width={100}
                            height={64}
                            alt="Algerie Telecom logo"
                            className={`transition-all duration-300 ${headerShrink ? "h-14 w-auto" : "h-16 w-auto"}`}
                        />
                    </a>
                </motion.div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path, link.name)}
                            className={`text-gray-900 hover:text-blue-500 transition-all duration-200 ${headerShrink ? "text-sm" : "text-base"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
                        <JoinButton />
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            className="text-gray-900"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden backdrop-blur-lg bg-white/95 w-full px-4 py-6 flex flex-col items-center gap-6 border-t border-gray-200"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path, link.name)}
                            className="text-gray-900 text-lg font-semibold hover:text-blue-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-full max-w-xs">
                        <JoinButton isMobile={true} />
                        {!isRegistrationOpen && (
                            <div className="mt-3 p-3 bg-gray-100 rounded-lg text-center">
                                <p className="text-sm text-gray-500">
                                    Registration closed on{" "}
                                    {new Date(REGISTRATION_DEADLINE).toLocaleDateString('en-US', {
                                        month: 'short', day: 'numeric'
                                    })}
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
