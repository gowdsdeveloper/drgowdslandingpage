import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "Doctors",
        href: "/doctors",
        dropdown: [
            { name: "Dr. M.S. Gowd", href: "/doctors/dr-ms-gowd" },
            { name: "Dr. Snigdha Gowd", href: "/doctors/dr-snigdha-gowd" },
            { name: "Dr. T. Shankar", href: "/doctors/dr-t-shankar" }
        ]
    },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Dental Implants", href: "/services/dental-implants" },
            { name: "Invisaligners", href: "/services/invisaligners" },
            { name: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation" },
            { name: "Root Canal", href: "/services/root-canal" }
        ]
    },
    {
        name: "News",
        href: "#news"
    },
    {
        name: "Contact Us",
        href: "#contact"
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { openModal } = useBooking();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src="/logo.webp" alt="Dr. Gowd's Dental Hospital" className="h-12 md:h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href}
                                    onClick={(e) => {
                                        if (item.href.startsWith('#')) {
                                            const element = document.getElementById(item.href.substring(1));
                                            if (element) {
                                                e.preventDefault();
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                    className="flex items-center text-gray-700 hover:text-medical-pink font-bold text-sm uppercase tracking-wider transition-all"
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                                        >
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className="block px-6 py-4 text-sm font-semibold text-gray-600 hover:bg-medical-pink/5 hover:text-medical-pink border-l-4 border-transparent hover:border-medical-pink transition-all"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Contact & CTA */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase font-bold text-gray-400">Call Support</span>
                            <a href="tel:9156060489" className="text-medical-purple font-black text-lg">9156060489</a>
                        </div>
                        <button
                            onClick={openModal}
                            className="bg-medical-green text-white px-8 py-4 rounded-full font-black uppercase tracking-wider shadow-lg shadow-green-200 hover:bg-opacity-90 transition-all hover:-translate-y-1 active:scale-95 text-sm"
                        >
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-medical-purple"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {navigation.map((item) => (
                                <div key={item.name} className="space-y-4">
                                    <Link
                                        to={item.href}
                                        onClick={(e) => {
                                            if (item.href.startsWith('#')) {
                                                const element = document.getElementById(item.href.substring(1));
                                                if (element) {
                                                    e.preventDefault();
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                            if (!item.dropdown) setIsOpen(false);
                                        }}
                                        className="block text-xl font-black text-medical-purple"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="pl-6 space-y-4 border-l-2 border-medical-pink/20">
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block font-bold text-gray-500 hover:text-medical-pink transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-8 pt-4">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openModal();
                                    }}
                                    className="w-full bg-medical-green text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
                                >
                                    Quick Appointment
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
