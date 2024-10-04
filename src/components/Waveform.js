import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (waveformRef.current && audioUrl) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "violet",
        progressColor: "purple",
        height: 80,
      });

      wavesurfer.current.load(audioUrl);

      return () => {
        if (wavesurfer.current) wavesurfer.current.destroy();
      };
    }
  }, [audioUrl]);

  return <div ref={waveformRef} className="mt-2"></div>;
};

export default Waveform;
