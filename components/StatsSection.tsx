"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "٥٠٠+", label: "مناسبة نُفذت" },
  { value: "١٠+", label: "سنوات خبرة" },
  { value: "١٠٠٪", label: "رضا العملاء" },
];

export default function StatsSection() {
  return (
    <section dir="rtl" className="py-24 bg-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#111111] text-white border border-black">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative text-center py-16 px-6 border-b md:border-b-0 md:border-l border-white/20 hover:-translate-y-2 transition-all duration-200">
                {/* Big Background Number Accent */}
                <span className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[160px] font-extrabold text-[#C8553D]/10 select-none pointer-events-none">
                  {stat.value}
                </span>

                {/* Foreground Content */}
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-extrabold text-[#C8553D]">
                    {stat.value}
                  </div>

                  <div className="mt-4 text-sm md:text-base uppercase tracking-wide text-white/80">
                    {stat.label}
                  </div>

                  {/* Accent Line */}
                  <div className="mt-6 h-1 w-16 bg-[#C8553D] mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
