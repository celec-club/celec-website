import {
    FiLayers,
    FiTarget,
    FiAward
} from "react-icons/fi";

import { FaLightbulb } from "react-icons/fa";

const cards = [
    {
        title: "Projects",
        description:
            "Supporting students in practical projects that solve real-world industrial problems.",
        icon: FiLayers,
    },
    {
        title: "Conferences",
        description:
            "Hosting conferences with leading researchers sharing their expertise.",
        icon: FiTarget,
    },
    {
        title: "Workshops",
        description:
            "Offering on-campus and online training in programming, electronics, mechanics, and more.",
        icon: FaLightbulb,
    },
    {
        title: "Competitions",
        description:
            "Organizing and participating in national and international competitions.",
        icon: FiAward,
    },
];


export default function AboutCards() {
    return (
        <>
            {
                cards.map(({ title, description, icon: Icon }) => (
                    <div
                        key={title}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="text-blue-600 text-2xl" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                            {title}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base">
                            {description}
                        </p>
                    </div>
                ))
            }
        </>
    )
}