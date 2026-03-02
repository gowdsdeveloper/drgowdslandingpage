import { useState } from 'react';
import { Play, Star, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialVideos = [
    {
        id: 1,
        title: "Life Changing Implant Experience",
        youtubeId: "XuXI4YGE9jI",
        category: "Dental Implants",
        patient: "Sarah J.",
        rating: 5
    },
    {
        id: 2,
        title: "Discreet Smile Correction",
        youtubeId: "sdv-0BTJlfU",
        category: "Invisalign",
        patient: "Michael R.",
        rating: 5
    },
    {
        id: 3,
        title: "Full Mouth Transformation",
        youtubeId: "MvGHZSrRpeM",
        category: "Rehabilitation",
        patient: "Elena D.",
        rating: 5
    },
    {
        id: 4,
        title: "Painless Root Canal Story",
        youtubeId: "8TacaG1OzAo",
        category: "Root Canal",
        patient: "David W.",
        rating: 5
    },
    {
        id: 5,
        title: "Advanced Cosmetic Result",
        youtubeId: "5WC_iyjV7K8",
        category: "Composite Bonding",
        patient: "Priya K.",
        rating: 5
    },
];

const Testimonials = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-medical-pink/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.4em] text-xs mb-4">Patient Voices</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-[1.1]">
                        What People <span className="text-medical-pink">Say About Us</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Patient" />
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 font-medium ml-2">
                            <span className="text-medical-purple font-black">5.0</span>/5.0 Based on 12,000+ Reviews
                        </p>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialVideos.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-medical-pink/10">
                                {/* Thumbnail Container */}
                                <div
                                    className="relative h-64 cursor-pointer overflow-hidden"
                                    onClick={() => setActiveVideo(video.youtubeId)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-125">
                                            <Play size={24} className="text-medical-pink fill-medical-pink" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                        <span className="text-white text-[10px] font-black uppercase tracking-widest">{video.category}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(video.rating)].map((_, i) => (
                                                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-black text-medical-purple italic leading-tight mb-4 group-hover:text-medical-pink transition-colors">
                                            "{video.title}"
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                        <span className="font-bold text-gray-700">{video.patient}</span>
                                        <div className="flex items-center gap-2 text-medical-pink font-bold text-sm uppercase tracking-widest group/link">
                                            <span
                                                className="cursor-pointer"
                                                onClick={() => setActiveVideo(video.youtubeId)}
                                            >Watch Story</span>
                                            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-medical-dark-purple/95 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;
