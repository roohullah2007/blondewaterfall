import { Head, Link } from '@inertiajs/react';
import GlowEffect from '../Components/GlowEffect';
import Herosection from '@/Components/HeroSection';
import VideoComponent from '@/Components/Videocomponent';
import HowItWorks from '@/Components/HowItWorks';
import PhotosIntoVideo from '@/Components/PhotosIntoVideo';
import StatisticsSection from '@/Components/StatisticsSection';
import PortfolioSection from '@/Components/PortfolioSection ';
import PricingSection from '@/Components/PricingSection';
import TestimonialsSection from '@/Components/Testimonials';



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className='py-10'>
                <Herosection />
                <GlowEffect />
                <VideoComponent />
                <HowItWorks />
                <PhotosIntoVideo />
                <StatisticsSection />
                <PortfolioSection />
                <PricingSection />
                <TestimonialsSection />
            </div>

        </>
    );
}