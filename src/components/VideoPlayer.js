import React, { useRef, useState, useEffect } from "react";
import silent from "../components/silent.mp4";
const VideoPlayer = React.forwardRef(({ src, onError }, ref) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (ref) {
      ref.current = videoRef.current;
    }
  }, [ref]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video:", err);
          if (onError) onError(err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (event) => {
    if (videoRef.current) {
      const seekTime = (event.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleVideoError = (e) => {
    console.error("Video playback error:", e);
    if (onError) onError(e);
  };

  return (
    <div className="w-full max-w-lg">
      <video
        ref={videoRef}
        src={silent}
        onTimeUpdate={handleTimeUpdate}
        onError={handleVideoError}
        className="w-full rounded"
        controls={false}
      />
      <div className="flex items-center mt-2">
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="flex-grow mx-2"
          min="0"
          max="100"
        />
        <span className="text-sm">
          {Math.floor(videoRef.current?.currentTime || 0)} /{" "}
          {Math.floor(videoRef.current?.duration || 0)}s
        </span>
      </div>
    </div>
  );
});

export default VideoPlayer;
