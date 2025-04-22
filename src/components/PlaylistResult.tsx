
import React from 'react';
import { Music, ExternalLink, Disc, Headphones } from 'lucide-react';

interface PlaylistResultProps {
  playlistUrl: string;
  mood: string;
}

const PlaylistResult = ({ playlistUrl, mood }: PlaylistResultProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white/80 bg-paper-texture p-8 rounded-lg shadow-vintage border border-purple-300/30 animate-fade-up">
      <div className="flex flex-col items-center text-center">
        <div className="w-full relative mb-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Disc className="w-14 h-14 text-indigo-900 rotate-12" />
          </div>
          <div className="border-b-2 border-dashed border-purple-400/30 pt-4 mb-4"></div>
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-indigo-900 rounded-full text-sm font-inter font-semibold tracking-wide shadow-sm">
            {mood}
          </span>
        </div>
        
        <h2 className="text-2xl font-playfair text-indigo-900 mb-6 font-bold">Your Sonic Time Capsule</h2>
        
        <div className="w-full p-6 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-lg mb-8 relative border border-purple-200/40">
          <div className="flex items-center justify-center">
            <Music className="w-12 h-12 text-indigo-700 mb-4" />
          </div>
          <p className="text-indigo-800/80 font-inter text-sm italic mb-2">
            "We've crafted a groovy mixtape for your soul"
          </p>
          <p className="text-purple-700/70 font-inter text-xs">
            Timeless tunes to match your unique vibe
          </p>
        </div>
        
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full
                   transition-all hover:scale-105 font-inter shadow-lg hover:shadow-purple-500/30 relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <Headphones className="w-4 h-4" />
          <span>Open in Spotify</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PlaylistResult;
