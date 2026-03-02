import { Phone, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { openModal } = useBooking();
    return (
        <footer className="bg-medical-dark-purple text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <img src="/logo.webp" alt="Dr. Gowd's Dental Hospital" className="h-16 md:h-20 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            Over 55 years of clinical excellence in dental care. Providing world-class treatments with advanced technology.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4 text-sm text-gray-300">
                                <Phone size={18} className="text-medical-pink" />
                                <a href="tel:9156060489" className="hover:text-medical-pink transition-colors">9156060489</a>
                            </li>
                        </ul>
                    </div>

                    {/* Our Branches */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Our Branches</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="https://maps.app.goo.gl/BAzvLKa55TmVRj3t7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-medical-pink transition-colors"><MapPin size={16} className="text-medical-pink" /> <span>Gachibowli</span></a></li>
                            <li><a href="https://maps.app.goo.gl/8Nw2ZhmcWRfTXh4w9" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-medical-pink transition-colors"><MapPin size={16} className="text-medical-pink" /> <span>Madhapur</span></a></li>
                            <li><a href="https://maps.app.goo.gl/cY5hUhcqjAunqJgXA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-medical-pink transition-colors"><MapPin size={16} className="text-medical-pink" /> <span>Puppalaguda</span></a></li>
                            <li><a href="https://maps.app.goo.gl/awBnPCdRHewwbsTZ7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-medical-pink transition-colors"><MapPin size={16} className="text-medical-pink" /> <span>Koti</span></a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="hover:text-medical-pink cursor-pointer transition-colors block"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#our-doctors"
                                    onClick={(e) => {
                                        const element = document.getElementById('our-doctors');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-medical-pink cursor-pointer transition-colors block"
                                >
                                    Our Doctors
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/#services"
                                    onClick={(e) => {
                                        const element = document.getElementById('services');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-medical-pink cursor-pointer transition-colors block"
                                >
                                    Treatments
                                </Link>
                            </li>
                            <li
                                onClick={openModal}
                                className="hover:text-medical-pink cursor-pointer"
                            >
                                Book Appointment
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-sm text-gray-500 font-medium">
                    <p>© 2026 Dr. Gowd's Dental Hospital. All Rights Reserved.</p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <span>Partner with</span>
                        <a href="https://www.dumosh.in/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img alt="Dumosh Logo" className="inline-block w-24 opacity-90 hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded-md" src="/images/dlogowhite.png" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
