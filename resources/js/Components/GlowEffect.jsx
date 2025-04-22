import React from 'react';

export default function GlowEffect() {
  return (
    <div 
      className="absolute left-[37vw] mx-auto  w-[400px] h-[400px]"
    >
      {/* Main blue glow */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-full blur-[60px]"
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, #0088FF 0%, #0044CC 50%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Subtle inner glow */}
      <div 
        className="absolute left-1/2 top-1/2 w-3/4 h-3/4 overflow-hidden rounded-full blur-[40px]"
        style={{
          willChange: 'transform',
          opacity: 0.8,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, #00AAFF 0%, #0055DD 60%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
}