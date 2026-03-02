import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { useBooking } from '../../context/BookingContext';
import { useEffect } from 'react';

const DrTShankarPage = () => {
    const { openModal } = useBooking();
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* HER0 SECTION */}
            <div className="pt-32 pb-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center text-medical-purple hover:text-medical-pink mb-8 group transition-colors font-bold uppercase tracking-widest text-sm">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Home
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-medical-pink leading-tight">
                                Prof. Dr. T. Shankar
                            </h1>
                            <p className="text-xl font-bold text-medical-purple italic italic">Chief Cosmetic Dental Implantologist | Oral & Maxillofacial Prosthodontist</p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">M.D.S. (Osmania University)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">F.I.C.D. (USA) | FICOI | DICOI</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">Founder Member & Director, School of Dental Implants</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">30+ Years of Experience</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6">
                                <button
                                    onClick={openModal}
                                    className="bg-pink-purple-gradient text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all"
                                >
                                    Book Appointment
                                </button>
                                <a
                                    href="https://wa.me/9156060489"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center w-12 h-12"
                                >
                                    <WhatsAppIcon size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Image Collage */}
                        <div className="gap-4 h-[400px]">
                            <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <img src="/images/Prof. Dr. T. Shankar-hero.jpg" alt="Prof. Dr. T. Shankar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="bg-pink-purple-gradient py-24 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-2/5 h-[400px] md:h-[500px]">
                            <img src="/images/About Prof. Dr. T. Shankar.jpg" alt="Prof. Dr. T. Shankar Portrait" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-3/5 p-10 md:p-14 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-medical-pink">
                                About <span className="text-medical-purple italic">Prof. Dr. T. Shankar</span>
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Calm, composed, and credible—Prof. Dr. T. Shankar is a trusted name in South India's dental implantology. With over 30+ years of experience, he specializes in full-mouth rehabilitations, complex implant procedures, and oral prosthetics. His dedication to patient comfort and care makes every treatment journey seamless and informed, earning him the trust of celebrities and everyday patients alike.
                            </p>

                            <div className="pt-4">
                                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-widest mb-4">Educational Background</h3>
                                <div className="space-y-2">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">M.D.S., Osmania University</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">F.I.C.D., Fellow, International College of Dentists (USA)</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">FICOI & DICOI, International Congress of Oral Implantologists</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">Advanced Sinus Lift Procedures Doctorate (Germany)</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">Specialized Implant Training: Switzerland, Germany, and USA</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm font-medium">Advanced Implantology & Grafting Certification: European Association of Dental Implantologists (BDIZ EDI), University of Cologne</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SPECIALIZATIONS AND SERVICES */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-medical-pink">
                            Specializations and <span className="text-medical-purple italic">Services</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Key Roles</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Chief Cosmetic Dental Implantologist at Dr. Gowd's Dental Clinics</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Founder & Director, School of Dental Implants</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">HOD, KIDS (Kalinga Institute of Dental Sciences)</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Specializations</h3>
                            <div className="space-y-4 mb-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Full Mouth Rehabilitation (with and without implants)</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Oral and Maxillofacial Prosthodontics</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Advanced Cosmetic Dentistry</span>
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium text-sm border-t border-gray-100 pt-4 mt-4">His chair-side precision and patient-first approach ensure both functional and aesthetic excellence for every patient.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Expertise</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Dental Implant & Full-Mouth Rehab Expert.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Sinus Lifts & Complex Surgeries Specialist.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Cosmetic & Restorative Dentistry Leader.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Founder & Director, School of Dental Implants at Dr. Gowds Dental Hospitals.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all w-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Contributions</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Regular speaker at national and international conferences</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Advocate for practical, experience-based dental education</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all w-full flex flex-col justify-center">
                            <h3 className="text-2xl font-black text-medical-pink mb-4 leading-tight">Commitment to Patient <span className="text-medical-purple italic">Care</span></h3>
                            <p className="text-gray-600 font-medium">
                                Dr. Shankar emphasizes the importance of oral health as a key part of overall well-being. Through preventive care and early intervention, he helps patients achieve confident, healthy smiles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PATIENT TESTIMONIALS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-medical-pink">
                            Patient <span className="text-medical-purple italic">Testimonials</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative">
                                NP
                                <span className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px]">G</span>
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800">Nichenametla Pranathi</h4>
                            <p className="text-xs text-gray-400 mb-2">1 year ago</p>
                            <div className="flex text-yellow-400 mb-4 justify-center">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm italic font-medium">"The care and professionalism I received at Dr. Gowd's Dental Hospitals exceeded my expectations, and I highly recommend Dr. Vikas Gowd to anyone in need of dental..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative">
                                AS
                                <span className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px]">G</span>
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800">Avanika Samuel</h4>
                            <p className="text-xs text-gray-400 mb-2">1 year ago</p>
                            <div className="flex text-yellow-400 mb-4 justify-center">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm italic font-medium">"I recently had my wisdom tooth extraction done at Dr. Gowds Dental Hospitals in Banjara Hills by Dr. Vikas Gowd, and I am extremely pleased with the entire..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative">
                                VS
                                <span className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px]">G</span>
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800">Vijaya Sri</h4>
                            <p className="text-xs text-gray-400 mb-2">1 year ago</p>
                            <div className="flex text-yellow-400 mb-4 justify-center">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm italic font-medium">"Choosing Invisalign treatment at Gowds Dental Gachibowli has been a game changer for me! The process was smooth, and the results..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER INFO (Inline structure as in screenshot) */}
            <div className="border-t border-gray-200 py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-sm text-gray-500 font-medium max-w-xs">
                                If you are in need of high-quality, professional and friendly dental care, look no further than our clinic.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-4">Contact Info</h4>
                            <div className="space-y-2">
                                <a href="tel:9156060489" className="text-sm text-gray-500 flex items-center gap-2 hover:text-medical-pink transition-colors">📞 9156060489</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-4">Our Branches</h4>
                            <div className="space-y-2 text-sm text-gray-500">
                                <a href="https://maps.app.goo.gl/BAzvLKa55TmVRj3t7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-medical-pink transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-medical-pink"></span> Gachibowli</a>
                                <a href="https://maps.app.goo.gl/8Nw2ZhmcWRfTXh4w9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-medical-pink transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-medical-pink"></span> Madhapur</a>
                                <a href="https://maps.app.goo.gl/cY5hUhcqjAunqJgXA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-medical-pink transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-medical-pink"></span> Puppalaguda</a>
                                <a href="https://maps.app.goo.gl/awBnPCdRHewwbsTZ7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-medical-pink transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-medical-pink"></span> Koti</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DrTShankarPage;
