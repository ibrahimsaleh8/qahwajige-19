"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;
  telephone: string;
}) {
  const links = [
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      href: `https://wa.me/${whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp}?text=`,
      label: "واتساب",
    },
    {
      name: "telephone",
      icon: FaPhone,
      href: `tel:${telephone}`,
      label: "اتصال",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed z-50 left-6 bottom-8 flex flex-col gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        const isWhatsapp = link.name === "whatsapp";
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex items-center justify-center size-18 rounded-full shadow-lg transition-all duration-300"
            style={{
              backgroundColor: isWhatsapp ? "#25D366" : "#0752ed",
              color: "white",
              boxShadow: isWhatsapp
                ? "0 8px 24px rgba(37, 211, 102, 0.4)"
                : "0 8px 24px rgba(44, 24, 16, 0.25)",
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}>
            <Icon className="size-10" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
