"use client";

import { MessageCircle, CalendarCheck, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    title: "تواصل معنا",
    description:
      "راسلنا عبر واتساب أو الهاتف، واخبرنا بنوع مناسبتك وتاريخها وعدد الضيوف.",
  },
  {
    icon: CalendarCheck,
    title: "احجز الباقة",
    description:
      "نختار معك الباقة المناسبة، نحدد التفاصيل ونؤكد الحجز بدون تعقيد.",
  },
  {
    icon: Coffee,
    title: "استمتع بالضيافة",
    description:
      "نصل في الموعد، نجهز كل شيء ونقدم لضيوفك تجربة قهوة عربية أصيلة.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-24">
          <span className="inline-block border border-white px-6 py-2 text-sm font-bold uppercase">
            كيف نعمل
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight">
            خطوات بسيطة
            <br />
            لتنفيذ مناسبتك
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl text-lg">
            عملية واضحة، احترافية، وسريعة — من أول رسالة حتى انتهاء المناسبة.
          </p>
        </div>

        {/* Steps */}
        <div className="divide-y divide-white/20 border-t border-white/20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:bg-white/5 transition-colors duration-300">
                {/* Huge Step Number */}
                <div className="text-[80px] md:text-[140px] font-extrabold text-[#C8553D] leading-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon Block */}
                <div className="w-20 h-20 bg-white text-[#111111] flex items-center justify-center border border-white">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Accent Bar */}
                <div className="absolute bottom-0 right-0 h-1 w-24 bg-[#C8553D]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
