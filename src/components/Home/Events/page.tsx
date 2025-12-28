"use client";

export default function Events() {
    const nationalEvents = [
        { title: "Algerian Robot Cup", description: "Annual technology conference", image: "🎯" },
        { title: "JunctionXAlgiers", description: "Showcase of student projects", image: "💡" },
        { title: "Django Girl", description: "48-hour coding challenge", image: "💻" },
    ];

    const internalEvents = [
        { title: "Workshop Series", description: "Monthly skill-building sessions", image: "🛠️" },
        { title: "Dishack", description: "Connect with industry professionals", image: "🤝" },
        { title: "Gaussian Pick", description: "Technical certification courses", image: "📚" },
    ];

    return (
        <section id="events" className="py-20 px-4 bg-[#0A0F2D]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-6">Our Events</h2>
                <p className="text-center text-blue-200 mb-16 max-w-3xl mx-auto">
                    From national competitions to internal workshops, we organize and participate in events that challenge, inspire, and connect the tech world community.
                </p>

                {/* National Events */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8">National Events :</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {nationalEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-indigo-900/40 backdrop-blur-sm border border-indigo-700/30 rounded-xl overflow-hidden hover:bg-indigo-900/60 transition transform hover:scale-105 hover:shadow-lg group"
                            >
                                <div className="h-48 bg-linear-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-6xl">
                                    {event.image}
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                                        {event.title}
                                    </h4>
                                    <p className="text-blue-200 text-sm">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internal Events */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8">Internal Events :</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {internalEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-indigo-900/40 backdrop-blur-sm border border-indigo-700/30 rounded-xl overflow-hidden hover:bg-indigo-900/60 transition transform hover:scale-105 hover:shadow-lg group"
                            >
                                <div className="h-48 bg-linear-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl">
                                    {event.image}
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                                        {event.title}
                                    </h4>
                                    <p className="text-blue-200 text-sm">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
