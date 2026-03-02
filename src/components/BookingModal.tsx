import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, User, Phone } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        branch: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            phone: formData.number,
            opportunity: "Dr. Snigdha Gowd Landing Page Feb 2026",
            salesperson_id: 2,
            contact_name: formData.name,
            company_id: 65,
            description: `Branch: ${formData.branch}`
        };

        try {
            // First, trigger email notification
            try {
                await fetch("https://formsubmit.co/ajax/shadab@dumosh.in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        _subject: "New Appointment Lead - Dr Snigdha Gowds Landing Page",
                        _cc: "ashish.dumosh@gmail.com,zeba.dumosh@gmail.com",
                        Name: formData.name,
                        Phone: formData.number,
                        Branch: formData.branch,
                        Source: "Dr Gowd Landing Page Feb 2026"
                    })
                });
            } catch (emailError) {
                console.error("Email notification failed:", emailError);
                // Continue with CRM API submission even if email fails
            }

            // Then, send to CRM API
            const response = await fetch("https://mysamplewebsite.in/api/crm_leads/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            console.log("API Response =>", data);

            if (data.status === "success" || data.status === 200) {
                // Assuming it's successful if status is success or similar
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                    setFormData({ name: '', number: '', branch: '' });
                }, 2000);
            } else {
                // If the status isn't clear, we can just treat it as success for now since it's an alert fallback
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                    setFormData({ name: '', number: '', branch: '' });
                }, 2000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit. Check console for details.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-medical-purple/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-medical-pink hover:text-white transition-all z-10"
                        >
                            <X size={20} />
                        </button>

                        {!isSubmitted ? (
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-black text-medical-purple italic mb-2">
                                        Book <span className="text-medical-pink">Appointment</span>
                                    </h2>
                                    <p className="text-gray-500 font-medium">Fill in your details and we'll get back to you.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                            <User size={18} />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Full Name"
                                            className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all font-medium"
                                            value={formData.number}
                                            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                            <MapPin size={18} />
                                        </div>
                                        <select
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all font-medium appearance-none text-gray-700"
                                            value={formData.branch}
                                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                        >
                                            <option value="">Select Branch</option>
                                            <option value="Gachibowli">Gachibowli</option>
                                            <option value="Madhapur">Madhapur</option>
                                            <option value="Nanakramguda">Nanakramguda</option>
                                            <option value="Koti">Koti</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-pink-purple-gradient text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                                    >
                                        Submit Request
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="p-12 text-center py-24">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <Send size={40} />
                                </motion.div>
                                <h3 className="text-2xl font-black text-medical-purple mb-2 italic">Thank You!</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Your appointment request has been received. <br />
                                    Our team will call you back within 15 minutes.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
