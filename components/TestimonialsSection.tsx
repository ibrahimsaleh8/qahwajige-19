"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "تنظيم احترافي من أول اتصال حتى نهاية المناسبة. الفريق كان حاضر في الوقت، والمظهر مرتب جداً.",
    author: "خالد القحطاني",
    role: "مناسبة خاصة",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "الضيافة كانت على مستوى راقٍ جداً. الضيوف أثنوا على جودة القهوة وحسن الاستقبال.",
    author: "نورة السبيعي",
    role: "حفل استقبال رسمي",
    stars: 5,
    featured: true,
  },
  {
    quote:
      "نتعامل معهم في كل فعالياتنا الرسمية. التزام، هدوء، وتنفيذ بدون أي ملاحظات.",
    author: "شركة مدى للتطوير",
    role: "فعالية شركات",
    stars: 5,
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" dir="rtl" className="py-28 bg-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block border border-black px-6 py-2 text-sm font-bold uppercase bg-white mb-8">
            آراء العملاء
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111111] mb-6">
            تجارب حقيقية
          </h2>

          <p className="text-[#4A4A4A] max-w-xl mx-auto">
            ثقة مستمرة من عملائنا في مختلف المناسبات الخاصة والرسمية.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => {
            const isFeatured = item.featured;

            return (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border border-black p-12 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-[#111111] text-white"
                    : "bg-white text-[#111111]"
                }`}>
                {/* Big Quote Mark */}
                <div className="text-8xl font-extrabold leading-none mb-6 text-[#C8553D]">
                  ”
                </div>

                {/* Text */}
                <p
                  className={`leading-relaxed mb-12 text-base ${
                    isFeatured ? "text-white/85" : "text-[#4A4A4A]"
                  }`}>
                  {item.quote}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill="#C8553D"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-black mb-6" />

                {/* Author */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide">
                      {item.author}
                    </p>
                    <p className="text-xs mt-1 opacity-70">{item.role}</p>
                  </div>

                  {isFeatured && (
                    <span className="text-xs font-bold uppercase border border-white px-4 py-1">
                      الأعلى تقييماً
                    </span>
                  )}
                </div>

                {/* Accent line */}
                <div className="mt-10 h-2 bg-[#C8553D]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
