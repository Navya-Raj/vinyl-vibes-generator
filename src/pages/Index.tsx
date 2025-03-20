
import React, { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import VinylLoader from '../components/VinylLoader';
import PlaylistResult from '../components/PlaylistResult';
import { useToast } from '../hooks/use-toast';
import { Music, Disc, Headphones } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playlistData, setPlaylistData] = useState<{ url: string; mood: string } | null>(null);
  const { toast } = useToast();

  const handleCapture = async (frontImage: string, backImage: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual API call to analyze images and generate playlist
      // This is a mock response
      await new Promise(resolve => setTimeout(resolve, 3000));
      setPlaylistData({
        url: 'https://open.spotify.com/playlist/example',
        mood: 'Warm & Nostalgic'
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate playlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-vinyl-cream to-vinyl-sepia/30 bg-paper-texture">
      <div className="container px-4 py-12">
        <header className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Disc className="w-8 h-8 text-vinyl-mahogany rotate-12" />
            <h1 className="font-playfair text-4xl md:text-5xl text-vinyl-mahogany font-bold tracking-wide">
              Vinyl Vibes
            </h1>
            <Disc className="w-8 h-8 text-vinyl-mahogany -rotate-12" />
          </div>
          <div className="max-w-xl mx-auto px-6 py-3 bg-vinyl-dark/5 rounded-lg border border-vinyl-gold/10">
            <p className="font-inter text-vinyl-brown text-lg mb-2">
              Capture your moment through both lenses
            </p>
            <p className="font-inter text-vinyl-brown/70 text-sm italic">
              Let us craft the perfect vintage-inspired playlist for your atmosphere
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          {!isLoading && !playlistData && (
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-xs text-center">
                <div className="inline-block px-4 py-1 bg-vinyl-amber/10 text-vinyl-brown rounded-full text-sm font-inter border border-vinyl-gold/10 mb-3">
                  <Headphones className="w-4 h-4 inline mr-2" />
                  <span>Vintage Sound Experience</span>
                </div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-vintage border border-vinyl-gold/10">
                <CameraCapture onCapture={handleCapture} />
              </div>
            </div>
          )}

          {isLoading && (
            <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-vintage border border-vinyl-gold/10">
              <VinylLoader />
            </div>
          )}

          {playlistData && (
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Music className="w-10 h-10 text-vinyl-mahogany" />
              </div>
              <PlaylistResult
                playlistUrl={playlistData.url}
                mood={playlistData.mood}
              />
            </div>
          )}
        </main>
        
        <footer className="mt-20 text-center">
          <p className="font-inter text-vinyl-brown/60 text-xs">
            Vinyl Vibes Generator &copy; {new Date().getFullYear()} | Where vintage meets modern
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
