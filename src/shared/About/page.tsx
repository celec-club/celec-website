import AboutCards from "../components/AboutCards";

export default function About() {
    return (
        <section id="about-us" className="py-16 md:py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-gray-900 mb-6 uppercase">
                    Who are{" "}
                    <span>
                        WE
                    </span>
                </h2>

                <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed text-left">
                    CELEC is an Algerian scientific club based in the faculty of electronics and computer engineering at USTHB and has been running since 1984.
                    We believe in the importance of promot-ing electronics throughout the student community and the necessity to help them develop and improve their skills.
                </p>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-left">
                    CELEC CLUB brings together students passionate about technology, innovation, and making a tangible impact in the tech world.
                    We focus on cultivating skills, inspiring creativity, and connecting members with opportunities in computing and engineering.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AboutCards />
            </div>
        </section>
    );
}
