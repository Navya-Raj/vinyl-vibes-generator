
import React, { useRef, useState, useEffect } from 'react';
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
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [streamActive, setStreamActive] = useState(false);

  // Clean up camera stream when component unmounts or when step changes
  useEffect(() => {
    return () => {
      cleanupCameraStream();
    };
  }, []);

  const cleanupCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStreamActive(false);
    }
  };

  const startCamera = async (mode: 'user' | 'environment') => {
    try {
      // Reset permission denied state on each attempt
      setPermissionDenied(false);
      
      // First, ensure any previous streams are cleaned up
      cleanupCameraStream();

      console.log("Requesting camera access...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: mode }
      });
      console.log("Camera access granted");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreamActive(true);
        
        // Directly set the step immediately after getting camera access
        console.log("Setting step to:", mode === 'user' ? 'frontCamera' : 'backCamera');
        setStep(mode === 'user' ? 'frontCamera' : 'backCamera');
        
        // Still try to play the video, but don't make UI update dependent on it
        videoRef.current.play()
          .then(() => {
            console.log("Video started playing");
          })
          .catch(err => {
            console.error("Error playing video:", err);
            toast({
              title: "Video Warning",
              description: "Video may not be playing properly, but you can still capture an image.",
              variant: "destructive",
            });
          });
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setPermissionDenied(true);
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please check permissions and try again.",
        variant: "destructive",
      });
    }
  };

  const captureImage = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');

    if (ctx && videoRef.current) {
      // If we have video dimensions, use them; otherwise, just capture whatever is visible
      if (videoRef.current.videoWidth && videoRef.current.videoHeight) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.font = "20px Arial";
        ctx.fillText("Camera capture not available", 20, canvas.height / 2);
      }
      
      const image = canvas.toDataURL('image/jpeg');
      
      // Stop the camera stream
      cleanupCameraStream();

      if (step === 'frontCamera') {
        console.log("Front image captured, switching to back camera");
        setFrontImage(image);
        setStep('backCamera');
        setTimeout(() => startCamera('environment'), 500);
      } else if (step === 'backCamera' && frontImage) {
        console.log("Back image captured, calling onCapture");
        onCapture(frontImage, image);
      }
    }
  };

  // Debug output for current step
  console.log("Current step:", step);
  console.log("Stream active:", streamActive);

  return (
    <div className="w-full max-w-md mx-auto">
      {step === 'intro' && (
        <div className="text-center p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-purple-300/30 backdrop-blur-sm">
          <h2 className="text-2xl font-playfair text-indigo-900 mb-4">Capture Your Vibe</h2>
          <p className="mb-6 font-inter text-purple-800">
            We'll snap two quick pics - first you, then your surroundings!
          </p>
          <button
            onClick={() => {
              console.log("Let's Start button clicked");
              startCamera('user');
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-inter 
                    transition-all hover:scale-105 flex items-center justify-center gap-3
                    animate-fade-up shadow-lg hover:shadow-purple-500/30 border-2 border-purple-200"
          >
            <Camera className="w-5 h-5" />
            <span className="font-medium tracking-wide">Let's Start!</span>
          </button>
          
          {permissionDenied && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              <p className="font-medium">Camera access denied</p>
              <p className="text-xs mt-1">Please allow camera access in your browser settings and try again</p>
            </div>
          )}
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
