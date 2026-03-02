import { useState } from 'react';
import { motion } from 'framer-motion';
import DoctorCards from '../../components/DoctorCards';
import Branches from '../../components/Branches';
import Testimonials from '../../components/Testimonials';
import Timeline from '../../components/Timeline';
import MediaNews from '../../components/MediaNews';
import QuickForm from '../../components/QuickForm';
import FAQ from '../../components/FAQ';
import Hero from '../../components/Hero';
import { invisalignFAQs } from '../../data/faqs';

const InvisalignTable = () => {
    const comparisonData = [
        { feature: "Comfort", invisalign: "Smooth, custom fit", braces: "Can cause sore spots or discomfort" },
        { feature: "Removal", invisalign: "Removable for eating & brushing", braces: "Cannot be removed by patient" },
        { feature: "Appearance", invisalign: "Clear, virtually invisible aligners", braces: "Highly visible brackets and wires" },
        { feature: "Treatment Time", invisalign: "6 to 18 months on average", braces: "1 to 3 years on average" },
        { feature: "Maintenance", invisalign: "Easy to clean", braces: "Requires special care and tools" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-medical-pink/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 className="text-4xl md:text-5xl font-black text-medical-pink mb-16">
                    Why Choose <span className="text-medical-purple italic">Invisalign ?</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100"
                >
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-pink-purple-gradient text-white">
                                <th className="p-8 font-black text-xl uppercase tracking-widest first:rounded-tl-[40px] italic">Feature</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest italic text-center">Invisalign</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest last:rounded-tr-[40px] italic text-center text-pink-200">Traditional Braces</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={`group transition-colors ${index % 2 === 0 ? 'bg-pink-50/50' : 'bg-white'}`}>
                                    <td className="p-8 font-black text-medical-purple text-lg italic border-b border-pink-100/50">{row.feature}</td>
                                    <td className="p-8 text-gray-700 font-bold text-center border-b border-pink-100/50 group-hover:bg-medical-pink/5 transition-all">
                                        <div className="flex flex-col items-center">
                                            {row.invisalign}
                                        </div>
                                    </td>
                                    <td className="p-8 text-gray-400 italic text-center border-b border-pink-100/50 group-hover:bg-gray-50/50 transition-all">
                                        {row.braces}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

const InvisalignersPage = () => {
    const [activeImage, setActiveImage] = useState("/images/What is Invisalign.jpg");
    // Scroll to top on mount

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <Hero title={<>Best <span className="text-medical-pink">Invisalign Dentists</span> in Hyderabad!</>} />

            {/* CUSTOM TABLE */}
            <InvisalignTable />

            {/* OUR DOCTORS */}
            <DoctorCards />

            {/* ACHIEVE A CONFIDENT SMILE */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Invisalign</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-medical-pink leading-tight">
                            Achieve a <span className="text-medical-purple italic">Confident Smile</span> <br />
                            with Invisible Aligners
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4">
                            {[
                                {
                                    id: 1,
                                    title: "What is Invisalign?",
                                    description: "Invisalign uses custom clear aligners to gradually straighten teeth, avoiding metal brackets or wires entirely.",
                                    image: "/images/What is Invisalign.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Types of Invisalign",
                                    description: "Invisalign Clear Aligners: Leading clear aligners for comfort. Clear Correct Clear Aligners: Affordable alternative for varying case needs.",
                                    image: "/images/Types of Invisalign.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Why Invisalign?",
                                    description: "Because it’s clear, comfortable, and fits your lifestyle while straightening your teeth discreetly.",
                                    image: "/images/Why Invisalign.jpg"
                                }
                            ].map((tab, idx) => (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative"
                                    onMouseEnter={() => setActiveImage(tab.image)}
                                >
                                    <div className="flex flex-col bg-gray-50 p-6 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-medical-pink/30 transition-all duration-500 cursor-pointer overflow-hidden">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="bg-white p-3 rounded-2xl shadow-sm text-medical-pink group-hover:bg-medical-pink group-hover:text-white transition-colors duration-500">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-1.33 0-2.61-.314-3.52-1.012-.897-.687-1.48-1.748-1.48-3.138v-3.793l-1.928.964A2 2 0 0 1 2.293 13.13l.056-.112a10 10 0 0 1 1.258-2.673c1.196-1.84 2.846-3.082 4.606-3.693 1.056-.367 2.05-.28 2.825.106.772-.387 1.765-.473 2.825-.106 1.76.611 3.41 1.853 4.605 3.693a10 10 0 0 1 1.259 2.673l.056.113a2 2 0 0 1-2.78 2.891l-1.927-.964v3.793c0 1.39-.583 2.451-1.48 3.138C14.61 20.686 13.33 21 12 21Z" /><path d="M12 21v-4" /><path d="M7 14v4" /><path d="M17 14v4" /></svg>
                                            </div>
                                            <span className="text-xl font-black text-medical-purple transition-colors duration-500">{tab.title}</span>
                                        </div>

                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <p className="text-gray-600 font-medium leading-relaxed pt-2 pl-14">
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 h-[500px]"
                            >
                                <img
                                    src={activeImage}
                                    alt="Invisalign Anatomy"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-medical-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-lg font-bold italic">Advanced Invisalign Care</p>
                                    <p className="text-sm font-medium text-white/80">Straightening your teeth properly.</p>
                                </div>
                            </motion.div>

                            {/* Floating elements for premium look */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-medical-pink/10 rounded-full blur-2xl -z-10 group-hover:bg-medical-pink/20 transition-all"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-medical-purple/10 rounded-full blur-3xl -z-10 group-hover:bg-medical-purple/20 transition-all"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE CLEAR CHOICE */}
            <section className="py-24 bg-[#faf9fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Benefits of Invisalign</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-medical-pink leading-tight mb-16">
                        The Clear Choice <br />
                        <span className="text-medical-purple italic">for Perfecting Your Smile</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-pink-50 border border-pink-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[160px] text-center gap-4">
                            <div className="w-12 h-12 bg-pink-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl">All-day Comfort</h3>
                            <p className="text-sm text-gray-600 font-medium">No sharp metal brackets or wires to cause irritation.</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[160px] text-center gap-4">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl">Faster Treatments</h3>
                            <p className="text-sm text-gray-600 font-medium">Achieve desired results in less time compared to traditional braces.</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[160px] text-center gap-4">
                            <div className="w-12 h-12 bg-emerald-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl">Eat Freely</h3>
                            <p className="text-sm text-gray-600 font-medium">Removable aligners mean no food restrictions - eat what you love.</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[160px] text-center gap-4">
                            <div className="w-12 h-12 bg-amber-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl">Clear Appearance</h3>
                            <p className="text-sm text-gray-600 font-medium">Virtually invisible design lets you smile confidently throughout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REMAINING SECTIONS */}
            <Branches />
            <Testimonials />
            <Timeline />
            <MediaNews />
            <QuickForm />
            <FAQ faqs={invisalignFAQs} />
        </div>
    );
};

export default InvisalignersPage;
