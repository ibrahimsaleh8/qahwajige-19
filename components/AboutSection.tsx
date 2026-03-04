import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" dir="rtl" className="bg-[#E6E4DF] py-20 pb-0">
      <div className="container text-center flex flex-col items-center mx-auto px-6">
        {/* HEADER */}
        <div className="mb-24">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-black mb-6">
            {label}
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-black max-w-4xl">
            {title}
          </h2>

          <div className="w-40 h-1 bg-[#C8553D] mt-8 mx-auto" />
        </div>

        {/* DESCRIPTION BLOCK */}
        {description1 && (
          <div className="bg-white border-2 border-black p-12 max-w-4xl mb-32">
            <p className="text-lg md:text-xl leading-relaxed text-[#4A4A4A]">
              {description1}
            </p>
          </div>
        )}
      </div>

      {/* WHY US STRIP */}
      {whyUsDescription && (
        <div className="bg-black text-white py-24 border-y-2 border-black">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-8">
              لماذا نحن؟
            </h3>

            <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              {whyUsDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-16 mt-16">
              <div>
                <span className="text-6xl font-black text-[#C8553D]">٥٠٠+</span>
                <p className="text-sm mt-3 text-white/70">مناسبة ناجحة</p>
              </div>

              <div>
                <span className="text-6xl font-black">١٠٠٪</span>
                <p className="text-sm mt-3 text-white/70">رضا العملاء</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FEATURES POSTER GRID */}
      {features && features.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-32 pb-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-12 flex flex-col justify-between hover:bg-[#FAFAFA] transition">
                <span className="text-6xl font-extrabold text-[#C8553D] leading-none mb-8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4 className="text-xl font-extrabold uppercase tracking-tight mb-4">
                    {item.title}
                  </h4>

                  <div className="w-12 h-1 bg-[#C8553D] mb-6" />

                  <p className="text-[#4A4A4A] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
