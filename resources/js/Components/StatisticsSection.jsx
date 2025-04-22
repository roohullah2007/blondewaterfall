import React from 'react';

const StatisticsSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative mt-12">
          {/* Stat 1 - 406% */}
          <div className="rounded-lg bg-gradient-to-b from-zinc-900 to-black p-6 text-center border border-zinc-800 flex flex-col items-center">
            <div className="bg-gradient-to-b from-zinc-800 to-black p-3 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="2" />
                <circle cx="7" cy="12" r="1.5" fill="white" />
                <circle cx="12" cy="12" r="1.5" fill="white" />
                <circle cx="17" cy="12" r="1.5" fill="white" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold mb-2">406%</h3>
            <p className="text-sm text-gray-400">
              More Listing Inquiries<br />
              When Using Social Media*
            </p>
          </div>

          {/* Stat 2 - 76% */}
          <div className="rounded-lg bg-gradient-to-b from-zinc-900 to-black p-6 text-center border border-zinc-800 flex flex-col items-center">
            <div className="bg-gradient-to-b from-zinc-800 to-black p-3 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
                <path d="M2 2L22 2" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold mb-2">76%</h3>
            <p className="text-sm text-gray-400">
              Buyers Say Videos Were<br />
              Key to Making an Offer*
            </p>
          </div>

          {/* Stat 3 - 74% */}
          <div className="rounded-lg bg-gradient-to-b from-zinc-900 to-black p-6 text-center border border-zinc-800 flex flex-col items-center">
            <div className="bg-gradient-to-b from-zinc-800 to-black p-3 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="2" />
                <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold mb-2">74%</h3>
            <p className="text-sm text-gray-400">
              Buyers More Likely To Use<br />
              an Agent Utilizing Video*
            </p>
          </div>

          {/* Stat 4 - 67% */}
          <div className="rounded-lg bg-gradient-to-b from-zinc-900 to-black p-6 text-center border border-zinc-800 flex flex-col items-center">
            <div className="bg-gradient-to-b from-zinc-800 to-black p-3 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 3V4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M19 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold mb-2">67%</h3>
            <p className="text-sm text-gray-400">
              Faster Sales on Listings<br />
              with Videos*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;