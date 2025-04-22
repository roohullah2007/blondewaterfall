import React from 'react';

const PortfolioSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold mb-2">
            See our <span className="italic">Portfolio</span>.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Turn listings into <span className="text-red-500 font-bold">SOLD</span> signs. Our videos make buyers fall in love before they step 
            foot inside — Making you look like a top-tier agent.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 relative mt-12">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative">
            {/* Homes */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-homes.mp4"
                poster="/assets/videos/homes.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Airbnb/Vrbo */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-airbnb.mp4"
                poster="/assets/videos/airbnb.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* middle Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative"> 
            {/* Social Media */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-socialmedia.mp4"
                poster="/assets/videos/social.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Apartments */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-apartments.mp4"
                poster="/assets/videos/apartments.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div> 
                   {/* Botoom Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative"> 
            {/* Social Media */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-hotel.mp4"
                poster="/assets/videos/social.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Apartments */}
            <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/portfolio-land.mp4"
                poster="/assets/videos/apartments.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;