"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" dir="rtl" className="py-28 bg-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span className="inline-block border border-black px-6 py-2 text-sm font-bold uppercase bg-white mb-6">
              معرض الأعمال
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111111] mb-4">
              من ذكريات مناسباتنا
            </h2>

            <p className="text-[#4A4A4A] max-w-lg">
              لقطات حية من فعاليات قمنا بخدمتها في الرياض.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-bold uppercase border border-black px-6 py-3 bg-white hover:bg-[#C8553D] hover:text-white hover:border-[#C8553D] transition-all duration-200">
            عرض الكل
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        {gallery.length === 0 ? (
          <div className="border border-black p-20 text-center bg-white">
            <p className="uppercase text-sm">المعرض قيد التحديث</p>
            <div className="mt-10 h-2 bg-[#C8553D]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
            {gallery.slice(0, 8).map((image, index) => {
              const isLarge = index === 0;

              return (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative border border-black overflow-hidden group cursor-pointer ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  }`}>
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#111111]">
                      {image.alt ?? `صورة-${index + 1}`}
                    </p>
                  </div>

                  {/* Accent Hover Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-[#C8553D] transition-opacity duration-200 ${
                      hovered === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
