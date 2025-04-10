// (código acima permanece o mesmo)

      {/* Contador de tempo juntos */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Estamos juntos há:</h2>
        <p>{since.months} meses</p>
        <p>{since.weeks} semanas</p>
        <p>{since.days} dias</p>
        <p>{since.hours} horas</p>
        <p>{since.minutes} minutos</p>
      </div>

      {/* Imagem da Lua */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-2">Imagem da lua no dia do pedido 💫</h2>
        <img
          src="https://i.imgur.com/m4e2ody.png"
          alt="Lua do dia do pedido"
          className="mt-4 mx-auto rounded-2xl max-w-xs"
        />
        <p className="text-sm text-gray-700 max-w-xs mx-auto mt-4">
          <strong>Fase da Lua: 11 de abril de 2024</strong><br />
          Neste dia, a Lua estava na fase Crescente. É melhor visualizada no oeste, após o pôr do sol, quando o sol já se pôs no horizonte. Essa é a primeira fase após a Lua Nova e é um ótimo momento para observar os detalhes da superfície lunar. A Lua está próxima do Sol no céu e permanece em grande parte escura, exceto pela borda direita, que vai ficando mais iluminada à medida que os dias avançam para a próxima fase, que é o Quarto Crescente, com 50% de iluminação.
        </p>
      </div>

      {/* Botão da música */}
      <div className="mb-6">
        <button
          onClick={() => {
            audio.play();
            setShowMusic(true);
          }}
          className="text-white bg-orange-400 px-4 py-2 rounded-full shadow-lg hover:bg-orange-500"
        >
          🎵 Nossa música
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
            <video
              controls
              src="https://cdn.jmp.sh/video-surpresa.mp4"
              className="mx-auto rounded-2xl w-full max-w-md"
            ></video>
            <div className="text-3xl mt-4 animate-pulse">🎆🌺🍍✨</div>
          </div>
        )}
      </div>

      {/* Carta com voz */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">💌 Uma cartinha com a minha voz</h2>
        <button
          onClick={() => voice.play()}
          className="text-white bg-blue-400 px-4 py-2 rounded-full hover:bg-blue-500"
        >
          ▶️ Ouvir mensagem
        </button>
      </div>

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

      {/* Mensagem final animada */}
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
