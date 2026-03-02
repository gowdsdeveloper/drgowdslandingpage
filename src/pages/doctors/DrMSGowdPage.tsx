import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { useBooking } from '../../context/BookingContext';
import { useEffect } from 'react';

const DrMSGowdPage = () => {
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
                                Prof. Dr. M.S. Gowd
                            </h1>
                            <p className="text-xl font-bold text-medical-purple italic italic">Prosthodontic Specialist | Founder, Dr. Gowd's Dental Clinics</p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">Fellow, American Academy of Cosmetic Dentistry</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">First to introduce cosmetic and implant dentistry in Andhra Pradesh</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">55+ Years of Experience</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-bold text-sm">President of the Indian Prosthodontic Society (First from Andhra Pradesh)</span>
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
                        <div className=" h-[400px]">
                            <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <img src="/images/Prof. Dr. M.S. Gowd-hero.jpg" alt="Prof. Dr. M.S. Gowd" className="w-full h-full object-cover" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="bg-pink-purple-gradient py-24 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-2/5 h-[400px]">
                            <img src="/images/Dr.M.S.Gowd.jpg" alt="Prof. Dr. M.S. Gowd Portrait" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-3/5 p-10 md:p-14 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-medical-pink">
                                About <span className="text-medical-purple italic">Dr. M.S. Gowd</span>
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Prof. Dr. M.S. Gowd is a trailblazer in South Indian dentistry, known for his compassion, passion, and credibility. With over 55+ years of experience, he specializes in restoring structural defects in teeth, palates, and jaws. As the founder of Dr. Gowd's Dental Clinics, he has set new benchmarks for dental care, transforming dentistry into a patient-focused experience.
                            </p>

                            <div className="pt-4">
                                <h3 className="font-bold text-medical-purple text-sm uppercase tracking-widest mb-4">Member of</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm font-medium">American Dental Association</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm font-medium">International Association for Dental Research (USA)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle2 className="text-medical-pink w-4 h-4 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm font-medium">American Academy of Cosmetic Dentistry</span>
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

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Advanced <span className="text-medical-purple italic">Dental <br />Procedures</span></h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Cosmetic Dentistry</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Implantology</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Accelerated Orthodontics</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Invisalign and Painless Dentistry</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Credentials</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">BDS, Osmania University (1967)</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">MDS, Bombay University (1971)</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Pioneer</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Cosmetic and Implant Dentistry in Andhra Pradesh & Telangana</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Notable Roles</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">President, Indian Prosthodontic Society</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Official Dentist to the Governor (Consultant for 17 Years)</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Social Impact</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Initiated community outreach programs to improve oral health in underserved areas.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Authored educational resources for diverse communities.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {/* Card 6 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full w-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Achievements and <span className="text-medical-purple italic">Contributions</span></h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">First to introduce cosmetic and implant dentistry in Andhra Pradesh.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Authored books like Smile, Designing Smile to Smile, and Muskaan, accessible in multiple languages.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Mentor to his children, Prof. Dr. Snigdha Gowd and Prof. Dr. Vikas Gowd, continuing his legacy.</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Adopted villages to provide dental care and raise awareness about oral health.</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full w-full">
                            <h3 className="text-2xl font-black text-medical-pink mb-6 leading-tight">Recognition and <span className="text-medical-purple italic">Awards</span></h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Recipient of the Vydyasiromani Award during the 2012 Doctors' Day Celebration (only Indian to receive this honor).</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="text-medical-pink w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">Numerous accolades for contributions to dental innovation and community health.</span>
                                </div>
                            </div>
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
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative">
                                AS
                                <span className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px]">G</span>
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800">Avanika Samuel</h4>
                            <p className="text-xs text-gray-400 mb-2">1 year ago</p>
                            <div className="flex text-yellow-400 mb-4 justify-center">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm italic font-medium">"I recently had my wisdom tooth extraction done at Dr. Gowds Dental Hospital in Banjara Hills by Dr. Vikas Gowd, and I am extremely pleased with the entire..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                        {/* Testimonial 2 */}
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
                            <p className="text-gray-600 text-sm italic font-medium">"Choosing Invisalign treatment at Dr Gowds Dental Gachibowli has been a game changer for me! The process was smooth, and the results..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative">
                                RY
                                <span className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px]">G</span>
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800">Rukamma Yadav</h4>
                            <p className="text-xs text-gray-400 mb-2">1 year ago</p>
                            <div className="flex text-yellow-400 mb-4 justify-center">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 text-sm italic font-medium">"I had a fantastic experience at Dr. Gowds dental Gachibowli! The staff was incredibly friendly and professional, making me feel comfortable right from..."</p>
                            <button className="text-gray-400 text-xs mt-2 font-bold hover:text-medical-pink transition-colors">Read more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION WITH MAP */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="bg-black text-white rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[300px]">
                        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map Location" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl font-black text-medical-pink leading-tight">
                            Ready to experience world-class <span className="text-medical-purple italic">dental care?</span>
                        </h3>
                        <p className="text-gray-300 font-medium">Schedule your consultation with Prof. Dr. M.S. Gowd today!</p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-white">
                                <a
                                    href="https://wa.me/9156060489"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <WhatsAppIcon size={16} />
                                </a>
                                <span className="font-bold hidden sm:inline">9156060489</span>
                            </div>
                            <div className="flex items-start space-x-3 text-white">
                                <div className="bg-white/10 p-2 rounded-full"><CheckCircle2 size={16} /></div>
                                <span className="font-bold text-sm">Fortune Square, T9/T8, 3rd Floor, Plot No. 1 & 2,1 Survey no. 59 Hyderabad, 500032</span>
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className="bg-pink-purple-gradient px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all mt-4"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>

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

export default DrMSGowdPage;
