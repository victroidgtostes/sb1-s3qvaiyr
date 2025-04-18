import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FrasesCarousel from "./components/FrasesCarousel";

const versiculos = [
  {
    texto: "“O amor tudo sofre, tudo crê, tudo espera, tudo suporta.”",
    referencia: "1 Coríntios 13:7",
  },
  {
    texto: "“Em Deus confio e não temerei.”",
    referencia: "Salmos 56:11",
  },
  {
    texto: "“Dou graças ao meu Deus todas as vezes que me lembro de vocês.”",
    referencia: "Filipenses 1:3",
  },
  {
    texto: "“Portanto, o que Deus uniu, ninguém separe.”",
    referencia: "Marcos 10:9",
  },
  {
    texto: "“Foi por este menino que oramos, e o Senhor atendeu a nossa súplica.”",
    referencia: "1 Samuel 1:27",
  },
];

const Vini: React.FC = () => {
  const [index, setIndex] = useState(0);
  const atual = versiculos[index];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center text-gray-800 dark:text-gray-100 transition-colors duration-500">
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

      <div className="max-w-xl mx-auto bg-white/90 dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-16 backdrop-blur-md">
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

      {/* Botão da música */}
      <div className="mb-10">
        <button
          onClick={() => {
            if (!(window as any).musicaAudio) {
              const audio = new Audio("https://vini.s-ul.eu/vsh1eBEQ");
              audio.loop = true;
              audio.volume = 0.6;
              (window as any).musicaAudio = audio;
            }

            const audio = (window as any).musicaAudio;

            if (audio.paused) {
              audio.play().then(() => setShowMusic(true)).catch((e) => console.error("Erro ao tocar música:", e));
            } else {
              audio.pause();
              setShowMusic(false);
            }
          }}
          className={`text-white px-4 py-2 rounded-full shadow-lg transition ${
            showMusic ? "bg-red-500 hover:bg-red-600" : "bg-orange-400 hover:bg-orange-500"
          }`}
        >
          {showMusic ? "⏸️ Pausar música" : "🎵 Nossa música"}
        </button>
        {showMusic && <p className="mt-2 text-sm text-pink-600">Tocando: música especial 💗</p>}
      </div>

      {/* Botão da surpresa */}
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

      {/* Carta com voz */}
      <div className="mb-16">
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
      {/* Frases especiais */}
      <div className="mb-20">
        <h3 className="text-4xl font-extrabold text-center text-pink-500 mb-2 drop-shadow-md">
          ✨ Nossas frases engraçadas e fofas ✨
        </h3>
        <p className="text-center text-lg text-gray-600 mb-6">Aquelas que só a gente entende 😄</p>
        <FrasesCarousel />
      </div>

      {/* Mapa simbólico */}
      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-4">📍 Onde tudo começou</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0113663887616!2d-40.316207!3d-20.3658066"
          width="100%"
          height="300"
          className="rounded-2xl mx-auto border"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Lua e descrição */}
      <div className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-xl font-medium mb-4">🌙 Imagem da lua no dia do pedido 💫</h2>
        <img
          src="https://i.imgur.com/m4e2ody.png"
          alt="Lua do dia do pedido"
          className="rounded-2xl mx-auto max-w-xs"
        />
        <p className="text-lg text-gray-700 mt-4">
          <strong className="text-xl">Fase da Lua: 11 de abril de 2024</strong><br />
          Neste dia, a Lua estava na fase Crescente. É melhor visualizada no oeste, após o pôr do sol.
          A Lua está próxima do Sol no céu e permanece em grande parte escura, exceto pela borda direita,
          que vai ficando mais iluminada à medida que os dias avançam para a próxima fase.
        </p>
      </div>

      {/* Versículos que Eu Te Dedico */}
      <section className="mt-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-4xl font-bold text-[#5a4635] font-playfair">
            Versículos que Eu Te Dedico
          </h2>

          <div className="relative bg-[#7b5e47] text-[#fdf8f1] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] p-10 min-h-[260px] max-w-3xl mx-auto flex flex-col items-center justify-center font-playfair transition-all duration-300">
            <p className="text-xl italic text-center leading-relaxed max-w-xl">
              {atual.texto}
            </p>
            <span className="mt-4 text-sm font-semibold tracking-wider">
              — {atual.referencia}
            </span>

            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={() =>
                  setIndex((prev) => (prev - 1 + versiculos.length) % versiculos.length)
                }
                className="bg-[#fdf8f1] text-[#7b5e47] p-2 rounded-full shadow hover:bg-[#f1e7db] transition"
              >
                <ChevronLeft size={22} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={() =>
                  setIndex((prev) => (prev + 1) % versiculos.length)
                }
                className="bg-[#fdf8f1] text-[#7b5e47] p-2 rounded-full shadow hover:bg-[#f1e7db] transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Playlist */}
      <div className="my-24">
        <h2 className="text-xl font-semibold text-orange-500 mb-4">🎶 Nossa playlist 💿</h2>
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

      {/* Frase final animada */}
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
