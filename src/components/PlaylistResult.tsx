
import React from 'react';
import { Music, ExternalLink, Disc } from 'lucide-react';

interface PlaylistResultProps {
  playlistUrl: string;
  mood: string;
}

const PlaylistResult = ({ playlistUrl, mood }: PlaylistResultProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-vinyl-cream bg-paper-texture p-8 rounded-lg shadow-vintage border border-vinyl-gold/20 animate-fade-up">
      <div className="flex flex-col items-center text-center">
        <div className="w-full relative mb-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Disc className="w-14 h-14 text-vinyl-dark rotate-12" />
          </div>
          <div className="border-b-2 border-dashed border-vinyl-gold/30 pt-4 mb-4"></div>
          <span className="inline-block px-4 py-1 bg-vinyl-amber/20 text-vinyl-mahogany rounded-full text-sm font-inter font-semibold tracking-wide">
            {mood}
          </span>
        </div>
        
        <h2 className="text-2xl font-playfair text-vinyl-mahogany mb-6 font-bold">Your Curated Playlist</h2>
        
        <div className="w-full p-4 bg-vinyl-dark/5 rounded-lg mb-8 relative">
          <div className="flex items-center justify-center">
            <Music className="w-12 h-12 text-vinyl-brown mb-4" />
          </div>
          <p className="text-vinyl-brown/80 font-inter text-sm italic mb-2">
            "Music is the soundtrack of your life"
          </p>
          <p className="text-vinyl-brown/60 font-inter text-xs">
            Handpicked for your perfect ambiance
          </p>
        </div>
        
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-vinyl-mahogany text-vinyl-cream rounded-full
                   transition-all hover:scale-105 font-inter shadow-md hover:shadow-lg"
        >
          <span>Open in Spotify</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PlaylistResult;
