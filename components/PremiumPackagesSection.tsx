"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section id="packages" dir="rtl" className="py-10 pb-0 bg-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block border border-black px-6 py-2 text-sm font-bold uppercase bg-white">
            باقاتنا
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111111]">
            اختر الباقة المناسبة
          </h2>

          <p className="mt-6 text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            باقات مصممة بعناية لتقديم تجربة ضيافة سعودية فاخرة تليق بضيوفك.
          </p>
        </div>

        {/* Packages */}
        <div className="space-y-20">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;

            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );

            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`border border-black ${
                  isFeatured
                    ? "bg-[#111111] text-white"
                    : "bg-white text-[#111111]"
                }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  {pkg.image && (
                    <div className="relative h-80 lg:h-full min-h-105">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      {isFeatured && (
                        <span className="inline-block mb-6 border border-white px-4 py-1 text-xs font-bold uppercase">
                          الأكثر طلباً
                        </span>
                      )}

                      <h3 className="text-3xl md:text-4xl font-extrabold mb-10">
                        {pkg.title}
                      </h3>

                      <ul className="space-y-4 mb-12">
                        {pkg.features?.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-base">
                            <Check
                              className={`mt-1 size-4 ${
                                isFeatured ? "text-[#C8553D]" : "text-[#C8553D]"
                              }`}
                              strokeWidth={2.5}
                            />
                            <span
                              className={
                                isFeatured ? "text-white/80" : "text-[#4A4A4A]"
                              }>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 py-4 text-sm font-bold uppercase border-2 transition-all duration-200 ${
                        isFeatured
                          ? "bg-white text-[#111111] border-white hover:bg-[#C8553D] hover:text-white hover:border-[#C8553D]"
                          : "bg-[#111111] text-white border-[#111111] hover:bg-[#C8553D] hover:border-[#C8553D]"
                      }`}>
                      <FaWhatsapp className="size-4" />
                      اطلب الباقة الآن
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-2 bg-[#C8553D]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
