import { motion } from 'framer-motion';
import { Award, Zap, Camera, Star, Sparkles, Trophy, CheckCircle2, Milestone, Building2 } from 'lucide-react';

const clinicTimeline = [
    {
        id: 1,
        year: 1967,
        title: "Foundation",
        description: "Introduced advanced dental clinic in India as a pioneer in modern dentistry.",
        icon: <Trophy size={28} />,
        color: "bg-purple-600"
    },
    {
        id: 2,
        year: 1984,
        title: "Cosmetic Dentistry",
        description: "Coined the term and introduced cosmopolitan smile designs to India.",
        icon: <Star size={28} />,
        color: "bg-pink-600"
    },
    {
        id: 3,
        year: 1994,
        title: "Laser Dentistry",
        description: "Dental lasers introduced for the first time in South India for painless care.",
        icon: <Zap size={28} />,
        color: "bg-blue-600"
    },
    {
        id: 4,
        year: 1998,
        title: "Implant Innovation",
        description: "First dental and immediate implants placed in the state with record success.",
        icon: <Award size={28} />,
        color: "bg-emerald-600"
    },
    {
        id: 5,
        year: 2012,
        title: "CAD-CAM Crown",
        description: "First CAD-CAM based digital dental crown manufacturing in South India.",
        icon: <Camera size={28} />,
        color: "bg-orange-600"
    },
    {
        id: 6,
        year: 2015,
        title: "Invisalign Provider",
        description: "Became the first certified Invisalign provider in the state of Telangana.",
        icon: <Sparkles size={28} />,
        color: "bg-indigo-600"
    },
    {
        id: 7,
        year: 2018,
        title: "3D Scanner",
        description: "Introduced 3D intraoral scanner technology for precision impressions.",
        icon: <Milestone size={28} />,
        color: "bg-cyan-600"
    },
    {
        id: 8,
        year: 2023,
        title: "5D Scanner",
        description: "Introduced cutting-edge 5D scanning technology for comprehensive diagnostics.",
        icon: <CheckCircle2 size={28} />,
        color: "bg-medical-pink"
    },
];

const Timeline = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative" id="timeline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-24">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.5em] text-xs mb-4">Chronicles of Excellence</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        Dr. Gowd’s <span className="text-medical-pink">Journey</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Centered Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="w-full bg-pink-purple-gradient rounded-full"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-0">
                        {clinicTimeline.map((item, idx) => (
                            <div key={item.id} className="relative flex flex-col md:flex-row items-center group">

                                {/* Timeline Side (Alternating) */}
                                <div className={`md:w-1/2 flex justify-center md:justify-end ${idx % 2 === 0 ? 'md:order-1 md:pr-16' : 'md:order-2 md:pl-16'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="w-full max-w-md"
                                    >
                                        <div className="bg-white p-8 rounded-[40px] shadow-[0_20px_80px_rgba(122,63,145,0.08)] border border-gray-100 hover:border-medical-pink/30 hover:shadow-medical-pink/5 transition-all duration-500 relative group/card">
                                            {/* Corner Year Indicator */}
                                            <div className={`absolute -top-4 ${idx % 2 === 0 ? '-right-4' : '-left-4'} bg-medical-dark-purple text-white px-6 py-2 rounded-2xl font-black text-xl shadow-xl transform rotate-3 group-hover/card:rotate-0 transition-transform`}>
                                                {item.year}
                                            </div>

                                            <div className="flex flex-col items-center md:items-start md:text-left gap-6">
                                                <div className={`${item.color} p-4 rounded-2xl text-white shadow-lg shadow-black/10`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-medical-purple mb-3 italic group-hover/card:text-medical-pink transition-colors">{item.title}</h3>
                                                    <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Center Point (Node) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="w-12 h-12 bg-white rounded-full border-4 border-medical-pink shadow-xl flex items-center justify-center relative"
                                    >
                                        <div className="w-4 h-4 rounded-full bg-medical-purple animate-pulse"></div>

                                        {/* Floating Year Label for Vertical center */}
                                        <div className={`absolute whitespace-nowrap text-xs font-black uppercase tracking-widest text-medical-purple/20 -z-10 ${idx % 2 === 0 ? 'left-16' : 'right-16'}`}>
                                            Est. {item.year}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Other Side (Empty for Desktop) */}
                                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
                            </div>
                        ))}

                        {/* Culmination Hospital Icon */}
                        <div className="relative pt-24 md:pt-32 flex justify-center">
                            <motion.div
                                initial={{ scale: 0, rotate: -20 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                className="w-16 h-16 bg-medical-dark-purple text-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white z-10"
                            >
                                <Building2 size={32} />
                            </motion.div>

                            {/* Connector line for the icon */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gray-100 hidden md:block -z-0"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Milestones */}
                <div className="mt-32 pt-20 border-t border-gray-100 text-center">
                    <div className="inline-flex items-center gap-6 bg-medical-light px-10 py-6 rounded-full border border-medical-pink/10 shadow-sm">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-medical-purple flex items-center justify-center text-white font-bold text-xs">
                                    {52 + i}+
                                </div>
                            ))}
                        </div>
                        <p className="text-medical-purple font-black uppercase tracking-widest text-sm text-left">
                            Years of Pioneer <br />
                            <span className="text-medical-pink">Dental Care</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
