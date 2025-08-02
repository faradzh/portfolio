"use client";

import { useEffect, useRef } from "react";

import { createCanvasBackground } from "./utils";
import LightRays from "./LightRays";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    createCanvasBackground(videoRef.current!);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        className="video-background absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        ref={videoRef}
      >
        <source
          src="https://cdnjs.cloudflare.com/ajax/libs/video.js/8.5.2/video.min.js"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>
    </div>
  );
}
