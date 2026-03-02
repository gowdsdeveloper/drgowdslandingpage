import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const QuickForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        branch: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            name: formData.name,
            phone: formData.phone,
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
                        Phone: formData.phone,
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
                setIsSuccess(true);
                setFormData({ name: '', phone: '', branch: '' });

                // Optional: reset after showing thank you
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setIsSuccess(true); // Treat as success for alert fallback
                setFormData({ name: '', phone: '', branch: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-medical-purple leading-tight">
                    Book Your <span className="text-medical-pink">Appointment</span> Now!
                </h2>
                <p className="text-gray-500 mb-12">Just enter your details and our team will call you back within 15 minutes.</p>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800"
                        />
                        <input
                            required
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800"
                        />
                        <select
                            required
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800 appearance-none"
                        >
                            <option value="">Select Branch for Appointment</option>
                            <option value="Gachibowli">Gachibowli</option>
                            <option value="Madhapur">Madhapur</option>
                            <option value="Nanakramguda">Nanakramguda</option>
                            <option value="Koti">Koti</option>
                        </select>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-pink-purple-gradient text-white font-bold py-5 rounded-2xl uppercase tracking-[0.2em] shadow-xl hover:shadow-pink-500/20 transform hover:-translate-y-1 transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? 'Submitting...' : 'Next'}
                        </button>
                    </form>
                ) : (
                    <div className="p-12 text-center py-24 bg-gray-50/50 rounded-3xl border border-gray-100 shadow-inner">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100"
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
            </div>
        </section>
    );
};

export default QuickForm;
