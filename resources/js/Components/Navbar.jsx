// resources/js/components/Navbar.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  return (
    <nav className="py-4">
      <div className="space-x-20 max-w-[650px] rounded-lg py-2 border border-[#fdffff1a] mx-auto px-4 flex justify-center mt-3 items-center">
        {/* Logo */}
        <div className="text-white">
          <Link href="/">
            <img src="/assets/images/logo.avif" alt="blonde waterfall" className="h-8 w-16" />
          </Link>
        </div>
        
        {/* Navigation Links and Button Container */}
        <div className="flex items-center space-x-8">
          <Link href="/blog" className="text-white hover:text-gray-300 transition">Blog</Link>
          <Link href="/affiliate" className="text-white hover:text-gray-300 transition">Affiliate</Link>
          <Link href="/about-us" className="text-white hover:text-gray-300 transition">About Us</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
          
          {/* Get Started Button */}
          <Link 
            href="/get-started" 
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded-xl transition">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}