import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FrasesCarousel from './components/FrasesCarousel';
import VersiculosLivro from "./components/VersiculosLivro";
import './styles/global.css';

const Vini: React.FC = () => {
  // --- Estado da contagem ---
  const [since, setSince] = useState({
    days: 0,
    weeks: 0,
    months: 0,
    hours: 0,
    minutes: 0,
  });

  // --- Estados de UI ---
  const [showSurprise, setShowSurprise] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  // --- Áudio de fundo (criado só uma vez) ---
  const music = useMemo(
    () => new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3"),
    []
  );

  // --- Atualiza contador a cada minuto ---
  useEffect(() => {
    const startDate = new Date("2024-04-11T00:00:00");
    const updateCounter = () => {
      const now = Date.now();
      const diff = now - startDate.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30.44);
      setSince({ days, weeks, months, hours, minutes });
    };
    updateCounter();
    const id = setInterval(updateCounter, 60000);
    return () => clearInterval(id);
  }, []);

  // --- Configura loop, volume e cleanup do áudio ---
  useEffect(() => {
    music.loop = true;
    music.volume = 0.3;
    music.play().catch(() => {});
    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, [music]);

  // --- Função de ligar/desligar música ---
  const toggleMusic = () => {
    if (music.paused) {
      music.play().then(() => setShowMusic(true));
    } else {
      music.pause();
      setShowMusic(false);
    }
  };

  // --- Galeria de fotos ---
  const gallery = [
    "https://i.imgur.com/NofTl4Z.jpeg",
    "https://i.imgur.com/ONrakdS.jpeg",
    "https://i.imgur.com/vxMKcYy.jpeg",
    "https://i.imgur.com/RhHGVBj.jpeg",
    "https://i.imgur.com/fy1p4pC.jpeg",
    "https://i.imgur.com/o4NLM8N.jpeg",
    "https://i.imgur.com/xmYYEv6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center text-gray-800 dark:text-gray-100 transition-colors duration-500 scroll-smooth">
      {/* Título */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-orange-500 drop-shadow-lg animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        Vini 💙
      </motion.h1>

      {/* Contador */}
      <p className="mb-8 text-lg">
        Já se passaram <strong>{since.days}</strong> dias (
        <strong>{since.weeks}</strong> semanas, <strong>{since.months}</strong> meses),{' '}
        <strong>{since.hours}</strong> horas e <strong>{since.minutes}</strong> minutos.
      </p>

      {/* Carrossel de Fotos */}
      <div className="max-w-2xl mx-auto mb-12 px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/70 dark:bg-gray-700/70 shadow-xl p-4 rounded-2xl flex flex-col items-center max-w-xs mx-auto transition-all duration-500">
                <img
                  src={img}
                  alt={`Foto ${i + 1}`}
                  className="w-full h-[320px] object-cover mb-3 rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Linha do Tempo */}
      <div className="max-w-xl mx-auto bg-blue-100/70 dark:bg-blue-900/30 rounded-2xl shadow-lg p-6 mb-16 backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-orange-400 mb-6 text-center">
          Nossa Linha do Tempo 💖
        </h2>
        <div className="border-l-4 border-orange-300 dark:border-orange-500 pl-4 space-y-6">
          {/* ... seus eventos aqui ... */}
        </div>
      </div>

      {/* Música */}
      <div className="mb-10">
        <button
          onClick={toggleMusic}
          className={`text-white px-4 py-2 rounded-full shadow-lg transition ${
            showMusic ? "bg-red-500 hover:bg-red-600" : "bg-orange-400 hover:bg-orange-500"
          }`}
        >
          {showMusic ? "⏸️ Pausar música" : "🎵 Nossa música"}
        </button>
        {showMusic && <p className="mt-2 text-sm text-pink-600">Tocando: música especial 💗</p>}
      </div>

      {/* Surpresa */}
      <div className="mb-16">
        <button
          onClick={() => setShowSurprise(true)}
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          🎁 Clique para uma surpresa!
        </button>
        {showSurprise && (
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2 text-pink-700">🌸 Te amo além das palavras 🌸</p>
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

      {/* Frases Engraçadas */}
      <div className="mb-20 bg-pink-50 dark:bg-gray-800/50 p-6 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center text-pink-500 mb-2 drop-shadow-md">
          ✨ Nossas frases engraçadas e fofas ✨
        </h3>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
          Aquelas que só a gente entende 😄
        </p>
        <FrasesCarousel />
      </div>

      {/* Lua do Pedido */}
      <div className="mb-20 max-w-3xl mx-auto bg-yellow-50/60 dark:bg-gray-700/50 p-6 rounded-2xl">
        <h2 className="text-xl font-medium mb-4">🌙 Imagem da lua no dia do pedido 💫</h2>
        <img
          src="https://i.imgur.com/m4e2ody.png"
          alt="Lua do dia do pedido"
          className="rounded-2xl mx-auto max-w-xs"
        />
        <p className="text-lg text-gray-700 mt-4 dark:text-gray-200">
          <strong className="text-xl">Fase da Lua: 11 de abril de 2024</strong><br />
          Neste dia, a Lua estava na fase Crescente...
        </p>
      </div>

      {/* Versículos */}
      <section className="mt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-4xl font-bold text-[#5a4635] font-playfair">
            Versículos que Eu Te Dedico
          </h2>
          <VersiculosLivro />
        </div>
      </section>

      {/* Playlist */}
      <div className="my-16">
        <h2 className="text-xl font-semibold text-orange-500 mb-4">🎶 Nossa playlist 💿</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/6z1hjOuRdMiy283EkpIyOA?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl mx-auto"
        />
      </div>

      {/* Frase Final */}
      <motion.div
        className="text-2xl font-bold text-orange-600 mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Feliz 1 ano, minha neneca. Eu e você, você e eu, sempre! Eu te amo 💓
      </motion.div>

      {/* Rodapé */}
      <footer className="mt-10 py-6 bg-white bg-opacity-80 backdrop-blur border-t border-gray-300 text-center text-sm text-gray-600 rounded-t-xl">
        Feito com muito amor por você 💖 | © {new Date().getFullYear()} Vini & Neneca
      </footer>
    </div>
  );
};

export default Vini;
