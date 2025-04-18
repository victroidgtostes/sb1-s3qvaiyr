import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FrasesCarousel.css"; // certifique-se de ter esse arquivo

const frases: string[] = [
  "Eu te amo a cada batida do meu coração",
  "Mescau",
  "Ruivio",
  "Sorteio/Sorvete (brincadeira do TikTok de falar uma letra até formar uma palavra)",
  "Chegou? Tudo certo?",
  "Quantos % você tá hoje?",
  "Mas aqui, me conta, como foi seu dia?",
  "Bom diia, minha princesa",
  "*mensagens impróprias para antes das 00h*",
  "Mor, tá ai?",
  "*conversas na praia*",
  "Que saudades de você",
  "Pega água pra mim? Esse copo tem água?",
  "Qual a boa? O que vamos fazer esse fds?",
  "Mo, eu vou virar tá?",
  "Eu te amo mais",
  "“Coloque anéis de borracha nos encaixes do fundo”",
  "Boa noite, se cuida, bom descanso, fica com Deus e aos cuidados de Nossa Senhora, beijão, te amo *duas figurinhas*",
  "Vai treinar hoje? Já treinou? Treinou o que hoje?",
  "*tapas e beijos*",
  "Anima fazer uma callzinha?",
  "Manda sua localização",
  "Ta arrumando oq ai?",
  "*série de perguntas profundas e aleatórias*",
  "mo?",
  "Enfim",
  "Tinha capotado/dormido, foi mal",
  "To estudando",
  "*horas iguais*",
  "*risadas infinitas e aleatórias*",
  "Você é o meu homem",
  "Você é a minha mulher",
  "Se cuida, viu?",
  "Deita aqui",
  'O que você quer comer? "misto"',
  "*piadas bobas*",
  "*Show da madonna*",
  "*Pop*",
  "Grounded, Minecraft e joguinho do supermercado",
  "Vinhos suaves e restaurantes italianos",
  "Resplendor e 50 tons de cinza",
  "*troca de carinhos e amor*",
  "Você é minha futura esposa",
  "Vou casar com você",
  "Você foi a maior certeza da minha vida",
  "“Eu e você, você e eu, para sempre”"
];

const FrasesCarousel = () => {
  const [typedText, setTypedText] = useState("");
  const [currentFrase, setCurrentFrase] = useState(0);

  useEffect(() => {
    const fraseAtual = frases[currentFrase];
    if (!fraseAtual || typeof fraseAtual !== "string") {
      setTypedText("");
      return;
    }

    let i = 0;
    setTypedText("");

    const typing = setInterval(() => {
      setTypedText((prev) => {
        const nextChar = fraseAtual[i];
        i++;
        if (i > fraseAtual.length) clearInterval(typing);
        return prev + (nextChar || "");
      });
    }, 40);

    return () => clearInterval(typing);
  }, [currentFrase]);

  return (
    <div className="max-w-4xl mx-auto relative p-6 mb-20">
      {/* Emojis flutuantes de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-float opacity-10 text-6xl">
        💬 💞 ✨ 💭 💕 😄 💌 🫶
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={(swiper) => setCurrentFrase(swiper.realIndex)}
        className="rounded-xl z-10 relative"
      >
        {frases.map((frase, index) => (
          <SwiperSlide key={index}>
            <blockquote className="bg-white/40 border border-pink-300 shadow-2xl rounded-3xl p-10 text-center text-2xl font-mono text-pink-800 min-h-[20rem] flex items-center justify-center backdrop-blur-md animate-slide-in transition-all duration-500 ease-in-out">
              {index === currentFrase ? typedText : ""}
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FrasesCarousel;
