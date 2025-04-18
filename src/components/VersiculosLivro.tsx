import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const VersiculosLivro = () => {
  const [index, setIndex] = useState(0);

  const proximo = () => {
    setIndex((prev) => (prev + 1) % versiculos.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + versiculos.length) % versiculos.length);
  };

  const atual = versiculos[index];

  return (
    <div className="relative bg-[#7b5e47] text-[#fdf8f1] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] p-10 min-h-[260px] max-w-3xl mx-auto flex flex-col items-center justify-center font-playfair transition-all duration-300">
      <p className="text-xl italic text-center leading-relaxed max-w-xl">
        {atual.texto}
      </p>
      <span className="mt-4 text-sm font-semibold tracking-wider">
        — {atual.referencia}
      </span>

      {/* Botões de navegação tipo livro */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={anterior}
          className="bg-[#fdf8f1] text-[#7b5e47] p-2 rounded-full shadow hover:bg-[#f1e7db] transition"
        >
          <ChevronLeft size={22} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={proximo}
          className="bg-[#fdf8f1] text-[#7b5e47] p-2 rounded-full shadow hover:bg-[#f1e7db] transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default VersiculosLivro;
