
import React from 'react';
import { Music, Disc } from 'lucide-react';

const VinylLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 animate-fade-up">
      <div className="relative w-64 h-64">
        {/* Record sleeve */}
        <div className="absolute inset-2 -bottom-4 -right-4 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-md shadow-vintage rotate-3"></div>
        
        {/* Vinyl record */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-full shadow-record animate-vinyl-spin animate-record-wobble">
          {/* Label */}
          <div className="absolute inset-[20%] bg-gradient-to-br from-white to-purple-100 rounded-full 
                          flex items-center justify-center border-4 border-white/20">
            <Disc className="text-indigo-700 w-10 h-10 opacity-80" />
          </div>
          
          {/* Inner grooves */}
          <div className="absolute inset-[15%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[25%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[35%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[45%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[55%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[65%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[75%] border border-purple-400/10 rounded-full"></div>
          <div className="absolute inset-[85%] border border-purple-400/10 rounded-full"></div>
          
          {/* Record shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Record arm */}
        <div className="absolute w-12 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 right-0 top-1/2 origin-right transform -translate-y-1/2 -translate-x-8 animate-needle-drop">
          <div className="absolute w-3 h-3 rounded-full bg-indigo-400 right-0 top-0 transform -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-indigo-900 text-xl mb-1 animate-pulse font-playfair">
          Dropping the needle on your perfect tracks...
        </p>
        <p className="text-purple-700/60 text-sm italic font-inter">
          Good vibes coming your way in vintage style
        </p>
      </div>
    </div>
  );
};

export default VinylLoader;
