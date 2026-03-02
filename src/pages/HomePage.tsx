import Hero from '../components/Hero';
import ComparisonTable from '../components/ComparisonTable';
import DoctorCards from '../components/DoctorCards';
import ServiceHighlight from '../components/ServiceHighlight';
import FullServices from '../components/FullServices';
import CelebritiesScroll from '../components/CelebritiesScroll';
import Branches from '../components/Branches';
import Testimonials from '../components/Testimonials';
import Timeline from '../components/Timeline';
import MediaNews from '../components/MediaNews';
import QuickForm from '../components/QuickForm';
import FAQ from '../components/FAQ';
import { dentalFAQs } from '../data/faqs';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ComparisonTable />
            <DoctorCards />
            <ServiceHighlight />
            <FullServices />
            <CelebritiesScroll />
            <Branches />
            <Testimonials />
            <Timeline />
            <MediaNews />
            <QuickForm />
            <FAQ faqs={dentalFAQs} />
        </>
    );
};

export default HomePage;
