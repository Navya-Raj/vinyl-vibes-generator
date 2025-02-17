
import React from 'react';

const VinylLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-48 h-48">
        {/* Vinyl record */}
        <div className="absolute inset-0 bg-vinyl-dark rounded-full animate-vinyl-spin">
          {/* Inner grooves */}
          <div className="absolute inset-4 border-2 border-vinyl-gold/20 rounded-full" />
          <div className="absolute inset-8 border-2 border-vinyl-gold/20 rounded-full" />
          <div className="absolute inset-12 border-2 border-vinyl-gold/20 rounded-full" />
          {/* Center hole */}
          <div className="absolute inset-[40%] bg-vinyl-gold rounded-full" />
        </div>
      </div>
      <p className="mt-6 font-playfair text-vinyl-brown text-lg animate-pulse">
        Creating your vintage vibes...
      </p>
    </div>
  );
};

export default VinylLoader;
