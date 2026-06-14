import React, { useState, useEffect, useRef } from 'react';

// Placeholder audio URL – replace with your own ambient sci‑fi pad file
const AUDIO_SRC = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

const AmbientSoundToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      playing ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [playing]);

  // Stop sound on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return (
    <button
      className="ambient-toggle"
      onClick={() => setPlaying((p) => !p)}
      aria-pressed={playing}
    >
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      {playing ? '🔊' : '🔈'}
    </button>
  );
};

export default AmbientSoundToggle;
