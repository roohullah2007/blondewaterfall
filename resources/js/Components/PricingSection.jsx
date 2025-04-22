import React, { useState } from 'react';

const PricingSection = () => {
  const [isProperty, setIsProperty] = useState(true);

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h5 className="text-gray-300 mb-2">Pricing</h5>
          <h2 className="text-5xl font-bold">
            Pricing that <span className="italic">makes</span> you money.
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className={`${isProperty ? 'text-white' : 'text-gray-500'}`}>Property</span>
          <button 
            className="w-12 h-6 bg-gray-700 rounded-full relative"
            onClick={() => setIsProperty(!isProperty)}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${isProperty ? 'left-0.5' : 'left-6.5'}`}></div>
          </button>
          <span className={`${!isProperty ? 'text-white' : 'text-gray-500'}`}>Land/Lots</span>
        </div>

        <div className="text-center mb-8">
          <span className="text-gray-400">Pay-Per-Video</span>
        </div>

        {/* Pricing Cards */}
        <div className="flex items-center justify-center gap-6">
            {/* standard card  */}
    <div className="rounded-3xl flex flex-col border-2 border-[#FFFFFF24] px-8 py-10 justify-center overflow-hidden w-[342px]" style={{ background: "radial-gradient(67% 50% at 50% -17.2%, rgb(61, 61, 61) 0%, rgb(15, 15, 15) 100%)" }}>
      <div className="mb-2">
        <h3 className="text-lg text-white font-semibold">Standard Package</h3>
        <p className="text-red-500 text-[17px]">$124</p>
        <div className="text-[48px] text-white font-bold mt-1 mb-2">$99</div>
      </div>

      <div className="text-center mb-2">
        <p className="text-gray-300 text-sm">What's Included:</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="rounded-lg flex flex-col overflow-hidden ">
          <img 
            src="/assets/images/pricing/wide-listing.avif" 
            alt="Wide Listing Video" 
            className="w-[132px] h-[72px] object-cover"
          />
        <div className='text-center mt-2'>
            
        <p className="text-white text-xs">Wide Listing Video</p>
            <p className="text-white text-xs">(1-2 Min)</p>
        </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/images/pricing/Remote-video.avif" 
            alt="Wide Listing Video" 
            className="w-[122px] h-[67px] object-cover"
          />
          </div>
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/images/pricing/edit.avif" 
            alt="Wide Listing Video" 
            className="w-[122px] h-[67px] object-cover"
          />
          </div>
       </div>
      </div>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl mb-6">
        Buy Now
      </button>

      <div>
        <p className="text-white mb-3 font-medium">Including:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Video Creation Edit & Titles</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Cinematic Music</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Full HD</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Next Day Turnaround</span>
          </div>
        </div>
      </div>
    </div>
    {/* social media card  */}
    <div className="rounded-3xl flex flex-col border-2 border-[#FFFFFF24] px-8 py-10 justify-center overflow-hidden w-[342px]" style={{ background: "radial-gradient(81% 70% at 50% -19.3%, rgb(54, 65, 84) 0%, rgba(0, 10, 28, 0.57) 100%)" }}>
      <div className="mb-2">
        <h3 className="text-lg text-white font-semibold">Social Media Package</h3>
        <p className="text-red-500 text-[17px]">$249</p>
        <div className="text-[48px] text-white font-bold mt-1 mb-2">$149</div>
      </div>

      <div className="text-center mb-2">
        <p className="text-gray-300 text-sm">What's Included:</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="rounded-lg flex flex-col overflow-hidden ">
          <img 
            src="/assets/images/pricing/wide-listing.avif" 
            alt="Wide Listing Video" 
            className="w-[132px] h-[72px] object-cover"
          />
        <div className='text-center mt-2'>
            
        <p className="text-white text-xs">Wide Listing Video</p>
            <p className="text-white text-xs">(1-2 Min)</p>
        </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/images/pricing/Remote-video.avif" 
            alt="Wide Listing Video" 
            className="w-[122px] h-[67px] object-cover"
          />
          </div>
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/images/pricing/edit.avif" 
            alt="Wide Listing Video" 
            className="w-[122px] h-[67px] object-cover"
          />
          </div>
       </div>
      </div>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl mb-6">
        Buy Now
      </button>

      <div>
        <p className="text-white mb-3 font-medium">Standard Plus:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Video Creation Edit & Titles</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Cinematic Music</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Full HD</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Next Day Turnaround</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* High end package  */}
    <div className="relative rounded-3xl flex flex-col border-2 border-[#FFFFFF24] px-8 py-10 justify-center overflow-hidden w-[342px] backdrop-blur-[24px]" >
   {/* Blurred Background Image + Gradient Layer */}
   <div className="absolute inset-0 -z-10">
    <img 
      src="/assets/images/pricing/bg-img.avif" 
      alt="" 
      className="w-full h-full object-cover"
      style={{
        filter: 'blur(24px)',
        opacity: 0.7,
        transform: 'scale(1.1)',
      }}
    />
    <div 
      className="absolute inset-0" 
      style={{
        background: "radial-gradient(81% 70% at 50% -19.3%, rgb(54, 65, 84) 0%, rgba(0, 10, 28, 0.57) 100%)",
        zIndex: 1,
        mixBlendMode: "overlay", // optional: try "multiply" or "soft-light" for different effects
      }}
    ></div>
  </div>

  {/* Content Starts */}
  <div className="mb-2">
    <h3 className="text-lg text-white font-semibold">Social Media Package</h3>
    <p className="text-red-500 text-[17px]">$249</p>
    <div className="text-[48px] text-white font-bold mt-1 mb-2">$149</div>
  </div>

  <div className="text-center mb-2">
    <p className="text-gray-300 text-sm">What's Included:</p>
  </div>

  <div className="flex items-center justify-between mb-6">
    <div className="rounded-lg flex flex-col overflow-hidden">
      <img 
        src="/assets/images/pricing/wide-listing.avif" 
        alt="Wide Listing Video" 
        className="w-[132px] h-[72px] object-cover"
      />
      <div className='text-center mt-2'>
        <p className="text-white text-xs">Wide Listing Video</p>
        <p className="text-white text-xs">(1-2 Min)</p>
      </div>
    </div>
    
    <div className="flex flex-col gap-2">
      <div className="rounded-lg overflow-hidden flex items-center justify-center">
        <img 
          src="/assets/images/pricing/Remote-video.avif" 
          alt="Remote Video" 
          className="w-[122px] h-[67px] object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden flex items-center justify-center">
        <img 
          src="/assets/images/pricing/edit.avif" 
          alt="Editing" 
          className="w-[122px] h-[67px] object-cover"
        />
      </div>
    </div>
  </div>

  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl mb-6">
    Buy Now
  </button>

  <div>
        <p className="text-white mb-3 font-medium">Standard Plus:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Video Creation Edit & Titles</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Cinematic Music</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Full HD</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-white">Next Day Turnaround</span>
          </div>
        </div>
      </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default PricingSection;
