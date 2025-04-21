import { Head, Link } from '@inertiajs/react';
import GlowEffect from '../Components/GlowEffect';
import Herosection from '@/Components/HeroSection';
import VideoComponent from '@/Components/Videocomponent';


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
            </div>

        </>
    );
}