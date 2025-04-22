import React, { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  // Start scrolling after a delay when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrolling(true);
    }, 2000); // 2 second delay before scrolling starts

    return () => clearTimeout(timer);
  }, []);

  // Extended testimonial data (15 total - 5 per column)
  const testimonials = [
    // Column 1
    {
      text: "Was skeptical of another realtor content offer, but Blonde Waterfall exceeded my expectations with a great delivery. I'll definitely use them again!",
      name: "Hargo K",
      location: "Realtor in Joshua Tree",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "Blonde Waterfall made it so easy—I simply sent my property photos, and they delivered an amazing video that helped me get 9k views on one video!",
      name: "Terri W",
      location: "Realtor in Austin",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "So many agents in my brokerage have asked where I got my voiceover from :). Love the video they made for me!",
      name: "Sarah Y",
      location: "Realtor in San Francisco",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "The cinematic quality of their videos is better than what I've seen from local videographers charging twice as much.",
      name: "Michael R",
      location: "Realtor in Phoenix",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "My sellers were thrilled with how their home was presented. Definitely my go-to service now.",
      name: "Jessica T",
      location: "Realtor in Seattle",
      image: "/assets/images/testimonials/hargo.avif"
    },
    
    // Column 2
    {
      text: "Their remote service saved me so much time; no need for scheduling video shoots, yet the end product was exceptional.",
      name: "Rachel H",
      location: "Realtor in Tampa",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "Heard about them from my friend, LOVED... Never going back to in person social media shoots!",
      name: "Sarah L",
      location: "Realtor in Dallas",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "Our social media engagement skyrocketed after using their weekly trending edits, so easy for me.",
      name: "Mark T",
      location: "Realtor in New York",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "I've tried many video services but none deliver the quality and speed that Blonde Waterfall does consistently.",
      name: "David J",
      location: "Realtor in Chicago",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "The turnaround time is incredible. Had an urgent listing and they delivered same day!",
      name: "Patricia M",
      location: "Realtor in Boston",
      image: "/assets/images/testimonials/hargo.avif"
    },
    
    // Column 3
    {
      text: "I am blown away by this technology!!!",
      name: "Anonymous",
      location: "Realtor",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "The video virtual staging blew my mind, I've used photo virtual staging, but video virtual staging is on another level.",
      name: "Anonymous",
      location: "Realtor",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "The voiceover included in my video is a perfect match for my brand.",
      name: "Anonymous",
      location: "Realtor",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "My clients were impressed by the professional quality. Worth every penny for the competitive edge.",
      name: "Robert K",
      location: "Realtor in Miami",
      image: "/assets/images/testimonials/hargo.avif"
    },
    {
      text: "The attention to detail in highlighting the best features of my listings is outstanding.",
      name: "Amanda W",
      location: "Realtor in Portland",
      image: "/assets/images/testimonials/hargo.avif"
    }
  ];

  // Divide testimonials into three columns (5 per column)
  const column1 = testimonials.slice(0, 5);
  const column2 = testimonials.slice(5, 10);
  const column3 = testimonials.slice(10, 15);

  // Function to render a testimonial card
  const renderTestimonial = (testimonial, idx) => (
    <div key={idx} className="bg-gray-900 w-[342px] bg-opacity-40 rounded-3xl p-6 relative mb-6">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 mb-6">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          onError={(e) => {e.target.src = "/api/placeholder/50/50"}} 
          className="w-12 h-12 rounded-full mr-4" 
          alt={testimonial.name} 
        />
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-2">Customer Stories</p>
          <h2 className="text-5xl font-bold mb-0 leading-tight">
            See What Our Clients Are
          </h2>
          <p className="text-5xl italic font-serif">Saying</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Column 1 - Initially showing first 3, then scrolling upward */}
          <div className="h-[600px] overflow-hidden relative flex justify-center">
            <div className={`will-change-transform ${isScrolling ? 'animate-marquee-up' : ''}`}>
              {column1.map((testimonial, idx) => renderTestimonial(testimonial, `col1-${idx}`))}
              {isScrolling && column1.map((testimonial, idx) => renderTestimonial(testimonial, `col1-dup-${idx}`))}
            </div>
          </div>

          {/* Column 2 - Initially showing first 3, then scrolling downward */}
          <div className="h-[600px] overflow-hidden relative flex justify-center">
            <div className={`will-change-transform ${isScrolling ? 'animate-marquee-down' : ''}`}>
              {column2.map((testimonial, idx) => renderTestimonial(testimonial, `col2-${idx}`))}
              {isScrolling && column2.map((testimonial, idx) => renderTestimonial(testimonial, `col2-dup-${idx}`))}
            </div>
          </div>

          {/* Column 3 - Initially showing first 3, then scrolling upward */}
          <div className="h-[600px] overflow-hidden relative flex justify-center">
            <div className={`will-change-transform ${isScrolling ? 'animate-marquee-up' : ''}`}>
              {column3.map((testimonial, idx) => renderTestimonial(testimonial, `col3-${idx}`))}
              {isScrolling && column3.map((testimonial, idx) => renderTestimonial(testimonial, `col3-dup-${idx}`))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the marquee animations */}
      <style jsx>{`
  @keyframes marquee-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  
  @keyframes marquee-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }

  .animate-marquee-up {
    animation: marquee-up 60s linear infinite;
  }
  
  .animate-marquee-down {
    animation: marquee-down 60s linear infinite;
  }
  
  .animate-marquee-up:hover,
  .animate-marquee-down:hover {
    animation-play-state: paused;
  }
`}</style>
    </div>
  );
};

export default TestimonialsSection;