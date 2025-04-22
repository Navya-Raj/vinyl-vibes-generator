import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Disc, Music, Headphones, ArrowRight } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: {
    language: string;
    mood: string;
    lifePhase: string;
    genre: string;
  }) => void;
}

const PreferencesForm = ({ onSubmit }: PreferencesFormProps) => {
  const [preferences, setPreferences] = React.useState({
    language: 'english',
    mood: 'chill',
    lifePhase: 'exploring',
    genre: 'mix',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const handleChange = (field: string, value: string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-300/30 shadow-xl animate-fade-up">
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
          <Music className="w-5 h-5 text-white" />
        </div>
        <h2 className="ml-3 text-2xl font-playfair text-indigo-900">Tune Your Vibe</h2>
      </div>
      
      <p className="text-sm text-center text-purple-800/70 mb-6">
        Help us craft the perfect vintage-inspired playlist just for you
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium text-indigo-900 flex items-center">
            <Headphones className="w-4 h-4 mr-2" /> 
            Preferred Language
          </label>
          <RadioGroup 
            defaultValue="english" 
            value={preferences.language}
            onValueChange={(value) => handleChange('language', value)}
            className="flex flex-wrap gap-2"
          >
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="english" id="english" className="text-purple-600" />
              <label htmlFor="english" className="text-sm font-medium text-purple-900 cursor-pointer">
                English
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="spanish" id="spanish" className="text-purple-600" />
              <label htmlFor="spanish" className="text-sm font-medium text-purple-900 cursor-pointer">
                Spanish
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="instrumental" id="instrumental" className="text-purple-600" />
              <label htmlFor="instrumental" className="text-sm font-medium text-purple-900 cursor-pointer">
                Instrumental
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="mixed" id="mixed" className="text-purple-600" />
              <label htmlFor="mixed" className="text-sm font-medium text-purple-900 cursor-pointer">
                Mixed
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-indigo-900 flex items-center">
            <Music className="w-4 h-4 mr-2" /> 
            Current Mood
          </label>
          <RadioGroup 
            defaultValue="chill" 
            value={preferences.mood}
            onValueChange={(value) => handleChange('mood', value)}
            className="flex flex-wrap gap-2"
          >
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="chill" id="chill" className="text-purple-600" />
              <label htmlFor="chill" className="text-sm font-medium text-purple-900 cursor-pointer">
                Laid Back
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="energetic" id="energetic" className="text-purple-600" />
              <label htmlFor="energetic" className="text-sm font-medium text-purple-900 cursor-pointer">
                Energetic
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="melancholy" id="melancholy" className="text-purple-600" />
              <label htmlFor="melancholy" className="text-sm font-medium text-purple-900 cursor-pointer">
                Nostalgic
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="focused" id="focused" className="text-purple-600" />
              <label htmlFor="focused" className="text-sm font-medium text-purple-900 cursor-pointer">
                Focused
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-indigo-900 flex items-center">
            <Disc className="w-4 h-4 mr-2" /> 
            Life Phase
          </label>
          <RadioGroup 
            defaultValue="exploring" 
            value={preferences.lifePhase}
            onValueChange={(value) => handleChange('lifePhase', value)}
            className="flex flex-wrap gap-2"
          >
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="exploring" id="exploring" className="text-purple-600" />
              <label htmlFor="exploring" className="text-sm font-medium text-purple-900 cursor-pointer">
                Exploring
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="grinding" id="grinding" className="text-purple-600" />
              <label htmlFor="grinding" className="text-sm font-medium text-purple-900 cursor-pointer">
                Grinding
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="reflecting" id="reflecting" className="text-purple-600" />
              <label htmlFor="reflecting" className="text-sm font-medium text-purple-900 cursor-pointer">
                Reflecting
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="celebrating" id="celebrating" className="text-purple-600" />
              <label htmlFor="celebrating" className="text-sm font-medium text-purple-900 cursor-pointer">
                Celebrating
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-indigo-900 flex items-center">
            <Headphones className="w-4 h-4 mr-2" /> 
            Genre Preference
          </label>
          <RadioGroup 
            defaultValue="mix" 
            value={preferences.genre}
            onValueChange={(value) => handleChange('genre', value)}
            className="flex flex-wrap gap-2"
          >
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="mix" id="mix" className="text-purple-600" />
              <label htmlFor="mix" className="text-sm font-medium text-purple-900 cursor-pointer">
                Surprise Me
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="rock" id="rock" className="text-purple-600" />
              <label htmlFor="rock" className="text-sm font-medium text-purple-900 cursor-pointer">
                Classic Rock
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="indie" id="indie" className="text-purple-600" />
              <label htmlFor="indie" className="text-sm font-medium text-purple-900 cursor-pointer">
                Indie Vibes
              </label>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100/70 rounded-full px-4 py-2">
              <RadioGroupItem value="electronic" id="electronic" className="text-purple-600" />
              <label htmlFor="electronic" className="text-sm font-medium text-purple-900 cursor-pointer">
                Electronic
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-inter 
                    transition-all hover:scale-105 flex items-center justify-center gap-2
                    shadow-lg hover:shadow-purple-500/30 border border-purple-400/30"
          >
            <span className="font-medium">Spin My Playlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;
