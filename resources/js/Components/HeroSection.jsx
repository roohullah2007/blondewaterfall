import React from 'react'

export default function Herosection() {
  return (
    <>
                {/* Hero Section */}
                <div className="text-white py-16 relative overflow-hidden">
                {/* Rating and testimonial section */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center mb-2">
                        {/* Headshots/profile images */}
                        <div className="flex -space-x-4">
                            <img src="/assets/images/profile1.avif" alt="Agent" className="w-10 h-10 rounded-full border-2 border-black" />
                            <img src="/assets/images/profile2.avif" alt="Agent" className="w-10 h-10 rounded-full border-2 border-black" />
                            <img src="/assets/images/profile3.avif" alt="Agent" className="w-10 h-10 rounded-full border-2 border-black" />
                            <img src="/assets/images/profile4.avif" alt="Agent" className="w-10 h-10 rounded-full border-2 border-black" />
                            <img src="/assets/images/profile5.avif" alt="Agent" className="w-10 h-10 rounded-full border-2 border-black" />
                        </div>
                        {/* Star rating */}
                        <div className="flex flex-col ml-4">
                            <div className='flex'>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300">Loved by 5500+ agents worldwide</p>

                        </div>
                    </div>
                </div>

                {/* Main heading section */}
                <div className="text-center max-w-5xl mx-auto px-4">
                    <h1 className="text-4xl md:text-[55px] font-medium mb-3 leading-tight"
                        style={{
                            backgroundImage: 'linear-gradient(0deg, rgb(106, 110, 106) 0%, rgb(245, 247, 245) 33%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            paddingBottom: '0.1em' // Add padding to ensure descenders are visible
                        }}>
                        We Turn Your Listing Photos Into
                        <div className="text-5xl font-bold md:text-[96px] mt-[-16px]"
                            style={{
                                backgroundImage: 'linear-gradient(0deg, rgb(106, 110, 106) 0%, rgb(245, 247, 245) 33%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                paddingBottom: '0.1em' // Add padding here too
                            }}>
                            High-Impact Videos
                        </div>
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">Close More Deals and Elevate Your Brand—No Filming Required.</p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition duration-300 text-lg">
                            Get Started In 30 Seconds
                        </a>
                    </div>
                </div>

            </div>
    </>    
)
}
