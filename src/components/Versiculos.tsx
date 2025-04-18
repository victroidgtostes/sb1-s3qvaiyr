// src/components/Versiculos.tsx
import React from "react";

const Versiculos = () => {
  return (
    <div className="mt-10 px-6">
      <div className="bg-[#A1866F] rounded-2xl shadow-lg max-w-3xl mx-auto p-8 text-white text-center space-y-6 border border-[#8b6e58]">
        <h2 className="text-2xl font-bold tracking-wide">Versículos que nos Inspiram</h2>

        <div className="space-y-4 text-lg font-light">
          <p className="italic">
            “O amor tudo sofre, tudo crê, tudo espera, tudo suporta.”
            <br />
            <span className="font-semibold">— 1 Coríntios 13:7</span>
          </p>

          <p className="italic">
            “Em Deus confio e não temerei.”
            <br />
            <span className="font-semibold">— Salmos 56:11</span>
          </p>

          <p className="italic">
            “Dou graças ao meu Deus todas as vezes que me lembro de vocês.”
            <br />
            <span className="font-semibold">— Filipenses 1:3</span>
          </p>

          <p className="italic">
            “Portanto, o que Deus uniu, ninguém separe.”
            <br />
            <span className="font-semibold">— Marcos 10:9</span>
          </p>

          <p className="italic">
            “Foi por este menino que oramos, e o Senhor atendeu a nossa súplica.”
            <br />
            <span className="font-semibold">— 1 Samuel 1:27</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Versiculos;
