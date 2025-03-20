
import React from 'react';
import { Music } from 'lucide-react';

const VinylLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 animate-fade-up">
      <div className="relative w-64 h-64">
        {/* Record sleeve */}
        <div className="absolute inset-2 -bottom-4 -right-4 bg-vinyl-sepia rounded-md shadow-vintage rotate-3"></div>
        
        {/* Vinyl record */}
        <div className="absolute inset-0 bg-vinyl-dark rounded-full shadow-record animate-vinyl-spin animate-record-wobble">
          {/* Label */}
          <div className="absolute inset-[20%] bg-gradient-to-br from-vinyl-cream to-vinyl-sepia rounded-full 
                          flex items-center justify-center border-4 border-vinyl-cream/20">
            <Music className="text-vinyl-brown w-10 h-10 opacity-70" />
          </div>
          
          {/* Inner grooves */}
          <div className="absolute inset-[15%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[25%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[35%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[45%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[55%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[65%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[75%] border border-vinyl-gold/10 rounded-full"></div>
          <div className="absolute inset-[85%] border border-vinyl-gold/10 rounded-full"></div>
          
          {/* Record shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
        </div>
        
        {/* Record arm */}
        <div className="absolute w-12 h-2 bg-vinyl-gold/80 right-0 top-1/2 origin-right transform -translate-y-1/2 -translate-x-8 animate-needle-drop">
          <div className="absolute w-3 h-3 rounded-full bg-vinyl-gold right-0 top-0 transform -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="mt-12 font-playfair text-center">
        <p className="text-vinyl-mahogany text-xl mb-1 animate-pulse">
          Creating your vintage vibes...
        </p>
        <p className="text-vinyl-brown/60 text-sm italic">
          Spinning records since the golden age
        </p>
      </div>
    </div>
  );
};

export default VinylLoader;
