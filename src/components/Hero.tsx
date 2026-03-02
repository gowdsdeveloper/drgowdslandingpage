import { CheckCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useBooking } from '../context/BookingContext';
import type { ReactNode } from 'react';

interface HeroProps {
    title?: ReactNode;
}

const Hero = ({ title }: HeroProps) => {
    const { openModal } = useBooking();
    return (
        <section className="py-24 bg-gradient-to-br from-white to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-[-1rem] pb-4">Welcome to Dr. Gowd's</p>
                        <h1 className="text-4xl md:text-6xl font-black text-medical-purple leading-tight italic">
                            {title || (
                                <>Best Dental <span className="text-medical-pink">Doctors in</span> Hyderabad!</>
                            )}
                        </h1>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">55+ Years of Legacy</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">2 Millions + Smiles delivered</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">20+ Professional Dental Doctors</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">5+ Advanced Dental Hospitals</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={openModal}
                                className="bg-medical-pink text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-all uppercase tracking-widest text-sm"
                            >
                                Book Appointment!
                            </button>
                            <a
                                href="https://wa.me/9156060489"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-medical-green text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
                            >
                                <WhatsAppIcon size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://drgowds.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-01-at-7.02.42-PM.jpeg"
                                alt="Dr. Gowd's Dental Hospital"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
