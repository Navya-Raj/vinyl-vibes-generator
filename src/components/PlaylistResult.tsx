
import React from 'react';
import { Music, ExternalLink } from 'lucide-react';

interface PlaylistResultProps {
  playlistUrl: string;
  mood: string;
}

const PlaylistResult = ({ playlistUrl, mood }: PlaylistResultProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-vinyl-cream p-8 rounded-lg shadow-lg animate-fade-up">
      <div className="flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 bg-vinyl-gold/20 text-vinyl-brown rounded-full text-sm font-inter mb-4">
          {mood}
        </span>
        <h2 className="text-2xl font-playfair text-vinyl-dark mb-6">Your Curated Playlist</h2>
        <Music className="w-16 h-16 text-vinyl-brown mb-6" />
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-vinyl-brown text-vinyl-cream rounded-full
                   transition-transform hover:scale-105 font-inter"
        >
          <span>Open in Spotify</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PlaylistResult;
