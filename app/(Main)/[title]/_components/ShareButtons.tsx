"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { Link2, Check } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUrl(window.location.href);
    }
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const shareLinks = [
    {
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      label: "مشاركة على واتساب",
      bg: "bg-[#25D366] hover:bg-[#1da851]",
    },
    {
      icon: FaFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "مشاركة على فيسبوك",
      bg: "bg-[#1877f2] hover:bg-[#1464d8]",
    },
    {
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      label: "مشاركة على تويتر",
      bg: "bg-[#1A2617] hover:bg-[#2A3B25]",
    },
    {
      icon: BsTelegram,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      label: "مشاركة على تليجرام",
      bg: "bg-[#0088cc] hover:bg-[#0077b5]",
    },
  ];

  return (
    <div
      className="flex flex-wrap gap-4 items-center justify-start md:justify-start"
      dir="rtl">
      <span className="text-sm font-semibold text-[#5C6E55] whitespace-nowrap">
        شارك المقالة:
      </span>

      {/* Social share icons */}
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            whileHover={{ scale: 1.1 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md ${link.bg}`}>
            <Icon className="w-4 h-4" />
          </motion.a>
        );
      })}

      {/* Copy link button */}
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.03 }}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
          copied
            ? "bg-[#E6EEDB] text-[#2A3B25] border border-[#D1DBC6]"
            : "border-2 border-[#D1DBC6] text-[#5C6E55] hover:bg-[#D1DBC6] hover:text-[#2A3B25]"
        }`}>
        {copied ? (
          <>
            <Check className="w-4 h-4 text-[#2A3B25]" strokeWidth={2.5} />
            تم النسخ
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" strokeWidth={2} />
            نسخ الرابط
          </>
        )}
      </motion.button>
    </div>
  );
}
