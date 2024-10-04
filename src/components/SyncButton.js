import React, { useState } from "react";

const SyncButton = ({ videoRef, audioUrl, onError }) => {
  const [isSyncPlaying, setIsSyncPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const handleSyncPlayback = () => {
    if (videoRef.current && audioUrl) {
      try {
        // Pause if already playing
        if (isSyncPlaying) {
          videoRef.current.pause();
          if (audio) audio.pause();
          setIsSyncPlaying(false);
        } else {
          // Reset audio if already exists
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
          const newAudio = new Audio(audioUrl);
          newAudio.play().catch((err) => {
            console.error("Error playing audio:", err);
            if (onError) onError(err);
          });
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch((err) => {
            console.error("Error playing video:", err);
            if (onError) onError(err);
          });
          setAudio(newAudio);
          setIsSyncPlaying(true);

          // Pause both when audio ends
          newAudio.onended = () => {
            videoRef.current.pause();
            setIsSyncPlaying(false);
          };
        }
      } catch (err) {
        console.error("Synchronization error:", err);
        if (onError) onError(err);
      }
    } else {
      console.error("Video or Audio is not available for synchronization.");
      if (onError)
        onError(
          new Error("Video or Audio is not available for synchronization.")
        );
    }
  };

  return (
    <button
      onClick={handleSyncPlayback}
      className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-md w-full"
    >
      {isSyncPlaying ? "Stop Synchronized Playback" : "Play Synchronized"}
    </button>
  );
};

export default SyncButton;
