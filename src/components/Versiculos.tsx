// VersiculosLivro.tsx

import React from "react";

const versiculos = [
  {
    livro: "Salmos",
    versiculo: "23:1",
    texto: "O Senhor é o meu pastor; nada me faltará.",
  },
  {
    livro: "Coríntios",
    versiculo: "13:4-7",
    texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus próprios interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
  },
  {
    livro: "Romanos",
    versiculo: "8:28",
    texto: "Sabemos que em todas as coisas Deus trabalha para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
  },
  {
    livro: "Jeremias",
    versiculo: "29:11",
    texto: "‘Pois sou eu que conheço os planos que tenho para vocês’, declara o Senhor, ‘planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes uma esperança e um futuro.’",
  },
  {
    livro: "Filipenses",
    versiculo: "4:6-7",
    texto: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplica, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",
  },
];

const VersiculosLivro = () => {
  return (
    <div className="space-y-6">
      {versiculos.map((versiculo, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-gray-800">{versiculo.livro} {versiculo.versiculo}</h3>
          <p className="text-lg text-gray-600 mt-2">{versiculo.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default VersiculosLivro;
