"use client";

import { useEffect, useRef } from "react";
import { createCanvasBackground } from "./utils";

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
      <div className="video-overlay"></div>
    </div>
  );
}
