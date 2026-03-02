import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const treatmentTabs = [
    {
        id: "dental-implants",
        title: "Dental Implants",
        description: "Restore missing teeth with natural-looking, durable, and functional replacements.",
        icon: "tooth",
        image: "/images/dental_implants.png"
    },
    {
        id: "invisaligners",
        title: "Invisalign",
        description: "Straighten teeth discreetly with comfortable, clear, and removable aligners.",
        icon: "tooth",
        image: "/images/invisalign.png"
    },
    {
        id: "full-mouth-rehabilitation",
        title: "Full Mouth Rehabilitation",
        description: "Revive oral health with personalised, comprehensive dental care solutions.",
        icon: "tooth",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
    },
];

const ServiceHighlight = () => {
    const [hoveredTab, setHoveredTab] = useState(treatmentTabs[0]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Transformations</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        Creating <span className="text-medical-pink">Confident Smiles</span><br />with Expert Care
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-4 order-2 md:order-1">
                        {treatmentTabs.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredTab(item)}
                                className="group"
                            >
                                <div
                                    className={`flex flex-col p-8 rounded-[40px] border transition-all duration-500 cursor-pointer overflow-hidden ${hoveredTab.id === item.id
                                        ? 'bg-medical-dark-purple border-medical-dark-purple shadow-2xl shadow-purple-200'
                                        : 'bg-gray-50 border-gray-100 hover:border-medical-pink/30 hover:bg-white'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-6">
                                            <div className={`p-3 rounded-2xl transition-colors duration-500 ${hoveredTab.id === item.id
                                                ? 'bg-medical-pink text-white'
                                                : 'bg-white text-medical-purple border border-gray-100'
                                                }`}>
                                                <Check size={24} strokeWidth={4} />
                                            </div>
                                            <span className={`text-2xl font-black transition-colors duration-500 italic ${hoveredTab.id === item.id ? 'text-white' : 'text-medical-purple'
                                                }`}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/services/${item.id}`}
                                            className={`p-2 rounded-full transition-all duration-500 ${hoveredTab.id === item.id ? 'bg-white/10 text-white' : 'text-gray-300 opacity-0 group-hover:opacity-100'
                                                }`}
                                        >
                                            <ArrowRight size={24} />
                                        </Link>
                                    </div>

                                    <div className={`grid transition-all duration-500 ease-in-out ${hoveredTab.id === item.id ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
                                        }`}>
                                        <div className="overflow-hidden">
                                            <p className={`font-medium leading-relaxed pl-14 ${hoveredTab.id === item.id ? 'text-purple-100' : 'text-gray-500'
                                                }`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative order-1 md:order-2">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-medical-pink/10 rounded-full blur-[100px] -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-medical-purple/10 rounded-full blur-[100px] -z-10"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={hoveredTab.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-[12px] border-white relative group h-[500px] md:h-[600px]"
                            >
                                <img
                                    src={hoveredTab.image}
                                    alt={hoveredTab.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-medical-purple/40 to-transparent opacity-60"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-12 left-12 right-12 text-white"
                                >
                                    <p className="text-sm font-black uppercase tracking-[0.3em] mb-2 text-medical-pink">Expert Results</p>
                                    <h3 className="text-3xl font-black italic">{hoveredTab.title}</h3>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlight;
