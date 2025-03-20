
import React, { useRef, useState } from 'react';
import { Camera, Disc } from 'lucide-react';

interface CameraCaptureProps {
  onCapture: (frontImage: string, backImage: string) => void;
}

const CameraCapture = ({ onCapture }: CameraCaptureProps) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const frontVideoRef = useRef<HTMLVideoElement>(null);
  const backVideoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const frontStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }
      });
      
      const backStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });

      if (frontVideoRef.current && backVideoRef.current) {
        frontVideoRef.current.srcObject = frontStream;
        backVideoRef.current.srcObject = backStream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImages = () => {
    if (!frontVideoRef.current || !backVideoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');

    // Capture front camera
    if (ctx && frontVideoRef.current) {
      ctx.drawImage(frontVideoRef.current, 0, 0, canvas.width, canvas.height);
      const frontImage = canvas.toDataURL('image/jpeg');

      // Capture back camera
      ctx.drawImage(backVideoRef.current, 0, 0, canvas.width, canvas.height);
      const backImage = canvas.toDataURL('image/jpeg');

      onCapture(frontImage, backImage);
      setIsCameraActive(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`transition-opacity duration-300 ${isCameraActive ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-vinyl-sepia rounded-full z-10 flex items-center justify-center">
              <span className="text-vinyl-cream font-bold text-xs">YOU</span>
            </div>
            <video
              ref={frontVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full aspect-video rounded-lg bg-vinyl-dark/90 border-4 border-vinyl-sepia shadow-md"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-vinyl-mahogany rounded-full z-10 flex items-center justify-center">
              <span className="text-vinyl-cream font-bold text-xs">SCENE</span>
            </div>
            <video
              ref={backVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full aspect-video rounded-lg bg-vinyl-dark/90 border-4 border-vinyl-mahogany shadow-md"
            />
          </div>
        </div>
      </div>
      
      {!isCameraActive ? (
        <div className="text-center">
          <button
            onClick={startCamera}
            className="px-8 py-4 bg-vinyl-mahogany text-vinyl-cream rounded-full font-inter 
                    transition-all hover:scale-105 hover:bg-vinyl-brown flex items-center justify-center gap-3
                    animate-fade-up shadow-md hover:shadow-lg border-2 border-vinyl-cream/10"
          >
            <Camera className="w-5 h-5" />
            <span className="font-medium tracking-wide">Start Capture</span>
          </button>
          <p className="mt-4 text-sm text-vinyl-brown/70 font-inter italic">
            We'll analyze your surroundings and personal style
          </p>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={captureImages}
            className="px-8 py-4 bg-gradient-to-r from-vinyl-amber to-vinyl-gold text-vinyl-dark rounded-full font-inter
                    transition-all hover:scale-105 animate-fade-up font-semibold tracking-wide
                    shadow-md hover:shadow-lg border-2 border-vinyl-cream/30 flex items-center justify-center gap-2"
          >
            <Disc className="w-5 h-5" />
            <span>Capture Moment</span>
          </button>
          <p className="mt-4 text-sm text-vinyl-brown/70 font-inter">
            Make sure both cameras can see clearly
          </p>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
