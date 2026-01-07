export default function About() {
    return (
        <section id="about-us" className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-blue-600 mb-4 sm:mb-6">
                    About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-gray-900 uppercase">CELEC</span>
                </h2>


                <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed text-left">
                    CELEC is an Algerian scientific club based in the faculty of elec-tronics and computer engineering at USTHB and has been running since 1984.
                    We believe in the importance of promot-ing electronics throughout the student community and the necessity to help them develop and improve their skills.
                </p>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-left">
                    CELEC CLUB brings together students passionate about technology, innovation, and making a tangible impact in the tech world.
                    We focus on cultivating skills, inspiring creativity, and connecting members with opportunities in computing and engineering.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                        Connecting Others
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Building friendly bonds, sharing knowledge, and cultivating a supportive tech community.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                        Vision-Focused
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Dedicated to inspiring innovation in technology and promoting it.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                        Innovation Hub
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Providing support and resources for technology and engineering.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                        Excellence Pursuit
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Committed to delivering quality programs and opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
}
