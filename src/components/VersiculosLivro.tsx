import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Você pode substituir por outros ícones se quiser

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
    <section className="mt-12 px-6">
      <div className="bg-[#A1866F] rounded-2xl shadow-lg max-w-2xl mx-auto p-8 text-white text-center space-y-6 border border-[#8b6e58] font-playfair transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold tracking-wide">Versículo do Amor</h2>

        <div className="text-lg font-light italic min-h-[100px] flex items-center justify-center">
          <p>{atual.texto}</p>
        </div>

        <div className="text-sm font-semibold">{atual.referencia}</div>

        <div className="flex justify-center items-center space-x-6 mt-4">
          <button
            onClick={anterior}
            className="bg-white text-[#A1866F] rounded-full p-2 hover:bg-[#f2e7de] transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={proximo}
            className="bg-white text-[#A1866F] rounded-full p-2 hover:bg-[#f2e7de] transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VersiculosLivro;
