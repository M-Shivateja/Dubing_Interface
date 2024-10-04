// src/App.js
import React, { useRef, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import AudioRecorder from "./components/AudioRecorder";
import SyncButton from "./components/SyncButton";
import { DialogueProvider } from "./context/DialogueContext";
import Dialogue from "./components/Dailogue";

const App = () => {
  const videoRef = useRef(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleRecordingComplete = (blobUrl) => {
    setRecordedAudioUrl(blobUrl);
  };

  const handleError = (err) => {
    setError(err.message || "An unexpected error occurred.");
    console.error(err);
  };

  return (
    <DialogueProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Dubbing Interface
        </h1>

        {error && (
          <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
            Error: {error}
          </div>
        )}

        {/* Video Player */}
        <VideoPlayer
          ref={videoRef}
          src="/sample-video.mp4"
          onError={handleError}
        />

        {/* Audio Recorder */}
        <AudioRecorder
          onRecordingComplete={handleRecordingComplete}
          onError={handleError}
        />

        {/* Sync Button */}
        {recordedAudioUrl && (
          <SyncButton
            videoRef={videoRef}
            audioUrl={recordedAudioUrl}
            onError={handleError}
          />
        )}

        {/* Dialogue Display */}
        <Dialogue />
      </div>
    </DialogueProvider>
  );
};

export default App;
