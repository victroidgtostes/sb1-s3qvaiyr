import React, { useState, useRef } from "react";

const NossaMusica = () => {
  const [showMusic, setShowMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    setShowMusic((prev) => {
      const newState = !prev;
      if (newState) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
      }
      return newState;
    });
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={toggleMusic}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
      >
        🎵 Nossa música
      </button>

      {showMusic && (
        <>
          <p className="mt-2 text-sm">Tocando: música especial 💗</p>
          <audio ref={audioRef}>
            <source src="https://vini.s-ul.eu/PmEMER5K" type="audio/mpeg" />
            Seu navegador não suporta o player de áudio.
          </audio>
        </>
      )}
    </div>
  );
};

export default NossaMusica;
