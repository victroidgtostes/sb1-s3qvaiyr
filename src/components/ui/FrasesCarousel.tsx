import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FrasesCarousel.css";

const frases = [
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
  "Pega água pra mim? Esse copo tem água",
  "Qual a boa? O que vamos fazer esse fds?",
  "Mo, eu vou virar tá?",
  "Eu te amo mais",
  "“Coloque anéis de borracha nos encaixes do fundo”",
  "Boa noite, se cuida, bom descanso, fica com Deus e aos cuidados de Nossa Senhora, beijão, te amo duas figurinhas",
  "Vai treinar hoje? Já treinou? Treinou o que hoje?",
  "*tapas e beijos*",
  "Anima fazer uma callzinha?",
  "Manda sua localização",
  "Ta arrumando oq ai?",
  "*série de perguntas profundas e aleatórias*",
  "mo?",
  "enfim",
  "tinha capotado/dormido, foi mal",
  "to estudando",
  "horas iguais",
  "*risadas infinitas e aleatórias*",
  "você é o meu homem",
  "você é a minha mulher",
  "se cuida, viu?",
  "deita aqui",
  'o que você quer comer? "misto"',
  "*piadas bobas*",
  "show da madonna",
  "pop",
  "grounded, minecraft e joguinho do supermercado",
  "vinhos suaves e restaurantes italianos",
  "resplendor e 50 tons de cinza",
  "*troca de carinhos e amor*",
  "você é minha futura esposa",
  "vou casar com você",
  "você foi a maior certeza da minha vida",
  "“Eu e você, você e eu, para sempre”"
];

const FrasesCarousel = () => {
  const [typedText, setTypedText] = useState("");
  const [currentFrase, setCurrentFrase] = useState(0);

  useEffect(() => {
    let i = 0;
    setTypedText("");
    const frase = frases[currentFrase];

    const typing = setInterval(() => {
      setTypedText((prev) => prev + frase[i]);
      i++;
      if (i === frase.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, [currentFrase]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-10">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Nossas frases favoritas 💬</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        onSlideChange={(swiper) => setCurrentFrase(swiper.realIndex)}
        className="rounded-xl"
      >
        {frases.map((frase, index) => (
          <SwiperSlide key={index}>
            <blockquote className="text-center text-xl font-mono text-gray-700 typing-effect">
              {index === currentFrase ? typedText : "\u00a0"}
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FrasesCarousel;
