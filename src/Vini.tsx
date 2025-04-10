import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
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
    <div className="min-h-screen bg-blue-100 p-4 text-center text-gray-800 relative overflow-hidden">
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
                <p className="text-sm text-gray-600">Foto {index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ... restante do conteúdo ... */}

    </div>
  );
};

export default Vini;
