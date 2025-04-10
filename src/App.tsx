import { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shuffle } from "@/lib/utils";

function App() {
  const [since, setSince] = useState({
    days: 0,
    weeks: 0,
    months: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [moonImage, setMoonImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    // Auto-scroll every 7 seconds
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const startDate = new Date("2024-04-11T00:00:00");

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(diff / (1000 * 60));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30.44);

      setSince({ days, weeks, months, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMoonImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setMoonImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const photos = shuffle([
    "couple",
    "love",
    "romance",
    "date",
    "sunset",
    "beach",
    "happiness",
    "https://ibb.co/d0JrfZGT"
  ]);

  const timeUnits = [
    { label: "Meses", value: since.months },
    { label: "Semanas", value: since.weeks },
    { label: "Dias", value: since.days },
    { label: "Horas", value: since.hours },
    { label: "Minutos", value: since.minutes },
    { label: "Segundos", value: since.seconds },
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-4 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Vini 💙</h1>

      <div className="max-w-4xl mx-auto mb-6 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {photos.map((photo, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Card className="mx-4 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={photo.startsWith('http') ? photo : `https://source.unsplash.com/random/800x600?${photo}`}
                      alt={`Foto ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-orange-500 w-4" : "bg-gray-300"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <p className="max-w-2xl mx-auto text-lg mb-8">
        Nosso amor começou como uma surpresa bonita, crescendo a cada dia com carinho,
        parceria e muitas risadas. Desde 11 de abril de 2024, estamos construindo
        algo único e cheio de afeto. 💕
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-400 mb-6">Estamos juntos há:</h2>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 h-40 flex flex-col items-center justify-center">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className="text-5xl font-bold text-orange-500 mb-3">
                    {unit.value}
                  </div>
                  <div className="text-lg text-gray-600">{unit.label}</div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Imagem da lua no dia do pedido 💫</h2>
        <Input type="file" accept="image/*" onChange={handleMoonImage} />
        {moonImage && (
          <>
            <img
              src={moonImage}
              alt="Lua do dia do pedido"
              className="mt-4 mx-auto rounded-2xl max-w-xs"
            />
            <div className="mt-4 max-w-2xl mx-auto text-left bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Fase da Lua: 11 de abril de 2024</h3>
              <p className="text-gray-700 leading-relaxed">
                Neste dia, a Lua estava na fase Crescente. É melhor visualizada no oeste, após o pôr do sol, 
                quando o sol já se pôs no horizonte. Essa é a primeira fase após a Lua Nova e é um ótimo 
                momento para observar os detalhes da superfície lunar. A Lua está próxima do Sol no céu e 
                permanece em grande parte escura, exceto pela borda direita, que vai ficando mais iluminada 
                à medida que os dias avançam para a próxima fase, que é o Quarto Crescente, com 50% de iluminação.
              </p>
            </div>
          </>
        )}
      </div>

      <motion.div
        className="text-2xl font-bold text-orange-600 mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Feliz 1 ano, minha neneca, eu e você e você e eu, sempre! 💖
      </motion.div>
    </div>
  );
}

export default App;