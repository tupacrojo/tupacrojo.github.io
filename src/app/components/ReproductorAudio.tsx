"use client";
import { useState, useRef, useEffect } from "react";

function ReproductorAudio({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateCurrentTime = () => setCurrentTime(audio.currentTime);
      console.log(audio.duration);
      const updateDuration = () => setDuration(audio.duration);

      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", updateDuration);

      return () => {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <audio
        className="hidden"
        ref={audioRef}
        src={src}
        controls
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
            setIsPlaying(false);
            setCurrentTime(0);
          }
        }}
      >
        Tu navegador no soporta la etiqueta de audio.
      </audio>
      <div className="flex flex-row space-x-2">
        <button onClick={togglePlay}>
          {isPlaying ? (
            <svg
              className="w-3 h-3 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                fill="currentColor"
              />
              <path
                d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
              setCurrentTime(Number(e.target.value));
            }
          }}
        />
      </div>
      <div className="flex flex-row space-x-2">
        <svg
          className="w-3 h-3 lg:w-6 lg:h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M5.00304 11.7155C5.04093 9.87326 5.05988 8.95215 5.68099 8.16363C5.79436 8.0197 5.9607 7.8487 6.10011 7.73274C6.86393 7.09741 7.8724 7.09741 9.88932 7.09741C10.6099 7.09741 10.9702 7.09741 11.3137 7.00452C11.385 6.98522 11.4556 6.96296 11.5253 6.93781C11.8608 6.81674 12.1616 6.60837 12.7632 6.19161C15.137 4.54738 16.3239 3.72527 17.3201 4.08241C17.5111 4.15088 17.6959 4.24972 17.8611 4.37162C18.7222 5.00744 18.7877 6.48675 18.9185 9.44538C18.967 10.5409 19 11.4785 19 12C19 12.5215 18.967 13.4591 18.9185 14.5546C18.7877 17.5132 18.7222 18.9926 17.8611 19.6284C17.6959 19.7503 17.5111 19.8491 17.3201 19.9176C16.3239 20.2747 15.137 19.4526 12.7632 17.8084C12.1616 17.3916 11.8608 17.1833 11.5253 17.0622C11.4556 17.037 11.385 17.0148 11.3137 16.9955C10.9702 16.9026 10.6099 16.9026 9.88932 16.9026C7.8724 16.9026 6.86393 16.9026 6.10011 16.2673C5.9607 16.1513 5.79436 15.9803 5.68099 15.8364C5.05988 15.0478 5.04093 14.1267 5.00304 12.2845C5.00104 12.1878 5 12.0928 5 12C5 11.9072 5.00104 11.8122 5.00304 11.7155Z"
            fill="currentColor"
          />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.volume = Number(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default ReproductorAudio;
