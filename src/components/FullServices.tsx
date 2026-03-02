import { MousePointer2, Sparkles, ShieldCheck, Microscope, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceList = [
    {
        id: "full-mouth-rehabilitation",
        title: "Full Mouth Rehabilitation",
        desc: "Digital Smile Design, Teeth Whitening, Veneers & Laminates for a bright smile.",
        color: "bg-emerald-50",
        accent: "text-emerald-600",
        icon: Sparkles
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        desc: "Fixed Single Tooth, Multiple Teeth and Full Mouth Dental Implants with advanced tech.",
        color: "bg-pink-50",
        accent: "text-pink-600",
        icon: ShieldCheck
    },
    {
        id: "root-canal",
        title: "Root Canal",
        desc: "Painless single-sitting root canal treatment with expert endodontists.",
        color: "bg-purple-50",
        accent: "text-purple-600",
        icon: Microscope
    },
    {
        id: "invisaligners",
        title: "Invisaligners",
        desc: "Clear aligners and metal/ceramic braces for perfect teeth alignment.",
        color: "bg-blue-50",
        accent: "text-blue-600",
        icon: Layers
    }
];

const FullServices = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Clinical Excellence</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        A Full Range of <span className="text-medical-pink">Dental Services</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {serviceList.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -12 }}
                            className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-xl flex flex-col items-center text-center group relative overflow-hidden h-full"
                        >
                            <div className={`absolute top-0 left-0 w-2 h-full ${s.accent.replace('text', 'bg')}`}></div>
                            <div className={`${s.color} w-20 h-20 rounded-[28px] flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform`}>
                                <s.icon className={`${s.accent}`} size={36} />
                            </div>
                            <h3 className={`text-xl font-black mb-4 uppercase tracking-tighter text-medical-purple italic`}>{s.title}</h3>
                            <p className="text-gray-500 mb-10 font-medium leading-relaxed">{s.desc}</p>

                            <Link
                                to={`/services/${s.id}`}
                                className={`mt-auto flex items-center gap-2 font-black text-xs uppercase tracking-widest ${s.accent} hover:underline underline-offset-4`}
                            >
                                See More <MousePointer2 size={16} className="transform rotate-[-45deg]" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FullServices;
