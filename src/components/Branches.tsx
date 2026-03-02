import { useState } from 'react';
import { MapPin, Phone, Navigation, ArrowRight, CheckCircle, ExternalLink, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const clinicLocations = [
    {
        id: 1,
        branch: "Gachibowli",
        phone: "9156060489",
        address: "Fantasy Square, T9/T8, 3rd Floor, Plot No. 1 & 2, Gachibowli Rd, Hyderabad, 500032",
        mapLink: "https://maps.app.goo.gl/BAzvLKa55TmVRj3t7",
        image: "https://drgowds.com/wp-content/uploads/2024/12/Screenshot-2024-12-01-202638.png",
        timing: "10 AM - 8 PM",
    },
    {
        id: 2,
        branch: "Madhapur",
        phone: "9156060489",
        address: "S.B.R’s C.V Towers, Flat No. 402, Above Karachi Bakery, Hi-tech City, Madhapur, 500081",
        mapLink: "https://maps.app.goo.gl/8Nw2ZhmcWRfTXh4w9",
        image: "https://drgowds.com/wp-content/uploads/2024/12/Screenshot-2024-12-01-203036.png",
        timing: "10 AM - 9 PM",
    },
    {
        id: 3,
        branch: "Nanakramguda",
        phone: "9156060489",
        address: "Nanakaramguda Toll Booth, Nehru Outer Ring Rd, Khajaguda, Hyderabad, 500075",
        mapLink: "https://maps.app.goo.gl/cY5hUhcqjAunqJgXA",
        image: "https://drgowds.com/wp-content/uploads/2024/12/Screenshot-2024-12-01-203405.png",
        timing: "9 AM - 8 PM",
    },
    {
        id: 4,
        branch: "Koti",
        phone: "9156060489",
        address: "Opp Clock Tower, Sultan Bazar, Koti, Hyderabad, 500095",
        mapLink: "https://maps.app.goo.gl/JogyUZEF176n9XEx5",
        image: "https://drgowds.com/wp-content/uploads/2024/12/Screenshot-2024-12-01-203551.png",
        timing: "10 AM - 7 PM",
    }
];

const Branches = () => {
    const [selectedBranch, setSelectedBranch] = useState(clinicLocations[0]);
    const { openModal } = useBooking();

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="branches">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-pink/5 rounded-full blur-[120px] -mr-64 -mt-64 text-blue-100"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-medical-purple/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 lg:text-left lg:flex lg:items-end lg:justify-between">
                    <div>
                        <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Presence</p>
                        <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                            Find the <span className="text-medical-pink underline decoration-medical-pink/30 underline-offset-8">Perfect Clinic</span><br />
                            Near Your Location
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Interactive Menu */}
                    <div className="lg:col-span-5 space-y-4">
                        {clinicLocations.map((loc) => (
                            <motion.div
                                key={loc.id}
                                onClick={() => setSelectedBranch(loc)}
                                className={`group p-6 rounded-[32px] border transition-all duration-500 cursor-pointer overflow-hidden ${selectedBranch.id === loc.id
                                    ? 'bg-white border-medical-pink shadow-[0_20px_50px_rgba(217,35,131,0.15)] ring-1 ring-medical-pink/20'
                                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-medical-purple/20'
                                    }`}
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${selectedBranch.id === loc.id
                                            ? 'bg-medical-pink text-white rotate-12 shadow-lg shadow-medical-pink/30'
                                            : 'bg-white text-medical-purple border border-gray-100'
                                            }`}>
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className={`text-2xl font-black italic transition-colors ${selectedBranch.id === loc.id ? 'text-medical-purple' : 'text-gray-700'}`}>
                                                    {loc.branch}
                                                </h3>
                                                {selectedBranch.id === loc.id && (
                                                    <span className="bg-medical-pink/10 text-medical-pink text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Active</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`transition-all duration-500 ${selectedBranch.id === loc.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="w-10 h-10 rounded-full bg-medical-light flex items-center justify-center text-medical-pink">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Info on selection */}
                                <AnimatePresence>
                                    {selectedBranch.id === loc.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
                                                <div className="flex gap-3 items-start">
                                                    <Navigation size={18} className="text-medical-pink mt-1 shrink-0" />
                                                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{loc.address}</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Phone size={18} className="text-medical-pink shrink-0" />
                                                    <p className="text-medical-purple font-black">{loc.phone}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: The Showcase */}
                    <div className="lg:col-span-7 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedBranch.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="relative rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-50 h-[600px]"
                            >
                                <img
                                    src={selectedBranch.image}
                                    alt={selectedBranch.branch}
                                    className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                                />

                                {/* Aesthetic Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark-purple/80 via-transparent to-transparent"></div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[40px] shadow-2xl">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Clock className="text-medical-pink" size={18} />
                                                    <span className="text-white text-xs font-black uppercase tracking-widest">{selectedBranch.timing}</span>
                                                </div>
                                                <h4 className="text-3xl font-black text-white italic">{selectedBranch.branch} Hospital</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                <a
                                                    href={selectedBranch.mapLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="bg-medical-pink text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-white hover:text-medical-pink transition-all shadow-xl shadow-medical-pink/20"
                                                >
                                                    <Navigation size={18} />
                                                    Get Direction
                                                </a>
                                                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
                                                    <ExternalLink size={18} />
                                                    Photos
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Trust Badge */}
                                <div className="absolute top-10 left-10 inline-flex items-center gap-3 bg-white shadow-xl px-6 py-3 rounded-2xl border border-pink-50">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-black text-medical-purple uppercase tracking-[0.2em]">Open & Sanitized</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Final CTA Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 bg-medical-dark-purple rounded-[40px] p-10 flex flex-col lg:flex-row items-center justify-between gap-8 group"
                >
                    <div className="flex items-center gap-6">
                        <div className="bg-white/10 p-5 rounded-3xl group-hover:bg-medical-pink transition-colors">
                            <CheckCircle size={40} className="text-white" />
                        </div>
                        <div className="text-white">
                            <h5 className="text-2xl font-black italic">Ready to transform your smile?</h5>
                            <p className="text-white/60 font-medium">Book a direct consultant at {selectedBranch.branch}.</p>
                        </div>
                    </div>
                    <button
                        onClick={openModal}
                        className="bg-white text-medical-dark-purple px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-medical-pink hover:text-white transition-all active:scale-95"
                    >
                        Reserve Your Slot
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Branches;
