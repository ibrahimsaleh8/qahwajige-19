import { ServicesSectionData } from "@/lib/responseType";

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section id="services" dir="rtl" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sticky Title Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#C8553D] mb-6">
                {label}
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8">
                {title}
              </h2>

              <div className="w-24 h-1 bg-[#C8553D] mb-8" />

              <p className="text-[#4A4A4A] leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-8 space-y-16">
            {items?.map((card, index) => (
              <div
                key={card.title}
                className="group relative border-b-2 border-black pb-12 transition-colors duration-300 hover:bg-[#E6E4DF]">
                {/* Huge Number */}
                <span className="absolute -right-8 top-0 text-[120px] font-extrabold text-[#C8553D]/10 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-[#4A4A4A] leading-relaxed text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
