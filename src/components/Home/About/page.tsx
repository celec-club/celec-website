export default function About() {
    return (
        <section id="about-us" className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    About CELEC
                </h2>

                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    CELEC CLUB was founded in 1984 at USTHB by a group of passionate computer science and electrical engineering students.
                    Our mission is to create a vibrant community where students can learn, innovate, and collaborate on technology projects.
                    We aim to empower the next generation of tech leaders through hands-on experience, workshops, and community-driven initiatives.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                    CELEC CLUB brings together students passionate about technology, innovation, and making a tangible impact in the tech world.
                    We focus on cultivating skills, inspiring creativity, and connecting members with opportunities in computing and engineering.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Connecting Others
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Building friendly bonds, sharing knowledge, and cultivating a supportive tech community.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Vision-Focused
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Dedicated to inspiring innovation in technology and promoting it.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Innovation Hub
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Providing support and resources for technology and engineering.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Excellence Pursuit
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Committed to delivering quality programs and opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
}
