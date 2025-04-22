import React from 'react';

const PhotosIntoVideo = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold mb-6 text-white">
            Photos Into Video
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Agents using our video service don't just sell faster — they win listings. What's your
            listing missing? Probably this.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative mt-12">
          {/* Before Video */}
          <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
            <video 
              src="/assets/videos/before.mp4"
              poster="/assets/videos/before.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />

          </div>

          {/* Arrow */}
          <div className="absolute z-10 hidden md:block">
            <img src="/assets/images/arrow.avif" className='w-[125px] h-10' alt="" />
          </div>

          {/* After Video */}
          <div className="w-full md:w-[582px] h-[297px] relative rounded-3xl overflow-hidden shadow-lg">
            <video 
              src="/assets/videos/after.mp4"
              poster="/assets/videos/after.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosIntoVideo;
