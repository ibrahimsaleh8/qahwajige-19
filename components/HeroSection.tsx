import Image from "next/image";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";
import ShowKeywords from "./ShowKeywords";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
  keywords,
}: HeroSectionData & {
  image: string;
  keywords: string[];
}) {
  return (
    <section id="home" className="relative bg-[#E6E4DF] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          {/* IMAGE — shows on all screens */}
          <div className="relative h-[45vh] sm:h-[50vh] lg:h-auto lg:min-h-[75vh] order-1 lg:order-2 overflow-hidden">
            <Image
              src={image}
              alt={headline ?? "صورة الضيافة"}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />

            <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-[#111111] text-white px-4 py-3 text-center">
              <p className="text-2xl font-black text-[#C8553D]">١٠٠٪</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1">
                سعودية
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-white border-r-0 lg:border-r-8 border-[#C8553D] p-6 sm:p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C8553D] mb-5">
              ضيافة عربية بطابع ملكي
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase text-[#111111] mb-6">
              {headline?.split(" ").map((word, i) =>
                i === 0 ? (
                  <span key={i} className="text-[#C8553D]">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </h1>

            <div className="w-12 lg:w-16 h-1 bg-[#111111] mb-6" />

            <p className="text-sm sm:text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-xl mb-8">
              {subheadline}
            </p>

            <HeroLinks whatsApp={whatsApp} />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E0E0E0] border border-[#E0E0E0] mt-10">
              <Stat label="عميل سعيد" value="+500" />
              <Stat label="مناسبات ناجحة" value="+120" />
              <Stat label="قهوجيين محترفين" value="+40" />
              <Stat label="سنوات خبرة" value="+10" />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <ShowKeywords items={keywords} />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white px-3 sm:px-4 py-4 sm:py-5 text-center">
      <p className="text-xl sm:text-2xl font-black text-[#111111]">{value}</p>
      <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]">
        {label}
      </p>
    </div>
  );
}
