
import React, { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import VinylLoader from '../components/VinylLoader';
import PlaylistResult from '../components/PlaylistResult';
import PreferencesForm from '../components/PreferencesForm';
import { useToast } from '../hooks/use-toast';
import { Music, Disc, Headphones } from 'lucide-react';

type AppState = 'capture' | 'preferences' | 'loading' | 'result';

interface UserPreferences {
  language: string;
  mood: string;
  lifePhase: string;
  genre: string;
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>('capture');
  const [images, setImages] = useState<{front: string; back: string} | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [playlistData, setPlaylistData] = useState<{ url: string; mood: string } | null>(null);
  const { toast } = useToast();

  const handleCapture = async (frontImage: string, backImage: string) => {
    setImages({ front: frontImage, back: backImage });
    setAppState('preferences');
  };

  const handlePreferencesSubmit = (prefs: UserPreferences) => {
    setPreferences(prefs);
    setAppState('loading');
    
    // Mock API call
    setTimeout(() => {
      try {
        setPlaylistData({
          url: 'https://open.spotify.com/playlist/example',
          mood: `${prefs.mood} ${prefs.genre}`.charAt(0).toUpperCase() + `${prefs.mood} ${prefs.genre}`.slice(1)
        });
        setAppState('result');
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate playlist. Please try again.",
          variant: "destructive",
        });
        setAppState('capture');
      }
    }, 3000);
  };

  const resetApp = () => {
    setImages(null);
    setPreferences(null);
    setPlaylistData(null);
    setAppState('capture');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 background-pattern">
      <div className="container px-4 py-12">
        <header className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Disc className="w-8 h-8 text-indigo-700 rotate-12" />
            <h1 className="font-playfair text-4xl md:text-5xl text-indigo-900 font-bold tracking-wide">
              Vinyl Vibes
            </h1>
            <Disc className="w-8 h-8 text-indigo-700 -rotate-12" />
          </div>
          <div className="max-w-xl mx-auto px-6 py-3 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-lg border border-purple-200/30">
            <p className="font-inter text-indigo-800 text-lg mb-2">
              Your Vintage Playlist Experience
            </p>
            <p className="font-inter text-purple-700/70 text-sm italic">
              Where retro aesthetics meet your modern music taste
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          {appState === 'capture' && (
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-xs text-center">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100/80 to-indigo-100/80 text-indigo-900 rounded-full text-sm font-inter border border-purple-200/20 mb-3">
                  <Headphones className="w-4 h-4 inline mr-2" />
                  <span>Discover Your Sound</span>
                </div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200/30">
                <CameraCapture onCapture={handleCapture} />
              </div>
            </div>
          )}

          {appState === 'preferences' && (
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Music className="w-10 h-10 text-indigo-700" />
              </div>
              <PreferencesForm onSubmit={handlePreferencesSubmit} />
            </div>
          )}

          {appState === 'loading' && (
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200/30">
              <VinylLoader />
            </div>
          )}

          {appState === 'result' && playlistData && (
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Music className="w-10 h-10 text-indigo-700" />
              </div>
              <PlaylistResult
                playlistUrl={playlistData.url}
                mood={playlistData.mood}
              />
              <div className="text-center mt-8">
                <button 
                  onClick={resetApp}
                  className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
                >
                  Try Another Vibe
                </button>
              </div>
            </div>
          )}
        </main>
        
        <footer className="mt-20 text-center">
          <p className="font-inter text-purple-700/50 text-xs">
            Vinyl Vibes Generator &copy; {new Date().getFullYear()} | Where vintage meets modern
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
