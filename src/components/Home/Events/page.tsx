import { nationalEvents, internalEvents } from "@/utils/events";
import Image from "next/image";

export default function Events() {
    return (
        <section id="events" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
                    Our Events
                </h2>

                <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                    From national competitions to internal workshops, we organize and participate in events that challenge, inspire, and connect the tech world community.
                </p>

                {/* National Events */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        National Events :
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {nationalEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-lg group"
                            >
                                <div className="h-48 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={192}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
                                        {event.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internal Events */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        Internal Events :
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {internalEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-lg group"
                            >
                                <div className="h-48 bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={192}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
                                        {event.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
