import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

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

  const handleMoonImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setMoonImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const gallery: string[] = [
    "/mnt/data/IMG_1624.JPG",
    "/mnt/data/IMG_2307.JPG",
    "/mnt/data/IMG_2514.jpg",
    "/mnt/data/IMG_2982.jpg",
    "/mnt/data/IMG_3781_VSCO.JPG",
    "/mnt/data/IMG_3937.jpg",
    "/mnt/data/fxn 2024-05-30 194746.719.jpg",
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-4 text-center text-gray-800 relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Vini 💙</h1>

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-2xl"
          initial={{ y: "100vh", x: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: i * 1 }}
        >
          💖
        </motion.div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {gallery.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt={`Foto ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      <p className="max-w-2xl mx-auto text-lg mb-8">
        A gente se encontrou como quem se reconhece. No olhar, no toque, no riso leve que escapava
        mesmo sem motivo. Desde 11 de abril de 2024, tudo ficou mais bonito — com cada mensagem,
        cada carinho, cada silêncio confortável. Somos amor, liberdade e parceria. ✨
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Estamos juntos há:</h2>
        <p>{since.months} meses</p>
        <p>{since.weeks} semanas</p>
        <p>{since.days} dias</p>
        <p>{since.hours} horas</p>
        <p>{since.minutes} minutos</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Imagem da lua no dia do pedido 💫</h2>
        <input type="file" accept="image/*" onChange={handleMoonImage} />
        {moonImage && (
          <img
            src={moonImage}
            alt="Lua do dia do pedido"
            className="mt-4 mx-auto rounded-2xl max-w-xs"
          />
        )}
      </div>

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
