import { Volume2 } from "lucide-react";
import React from "react";

export default function Speaker() {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  function handleClick() {
    if (audioRef.current) {
      // Reset audio to start
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }
  return (
    <span
      onClick={handleClick}
      className="absolute top-[-1rem] sm:top-0 right-0 hover:scale-110 transition-transform duration-300 z-10 cursor-pointer animate-bounce"
    >
      <Volume2 className="h-7 w-7" />
      <audio src="/intro.m4a" ref={audioRef} />
    </span>
  );
}
