// HowItWorks.jsx
import React from 'react';
import '../../css/app.css'; // Import for the marquee animation styles


const HowItWorks = () => {
  return (
    <div className="bg-black text-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Brands Section */}
        <div className="mb-16 text-center">
        <p className="text-gray-400 mb-6">Used by leading brands like:</p>
        <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div className="flex animate-marquee gap-8 items-center">
            <img src="/assets/images/logos/logo-1.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-2.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-3.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-4.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-5.avif" alt="Keller Williams" className="h-8 opacity-60" />
            {/* Duplicate for continuous scrolling */}
            <img src="/assets/images/logos/logo-1.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-2.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-3.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-4.avif" alt="Keller Williams" className="h-8 opacity-60" />
            <img src="/assets/images/logos/logo-5.avif" alt="Keller Williams" className="h-8 opacity-60" />
            </div>
        </div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-10 relative">
            How It Works
            <div className="absolute left-1/4 -translate-x-14 top-1/2 transform -translate-y-1/2">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,30 C30,10 50,0 80,30" stroke="white" strokeWidth="2" fill="none" />
                <polygon points="5,35 0,30 5,25" fill="white" stroke="white" />
              </svg>
            </div>
            <div className="absolute right-1/4 translate-x-14 top-1/2 transform -translate-y-1/2">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,30 C30,50 50,60 80,30" stroke="white" strokeWidth="2" fill="none" />
                <polygon points="75,35 80,30 75,25" fill="white" stroke="white" />
              </svg>
            </div>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="flex  justify-center gap-4">
         {/* Step 1 */}
            <div 
            className="w-[350px] rounded-lg p-8 flex flex-col items-center text-center" 
            style={{ background: "radial-gradient(50% 50% at 14.099999999999998% 4.2%, #1a1a1a, #0f0f0fa8)" }}
            >
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-6">Upload Your Listing Photos</h3>
            <div className="mb-6">
                <img src="/assets/images/how-it-works-1.avif" alt="Property photos collage" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <p className="text-gray-300">
                Simply send us your listing link or property photos—then relax, we'll handle the rest.
            </p>
            </div>

          {/* Step 2 */}
          <div className="w-[350px] rounded-lg p-8 flex flex-col items-center text-center" style={{ background: "radial-gradient(50% 50% at 14.099999999999998% 4.2%, #1a1a1a, #0f0f0fa8)" }}>
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mb-6">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-6">One-Day Creation</h3>
            <div className="mb-6">
            <video 
                className="w-full h-48 object-cover rounded-lg" 
                poster="/assets/images/how-it-works-2.avif"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/videos/how-it-works-2.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-300">
              In just one day, we use your photos to virtually rebuild your listing, which we then use to "film in".
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-[350px] rounded-lg p-8 flex flex-col items-center text-center" style={{ background: "radial-gradient(50% 50% at 14.099999999999998% 4.2%, #1a1a1a, #0f0f0fa8)" }}>
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mb-6">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Grow Your Reach</h3>
            <div>
              <img src="/assets/images/how-it-works-3.avif" alt="Video preview" className="w-full h-[235px] object-cover rounded-lg" />
            </div>
            <p className="text-gray-300">
              We deliver your ready-to-share videos to post them easily on social media, your website, or listing platforms to attract buyers and boost visibility.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;