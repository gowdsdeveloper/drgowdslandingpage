import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const doctors = [
    {
        id: "dr-ms-gowd",
        name: "Dr. M.S. Gowd",
        title: "M.D.S. (Oral & Maxillofacial Prosthodontist) | FAACD",
        desc: "With over 55 years of distinguished clinical experience, Dr. M.S. Gowd, FAACD, is a trailblazer in the field of orthodontics. As the founder and chairman of Dr. Gowd's Dental Hospital, he has dedicated his career to delivering exceptional dental care and advancing the standards of oral health in the region.",
        img: "/images/Dr.M.S.Gowd.jpg"
    },
    {
        id: "dr-snigdha-gowd",
        name: "Dr. Snigdha Gowd",
        title: "M.D.S. (Orthodontics & Dentofacial Orthopaedics) | 24+ years of experience",
        desc: "Dr. Snigdha Gowd specializes in aesthetic and digital orthodontics, combining cutting-edge technology with a personalized approach to smile design. As a certified Platinum Provider of Invisalign, she brings unmatched expertise and a heartfelt passion for transforming lives through beautifully aligned smiles.",
        img: "/images/About Dr. Snigdha Gowd.jpg"
    },
    {
        id: "dr-t-shankar",
        name: "Dr. T. Shankar",
        title: "M.D.S. (Oral & Maxillofacial Prosthodontist) | 26 years of experience",
        desc: "Dr. T. Shankar is a highly skilled oral and maxillofacial surgeon with deep expertise in complex oral surgeries and dental implant procedures. His unwavering commitment to surgical precision and patient well-being ensures a safe, comfortable, and confident experience for every patient in his care.",
        img: "/images/dr-t-shankar.jpg"
    }
];

const DoctorCards = () => {
    const { openModal } = useBooking();
    return (
        <section id="our-doctors" className="py-24 bg-[#fffdf5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Specialists</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        Our <span className="text-medical-pink">Expert Doctors</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {doctors.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-48 h-48 rounded-3xl overflow-hidden mb-8 border-4 border-medical-pink/10 group-hover:border-medical-pink transition-all">
                                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover:scale-100" />
                            </div>
                            <h3 className="text-2xl font-black text-medical-purple mb-1 italic">{doc.name}</h3>
                            <div className="flex flex-col gap-2 mb-4 items-center text-center">
                                {doc.title.split('|').map((t, i) => (
                                    <p key={i} className="text-medical-pink font-bold text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-2">
                                        <span>{t.trim()}</span>
                                    </p>
                                ))}
                            </div>
                            <p className="text-gray-500 mb-10 flex-grow font-medium leading-relaxed">"{doc.desc}"</p>

                            <div className="flex flex-col w-full gap-4">
                                <Link
                                    to={`/doctors/${doc.id}`}
                                    className="bg-medical-dark-purple text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg hover:shadow-purple-200 transition-all"
                                >
                                    View Profile
                                </Link>
                                <button
                                    onClick={openModal}
                                    className="border-2 border-gray-100 text-gray-400 py-4 rounded-2xl font-black uppercase tracking-widest hover:border-medical-pink hover:text-medical-pink transition-all"
                                >
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorCards;
