
const celebrities = [
    {
        name: "Nagarjuna",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Nagarjuna-1.png"
    },
    {
        name: "Ritu Varma",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Rithu-Varma-1.png"
    },
    {
        name: "Sai Kumar Pudipeddi",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Sai-Kumar-pudipeddi-1.png"
    },
    {
        name: "Aadi Pudipeddi",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Aadi-pudipeddi-1.png"
    },
    {
        name: "Jayasudha",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Jayasudha-1.png"
    },
    {
        name: "V Srinivas Goud",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/V.-Srinivas-Goud-1.png"
    },
    {
        name: "V Easwaraiah",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/V.-Easwaraiah-1.png"
    },
    {
        name: "Tulla Devendar Goud",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Tulla-Devendar-Goud-1.png"
    },
    {
        name: "Manchu Lakshmi",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Manchu-Lakshmi-1.png"
    },
    {
        name: "Madhu Goud",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Madhu-goud-1.png"
    },
    {
        name: "K V Ramana Chary",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/K.-V.-Ramana-Chary-1.png"
    },
    {
        name: "Jwala Gutta",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Jwala-Gutta-1.png"
    },
    {
        name: "Bramhaji",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Bramhaji.png"
    },
    {
        name: "A K Khan",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/A.-K.-Khan-1.png"
    },
    {
        name: "Mounika Thagngalapalli",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Mounika-Thagngalapalli-1.png"
    },
    {
        name: "Prema Pandurang",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Prema-Pandurang-1.png"
    },
    {
        name: "Sushilkumar Shinde",
        image: "https://drgowdsdental.com/wp-content/uploads/2025/03/Sushilkumar-Shinde-1.png"
    }
];

const CelebritiesScroll = () => {
    return (
        <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-medical-purple mb-6">
                    Trusted by Celebrities <span className="text-gray-500 font-medium">Across India</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                    Dr. Gowds Dental Hospital, trusted by stars, politicians, and many others, believes "a smile is a curve that sets everything straight."
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative w-full flex items-center overflow-hidden">
                <div className="absolute left-0 top-0 w-24 md:w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-24 md:w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] w-max gap-8 px-4">
                    {[...celebrities, ...celebrities].map((celebrity, index) => (
                        <div key={index} className="flex flex-col items-center gap-6 flex-shrink-0 group">
                            <div className="w-[180px] h-[280px] md:w-[220px] md:h-[340px] rounded-[100px] overflow-hidden shadow-xl border border-gray-100 transition-transform duration-500 group-hover:scale-105 flex-shrink-0">
                                <img
                                    src={celebrity.image}
                                    alt={celebrity.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="font-bold text-gray-700 text-sm md:text-base">{celebrity.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 1rem));
                    }
                }
            `}</style>
        </section>
    );
};

export default CelebritiesScroll;
