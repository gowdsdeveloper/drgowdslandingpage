import { motion } from 'framer-motion';

const mediaFeatures = [
    {
        id: 1,
        name: "TV9",
        logo: "https://drgowds.com/wp-content/uploads/2024/11/Tv9.png",
        type: "Television Channel",
    },
    {
        id: 2,
        name: "Media Partner 2",
        logo: "https://drgowds.com/wp-content/uploads/2024/11/image-152.png",
        type: "News Media",
    },
    {
        id: 3,
        name: "Media Partner 3",
        logo: "https://drgowds.com/wp-content/uploads/2024/11/image-151.png",
        type: "News Media",
    },
    {
        id: 4,
        name: "Media Partner 4",
        logo: "https://drgowds.com/wp-content/uploads/2024/11/image-154.png",
        type: "News Media",
    },
];

const MediaNews = () => {
    return (
        <section id="news" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Global Recognition</p>
                <h2 className="text-4xl md:text-6xl font-black text-medical-purple leading-tight mb-16 italic">
                    Dr. Gowd's In <span className="text-medical-pink">News</span>
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {mediaFeatures.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center h-48 transition-all duration-500 hover:shadow-2xl hover:shadow-medical-pink/10 hover:-translate-y-2 relative overflow-hidden">
                                {/* Reflective Sheen effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full transform skew-x-12"></div>

                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-16 w-auto object-contain transition-all duration-700"
                                />

                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-medical-pink">{item.type}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Row */}
                <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-12 opacity-40">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">National Coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Patient Education</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Clinical Experts</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaNews;
