"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutImage({ imageUrl }: { imageUrl: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center">
      <div className="relative rounded-2xl shadow-lg">
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={800}
          height={600}
          className="w-full h-200 object-top object-cover"
          priority
        />
        {/* Overlay Card */}
        <div className="absolute right-0 bottom-0 lg:-right-3.75 lg:-bottom-3.75 rounded-md bg-card-background border border-white/10 shadow p-5 text-center font-bold">
          <p className="text-3xl text-main-color">+10</p>
          <p>عاما من الخبرة</p>
        </div>
      </div>
    </motion.div>
  );
}
