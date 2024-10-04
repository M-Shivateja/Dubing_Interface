import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Waveform from "./Waveform";

const AudioRecorder = ({ onRecordingComplete, onError }) => {
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
    error: recordingError,
  } = useReactMediaRecorder({
    audio: true,
    onStop: (blobUrl, blob) => {
      if (blobUrl) {
        onRecordingComplete(blobUrl);
      }
    },
  });

  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (recordingError && onError) {
      onError(recordingError);
    }
  }, [recordingError, onError]);

  const handleStart = () => {
    setIsRecording(true);
    startRecording();
  };

  const handleStop = () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center space-x-4">
        <button
          onClick={isRecording ? handleStop : handleStart}
          className={`px-4 py-2 rounded-md text-white ${
            isRecording ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
      {mediaBlobUrl && (
        <div className="mt-4">
          <audio src={mediaBlobUrl} controls className="w-full"></audio>
          <Waveform audioUrl={mediaBlobUrl} />
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
