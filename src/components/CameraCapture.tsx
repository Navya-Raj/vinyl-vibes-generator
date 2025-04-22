
import React, { useRef, useState } from 'react';
import { Camera, ArrowRight, Circle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface CameraCaptureProps {
  onCapture: (frontImage: string, backImage: string) => void;
}

const CameraCapture = ({ onCapture }: CameraCaptureProps) => {
  const [step, setStep] = useState<'intro' | 'frontCamera' | 'backCamera'>('intro');
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const startCamera = async (mode: 'user' | 'environment') => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: mode }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStep(mode === 'user' ? 'frontCamera' : 'backCamera');
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const captureImage = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');

    if (ctx && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL('image/jpeg');
      
      // Stop the camera stream
      const stream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }

      if (step === 'frontCamera') {
        setFrontImage(image);
        setStep('backCamera');
        setTimeout(() => startCamera('environment'), 500);
      } else if (step === 'backCamera' && frontImage) {
        onCapture(frontImage, image);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {step === 'intro' && (
        <div className="text-center p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-purple-300/30 backdrop-blur-sm">
          <h2 className="text-2xl font-playfair text-indigo-900 mb-4">Capture Your Vibe</h2>
          <p className="mb-6 font-inter text-purple-800">
            We'll snap two quick pics - first you, then your surroundings!
          </p>
          <button
            onClick={() => startCamera('user')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-inter 
                    transition-all hover:scale-105 flex items-center justify-center gap-3
                    animate-fade-up shadow-lg hover:shadow-purple-500/30 border-2 border-purple-200"
          >
            <Camera className="w-5 h-5" />
            <span className="font-medium tracking-wide">Let's Start!</span>
          </button>
        </div>
      )}

      {(step === 'frontCamera' || step === 'backCamera') && (
        <div className="relative">
          <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-purple-900">
            {step === 'frontCamera' ? 'Selfie Time!' : 'Capture Your Surroundings'}
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-indigo-900/90 to-purple-900/90 border-4 border-purple-500/30 shadow-xl">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={captureImage}
              className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <Circle className="w-12 h-12 text-white" />
            </button>
            <p className="mt-3 text-sm text-purple-800/70 font-inter">
              {step === 'frontCamera' 
                ? 'Snap a selfie to capture your mood' 
                : 'Now capture your surroundings'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
