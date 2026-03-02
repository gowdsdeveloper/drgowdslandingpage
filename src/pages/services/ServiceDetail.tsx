import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import DentalImplantsPage from './DentalImplantsPage';
import InvisalignersPage from './InvisalignersPage';
import FullMouthRehabPage from './FullMouthRehabPage';
import RootCanalPage from './RootCanalPage';
import DrMSGowdPage from '../doctors/DrMSGowdPage';

const serviceData: Record<string, any> = {
    'dental-implants': {
        title: "Dental Implants",
        desc: "Restore your smile with permanent, natural-looking tooth replacements.",
        fullDesc: "Our dental implant procedures use the latest computer-guided surgery to ensure precision and comfort. We provide lifetime warranty on our premium implants.",
        features: ["Single Tooth Implants", "All-on-4 / All-on-6", "Basal Implants", "Zygomatic Implants"],
        img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
    },
    'invisaligners': {
        title: "Invisalign Clear Aligners",
        desc: "Straighten your teeth discreetly without metal braces.",
        fullDesc: "Dr. Gowd's is a Diamond Provider of Invisalign. We use iTero digital scanning to show you your future smile in just 15 minutes.",
        features: ["Clear Aligners", "Teen Invisalign", "Digital Smile Design", "Retention Systems"],
        img: "https://images.unsplash.com/photo-1593054941142-554b17f3d676?auto=format&fit=crop&q=80&w=1200"
    },
    'full-mouth-rehabilitation': {
        title: "Full Mouth Rehabilitation",
        desc: "A complete overhaul of your oral health, function, and aesthetics.",
        fullDesc: "Combining orthodontics, implants, and cosmetic dentistry to restore functional bite and beautiful aesthetics for complex cases.",
        features: ["Bite Correction", "Aesthetic Reconstruction", "Geriatric Care", "Smile Makeover"],
        img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
    },
    'root-canal': {
        title: "Root Canal Treatment",
        desc: "Painless, single-sitting root canal procedures by expert endodontists.",
        fullDesc: "We use LASER and microscopic rotary endodontics to ensure 100% success rate and zero pain during the procedure.",
        features: ["Single Sitting RCT", "Microscopic RCT", "Post & Core", "Laser Endodontics"],
        img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const { openModal } = useBooking();
    const service = serviceData[id || ''];

    if (!service) return <div className="pt-32 text-center font-bold">Service not found.</div>;

    if (id === 'dental-implants') {
        return <DentalImplantsPage />;
    }
    if (id === 'invisaligners') {
        return <InvisalignersPage />;
    }
    if (id === 'full-mouth-rehabilitation') {
        return <FullMouthRehabPage />;
    }
    if (id === 'root-canal') {
        return <RootCanalPage />;
    }
    if (id === 'dr-ms-gowd') {
        return <DrMSGowdPage />;
    }

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="bg-medical-dark-purple py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="flex items-center text-medical-accent hover:text-white mb-8 group transition-colors">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl">{service.desc}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-black text-medical-purple italic">About the Treatment</h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">{service.fullDesc}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.features.map((feat: string) => (
                                <div key={feat} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 className="text-medical-pink" />
                                    <span className="font-bold text-gray-700">{feat}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={openModal}
                            className="bg-pink-purple-gradient text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
                        >
                            Book Consultation Now
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
                    >
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
