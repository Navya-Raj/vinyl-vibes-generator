
import React, { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import VinylLoader from '../components/VinylLoader';
import PlaylistResult from '../components/PlaylistResult';
import { useToast } from '../hooks/use-toast';

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
    <div className="min-h-screen bg-gradient-to-b from-vinyl-cream to-vinyl-brown/10">
      <div className="container px-4 py-12">
        <header className="text-center mb-16 animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-5xl text-vinyl-dark mb-4">
            Vinyl Vibes Generator
          </h1>
          <p className="font-inter text-vinyl-brown/80 max-w-xl mx-auto">
            Capture your moment through both lenses, and let us craft the perfect vintage-inspired playlist for your atmosphere.
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          {!isLoading && !playlistData && (
            <CameraCapture onCapture={handleCapture} />
          )}

          {isLoading && (
            <VinylLoader />
          )}

          {playlistData && (
            <PlaylistResult
              playlistUrl={playlistData.url}
              mood={playlistData.mood}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
