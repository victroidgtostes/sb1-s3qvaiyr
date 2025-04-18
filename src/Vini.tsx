import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Vini: React.FC = () => {
  const [since, setSince] = useState({
    days: 0,
    weeks: 0,
    months: 0,
    hours: 0,
    minutes: 0,
  });

  const [showSurprise, setShowSurprise] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  const cartaAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [voiceProgress, setVoiceProgress] = useState(0);
  const [voiceDuration, setVoiceDuration] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-04-11T00:00:00");
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const minutes = Math.floor(diff / (1000 * 60));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30.44);
      setSince({ days, weeks, months, hours, minutes });
    };
    updateCounter();
    const interval = setInterval(updateCounter, 60000);
    return () => clearInterval(interval);
  }, []);

  // Atualiza progresso da carta com voz
  useEffect(() => {
    let interval: any;

    if (isVoicePlaying && cartaAudioRef.current) {
      const audio = cartaAudioRef.current;
      interval = setInterval(() => {
        setVoiceProgress(audio.currentTime);
        setVoiceDuration(audio.duration || 0);
      }, 200);
    }

    return () => clearInterval(interval);
  }, [isVoicePlaying]);

  const gallery: string[] = [
    "https://i.imgur.com/NofTl4Z.jpeg",
    "https://i.imgur.com/ONrakdS.jpeg",
    "https://i.imgur.com/vxMKcYy.jpeg",
    "https://i.imgur.com/RhHGVBj.jpeg",
    "https://i.imgur.com/fy1p4pC.jpeg",
    "https://i.imgur.com/o4NLM8N.jpeg",
    "https://i.imgur.com/xmYYEv6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-4 text-center text-gray-800 relative overflow-hidden text-[20px]">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Vini 💙</h1>

      {/* Carrossel de fotos */}
      <div className="max-w-2xl mx-auto mb-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl p-4 rounded-2xl flex flex-col items-center max-w-xs mx-auto">
                <img
                  src={img}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-[320px] object-cover mb-3 rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Linha do tempo */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-orange-400 mb-6 text-center">Nossa Linha do Tempo 💖</h2>
        <div className="border-l-4 border-orange-300 pl-4 space-y-6">
          {/* ... datas aqui (sem alterações) */}
          {/* ... */}
        </div>
      </div>

      {/* Botão da música */}
      <div className="mb-6">
        <button
          onClick={() => {
            if (!musicRef.current) {
              musicRef.current = new Audio("https://vini.s-ul.eu/PmEMER5K");
              musicRef.current.loop = true;
            }

            if (musicRef.current.paused) {
              musicRef.current.play().then(() => setShowMusic(true)).catch(console.error);
            } else {
              musicRef.current.pause();
              musicRef.current.currentTime = 0;
              setShowMusic(false);
            }
          }}
          className="text-white bg-orange-400 px-4 py-2 rounded-full shadow-lg hover:bg-orange-500"
        >
          🎵 {showMusic ? "Parar música" : "Nossa música"}
        </button>
        {showMusic && <p className="mt-2 text-sm">Tocando: música especial 💗</p>}
      </div>

      {/* Botão da surpresa */}
      <div className="mb-10">
        <button
          onClick={() => setShowSurprise(true)}
          className="bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500"
        >
          🎁 Clique para uma surpresa!
        </button>
        {showSurprise && (
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">🌸 Te amo além das palavras 🌸</p>
            <a
              href="https://drive.google.com/file/d/1pf0AOWCbL0F7U9s6WJqg1ubTVMzKGVuC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              📺 Assistir ao vídeo da surpresa no Drive
            </a>
            <div className="text-3xl mt-4 animate-pulse">🎆🌺🍍✨</div>
          </div>
        )}
      </div>

      {/* Carta com voz */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">💌 Uma cartinha com a minha voz</h2>
        <button
          onClick={() => {
            if (!cartaAudioRef.current) {
              cartaAudioRef.current = new Audio("https://vini.s-ul.eu/vsh1eBEQ");
              cartaAudioRef.current.addEventListener("ended", () => {
                setIsVoicePlaying(false);
                setVoiceProgress(0);
              });
            }

            const audio = cartaAudioRef.current;

            if (audio.paused) {
              audio.play().then(() => setIsVoicePlaying(true)).catch(console.error);
            } else {
              audio.pause();
              setIsVoicePlaying(false);
            }
          }}
          className={`flex items-center gap-2 text-white px-4 py-2 rounded-full transition shadow-md ${
            isVoicePlaying ? "bg-red-500 hover:bg-red-600" : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          {isVoicePlaying ? "⏸️ Pausar" : "▶️ Ouvir"} carta com voz
        </button>

        {/* Barra de progresso */}
        {isVoicePlaying && (
          <div className="w-full max-w-md mx-auto mt-4">
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400 transition-all duration-200"
                style={{ width: `${(voiceProgress / voiceDuration) * 100 || 0}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {Math.floor(voiceProgress)}s / {Math.floor(voiceDuration)}s
            </p>
          </div>
        )}
      </div>

      {/* Mapa, lua, playlist e mensagem final continuam iguais... */}
      {/* ... */}
      <motion.div
        className="text-2xl font-bold text-orange-600 mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Feliz 1 ano, minha neneca, eu e você e você e eu, sempre! Eu te amo, a cada batida do meu coração 💓
      </motion.div>
    </div>
  );
};

export default Vini;
