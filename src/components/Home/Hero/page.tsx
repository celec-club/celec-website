"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    const [videoOpen, setVideoOpen] = useState(false);
    const youtubeVideoId = "bTjUUuo_t9A";

    const handleOpenVideo = () => {
        setVideoOpen(true);
    };

    return (
        <section id="home" className="pt-40 pb-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-gray-900">
                            Your Potential
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-blue-600">
                                Our Mission
                            </span>
                        </h1>

                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Empowering the next generation of tech leaders through innovation, collaboration, and excellence in technology education. Join us in shaping the future of technology.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium cursor-pointer">
                                Learn More
                            </button>

                            <button
                                onClick={handleOpenVideo}
                                className="text-blue-600 border border-blue-400 hover:bg-blue-50 px-8 py-3 rounded-full transition font-medium flex items-center gap-2 cursor-pointer"
                            >
                                <Play size={16} />
                                Watch Our Story
                            </button>
                        </div>
                    </div>

                    {/* Right Video Preview */}
                    <div className="relative">
                        <div
                            className="aspect-video rounded-2xl overflow-hidden border-2 border-blue-200 group hover:border-blue-400 transition-all duration-300 cursor-pointer relative"
                            onClick={handleOpenVideo}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && handleOpenVideo()}
                        >
                            {/* YouTube Thumbnail */}
                            <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                <img
                                    src="/cover-image.png"
                                    alt="Video thumbnail showing CELEC introduction"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-gray-100/60 to-gray-200/60" />
                            </div>

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play size={32} className="ml-1 text-white" />
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-linear-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-xl -z-10 opacity-70"></div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute -top-12 right-0 text-white z-50 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
                            aria-label="Close video"
                        >
                            <X size={32} />
                        </button>

                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                title="CELEC - Our Journey and Mission"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Our Journey at CELEC
                            </h3>
                            <p className="text-gray-300">
                                Discover how we're shaping the future of technology education
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
