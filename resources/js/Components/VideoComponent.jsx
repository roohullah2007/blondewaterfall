import React from 'react';

export default function VideoComponent() {
  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Border with glow */}
      <div className="absolute inset-0 rounded-2xl bg-blue-900 blur-sm -m-1 z-0"></div>
      
      {/* Video container */}
      <div className="relative rounded-2xl overflow-hidden border-4 border-blue-900 z-10">
        {/* Video with default controls */}
        <div className="relative aspect-video bg-black">
          <video 
            className="w-full h-full object-cover" 
            controls
            playsInline
            poster="/assets/videos/video.mp4" // fallback image before video loads
          >
            <source src="/assets/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}