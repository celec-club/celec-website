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
        <section id="home" className="pt-40 pb-20 px-4 bg-[#0A0F2D]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            Your Potential
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                                Our Mission
                            </span>
                        </h1>
                        <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                            Empowering the next generation of tech leaders through innovation, collaboration, and excellence in technology education. Join us in shaping the future of technology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium cursor-pointer">
                                Learn More
                            </button>
                            <button
                                onClick={handleOpenVideo}
                                className="text-white border border-blue-400 hover:bg-blue-500/20 px-8 py-3 rounded-full transition font-medium flex items-center gap-2 cursor-pointer"
                            >
                                <Play size={16} />
                                Watch Our Story
                            </button>
                        </div>
                    </div>

                    {/* Right Video Preview */}
                    <div className="relative">
                        <div
                            className="aspect-video rounded-2xl overflow-hidden border-2 border-indigo-700/50 backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300 cursor-pointer relative"
                            onClick={handleOpenVideo}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleOpenVideo()}
                        >
                            {/* YouTube Thumbnail */}
                            <div className="w-full h-full bg-linear-to-br from-indigo-900/60 to-purple-900/60 relative overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                                    alt="Video thumbnail showing CELEC introduction"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback to lower quality thumbnail
                                        e.currentTarget.src = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;
                                    }}
                                />
                                {/* Fallback gradient background */}
                                <div className="absolute inset-0 bg-linear-to-br from-indigo-900/60 to-purple-900/60" />
                            </div>

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0F2D]/90 via-[#0A0F2D]/40 to-transparent"></div>

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/50 backdrop-blur-sm">
                                    <Play size={32} className="ml-1 text-white" />
                                </div>
                            </div>

                            {/* Video info overlay */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-medium">Our Story</p>
                                <p className="text-sm text-blue-200">Watch now</p>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10 opacity-50"></div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
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

                        {/* Video title in modal */}
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Our Journey at CELEC</h3>
                            <p className="text-blue-200">Discover how we're shaping the future of technology education</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}