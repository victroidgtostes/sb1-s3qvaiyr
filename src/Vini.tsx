import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FrasesCarousel from './components/FrasesCarousel';

const Vini: React.FC = () => {
  const [since, setSince] = useState({
    days: 0,
    weeks: 0,
    months: 0,
    hours: 0,
    minutes: 0,
  });

  const [moonImage, setMoonImage] = useState<string | null>(null);
  const [music] = useState<HTMLAudioElement>(
    new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3")
  );
  const [showSurprise, setShowSurprise] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
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
    <div className="min-h-screen bg-blue-100 p-4 text-center text-gray-800 relative overflow-hidden text-[20px]">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Vini 💙</h1>

      {/* Carrossel estilo Polaroid */}
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
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">01/07/2021</p>
            <p className="text-base text-gray-800">Nossa Primeira Conversa 💬</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">09/07/2021</p>
            <p className="text-base text-gray-800">Dia Que Nos Conhecemos 👀</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">15/11/2021</p>
            <p className="text-base text-gray-800">Nosso Primeiro Rolê 🎡</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">22/01/2024</p>
            <p className="text-base text-gray-800">Nosso Primeiro Beijo 💋</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">11/04/2024</p>
            <p className="text-base text-gray-800">Nosso Começo 💞</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            <p className="text-sm text-gray-600 font-semibold">11/04/2025</p>
            <p className="text-base text-green-800">Nosso 1 Ano de Namoro 🎉</p>
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
<div className="mb-6">
  <button
    onClick={() => {
      if (!(window as any).musicaAudio) {
        const audio = new Audio("https://vini.s-ul.eu/vsh1eBEQ"); // link original mantido
        audio.loop = true;
        audio.volume = 0.6;
        (window as any).musicaAudio = audio;
      }

      const audio = (window as any).musicaAudio;

      if (audio.paused) {
        audio.play()
          .then(() => setShowMusic(true))
          .catch((e) => console.error("Erro ao tocar música:", e));
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
    className="text-white bg-blue-400 px-4 py-2 rounded-full hover:bg-blue-500"
  >
    💬 Tocar / Parar carta com voz
  </button>
</div>

      <FrasesCarousel />

      {/* Mapa simbólico */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📍 Onde tudo começou</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0113663887616!2d-40.316207!3d-20.3658066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83f85759bca2f%3A0x598be803d66b887b!2sCEEMTI%20PROF.%20MAURA%20ABAURRE!5e0!3m2!1spt-BR!2sbr!4v1712691878004!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          className="rounded-2xl mx-auto"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Lua e descrição */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Imagem da lua no dia do pedido 💫</h2>
        <img
          src="https://i.imgur.com/m4e2ody.png"
          alt="Lua do dia do pedido"
          className="mt-4 mx-auto rounded-2xl max-w-xs"
        />
        <p className="text-lg text-gray-700 max-w-xs mx-auto mt-4">
          <strong className="text-xl">Fase da Lua: 11 de abril de 2024</strong><br />
          Neste dia, a Lua estava na fase Crescente. É melhor visualizada no oeste, após o pôr do sol, quando o sol já se pôs no horizonte. Essa é a primeira fase após a Lua Nova e é um ótimo momento para observar os detalhes da superfície lunar. A Lua está próxima do Sol no céu e permanece em grande parte escura, exceto pela borda direita, que vai ficando mais iluminada à medida que os dias avançam para a próxima fase, que é o Quarto Crescente, com 50% de iluminação.
        </p>
      </div>

      {/* Playlist */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-orange-500 mb-2">Nossa playlist 💿</h2>
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
        Feliz 1 ano, minha neneca, eu e você e você e eu, sempre! Eu te amo, a cada batida do meu coração 💓
      </motion.div>
    </div>
  );
};

export default Vini;
