import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Common Queries</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        Frequently Asked <span className="text-medical-pink">Questions</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            onClick={() => toggleFaq(faq.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-gray-700 pr-8">{faq.question}</span>
                                {openId === faq.id ? (
                                    <ChevronDown className="text-medical-pink flex-shrink-0" />
                                ) : (
                                    <ChevronRight className="text-medical-pink flex-shrink-0" />
                                )}
                            </div>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
