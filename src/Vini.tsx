import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FrasesCarousel from './components/FrasesCarousel';
import VersiculosLivro from "./components/VersiculosLivro";

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
  const [music] = useState<HTMLAudioElement>(
    new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3")
  );
  const [audio] = useState<HTMLAudioElement>(
    new Audio("https://cdn.jmp.sh/LRjKV8V4")
  );
  const [voice] = useState<HTMLAudioElement>(
    new Audio("https://cdn.jmp.sh/ozbOB9i4")
  );

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

  useEffect(() => {
    music.loop = true;
    music.volume = 0.3;
    music.play().catch(() => {});
    return () => music.pause();
  }, [music]);

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
    <div className="min-h-screen text-[22px] bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center text-gray-800 dark:text-gray-100 transition-colors duration-500 scroll-smooth">
      <motion.h1
        className="text-5xl font-bold mb-10 text-orange-500 drop-shadow-lg animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        Vini 💙
      </motion.h1>

      <div className="max-w-2xl mx-auto mb-12 px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/70 dark:bg-gray-700/70 shadow-xl p-4 rounded-2xl flex flex-col items-center max-w-xs mx-auto transition-all duration-500">
                <img
                  src={img}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-[320px] object-cover mb-3 rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-xl mx-auto bg-blue-100/70 dark:bg-blue-900/30 rounded-2xl shadow-lg p-6 mb-16 backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-orange-400 mb-6 text-center">
          Nossa Linha do Tempo 💖
       </h2>
        <div className="border-l-4 border-orange-300 dark:border-orange-500 pl-4 space-y-6">
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">01/07/2021</p>
            <p className="text-base text-gray-800 dark:text-gray-200">Nossa Primeira Conversa 💬</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">09/07/2021</p>
            <p className="text-base text-gray-800 dark:text-gray-200">Dia Que Nos Conhecemos 👀</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">15/11/2021</p>
            <p className="text-base text-gray-800 dark:text-gray-200">Nosso Primeiro Rolê 🎡</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">22/01/2024</p>
            <p className="text-base text-gray-800 dark:text-gray-200">Nosso Primeiro Beijo 💋</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 dark:bg-orange-500 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">11/04/2024</p>
            <p className="text-base text-gray-800 dark:text-gray-200">Nosso Começo 💞</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-green-400 dark:bg-green-600 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">11/04/2025</p>
            <p className="text-base text-green-800 dark:text-green-300">Nosso 1 Ano de Namoro 🎉</p>
          </div>
          <div className="relative opacity-50 italic">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-500 font-semibold">??/??/2025</p>
            <p className="text-base text-gray-600">Pedido de Casamento 💍 (em breve...)</p>
          </div>
          <div className="relative opacity-50 italic">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-500 font-semibold">??/??/2026</p>
            <p className="text-base text-gray-600">Dia do Casamento 💒 (em breve...)</p>
          </div>
        </div>
      </div>

      <div className="mb-16 bg-blue-50/70 dark:bg-gray-700/50 p-6 rounded-xl max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">💌 Uma cartinha com a minha voz</h2>
        <button
          onClick={() => {
            if (!(window as any).vozTocando) {
              const audioVoz = new Audio("https://vini.s-ul.eu/PmEMER5K");
              audioVoz.play()
                .then(() => {
                  (window as any).vozAudio = audioVoz;
                  (window as any).vozTocando = true;
                })
                .catch((e) => console.error("Erro ao tocar áudio da carta:", e));
            } else {
              const audioVoz = (window as any).vozAudio;
              if (audioVoz) {
                audioVoz.pause();
                audioVoz.currentTime = 0;
              }
              (window as any).vozTocando = false;
            }
          }}
          className="text-white bg-blue-400 px-4 py-2 rounded-full hover:bg-blue-500 transition"
        >
          💬 Tocar / Parar carta com voz
        </button>
      </div>

      <div className="mb-20 bg-pink-100/70 dark:bg-pink-800/50 p-6 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center text-pink-500 mb-2 drop-shadow-md">
          ✨ Nossas frases engraçadas e fofas ✨
        </h3>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">Aquelas que só a gente entende 😄</p>
        <FrasesCarousel />
      </div>

      <section className="mt-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center bg-orange-100/60 dark:bg-orange-900/40 p-6 rounded-2xl">
          <h2 className="text-4xl font-bold text-[#5a4635] font-playfair">
            Versículos que Eu Te Dedico
          </h2>
          <VersiculosLivro />
        </div>
      </section>

      <div className="my-16 bg-green-100/70 dark:bg-green-900/40 p-6 rounded-2xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">🎶 Nossa playlist 💿</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/6z1hjOuRdMiy283EkpIyOA?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl mx-auto"
        ></iframe>
      </div>

      <motion.div
        className="text-2xl font-bold text-orange-600 mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Feliz 1 ano, minha neneca. Eu e você, você e eu, sempre! Eu te amo 💓
      </motion.div>

      <footer className="mt-10 py-6 bg-white bg-opacity-80 backdrop-blur border-t border-gray-300 text-center text-sm text-gray-600 rounded-t-xl">
        Feito com muito amor por você 💖 | © {new Date().getFullYear()} Vini & Neneca
      </footer>
    </div>
  );
};

export default Vini;
