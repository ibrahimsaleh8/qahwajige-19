"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      {whatsApp && (
        <motion.a
          href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-sm bg-[#111111] text-white px-8 py-4 font-bold md:text-base uppercase tracking-wide border-2 border-[#111111] transition-all duration-200 hover:bg-[#C8553D] hover:border-[#C8553D]"
          whileTap={{ scale: 0.98 }}>
          <FaWhatsapp className="w-5 h-5" />
          احجز قهوجي لمناسبتك
        </motion.a>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
        <Link
          href="#packages"
          className="flex items-center gap-3 border-2 border-[#111111] text-[#111111] px-8 py-4 font-bold md:text-base text-sm uppercase tracking-wide transition-all duration-200 hover:bg-[#111111] hover:text-white active:scale-[0.98]">
          شاهد الباقات
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
