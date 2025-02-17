
import React, { useRef, useState } from 'react';
import { Camera } from 'lucide-react';

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
        <div className="grid grid-cols-2 gap-4 mb-4">
          <video
            ref={frontVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full rounded-lg bg-vinyl-dark"
          />
          <video
            ref={backVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full rounded-lg bg-vinyl-dark"
          />
        </div>
      </div>
      
      {!isCameraActive ? (
        <button
          onClick={startCamera}
          className="px-8 py-4 bg-vinyl-brown text-vinyl-cream rounded-full font-inter 
                   transition-transform hover:scale-105 flex items-center justify-center gap-2
                   animate-fade-up"
        >
          <Camera className="w-5 h-5" />
          <span>Start Capture</span>
        </button>
      ) : (
        <button
          onClick={captureImages}
          className="px-8 py-4 bg-vinyl-gold text-vinyl-dark rounded-full font-inter
                   transition-transform hover:scale-105 animate-fade-up"
        >
          Capture Moment
        </button>
      )}
    </div>
  );
};

export default CameraCapture;
