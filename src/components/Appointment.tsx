const Appointment = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100">
                    {/* Map Placeholder */}
                    <div className="md:w-1/2 h-[400px] md:h-auto bg-gray-200 flex flex-col items-center justify-center p-8 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Hyderabad&zoom=13&size=600x600&sensor=false')] bg-cover">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm">
                            <div className="w-full h-40 bg-gray-300 rounded-xl mb-4 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400" alt="Clinic facade" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-lg text-medical-purple">Dr. Gowd's Dental Hospital - Gachibowli, Hyderabad</h3>
                            <p className="text-sm text-gray-500 mt-2">⭐ 4.9 (1200+ Reviews)</p>
                            <button className="mt-4 text-medical-pink font-bold border-b-2 border-medical-pink">Get Directions</button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:w-1/2 bg-medical-dark-purple p-12 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">Book an Appointment</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 uppercase opacity-70">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:bg-white/20 outline-none transition-all text-white placeholder:text-white/40"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 uppercase opacity-70">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:bg-white/20 outline-none transition-all text-white placeholder:text-white/40"
                                />
                            </div>
                            <button className="w-full bg-pink-purple-gradient text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-opacity">
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
