"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SocialMediaLinks } from "@/lib/responseType";

type Props = {
  whatsapp: string;
  telephone: string;
  socialMedia: SocialMediaLinks | null;
};

export default function FloatedIcons({
  whatsapp,
  telephone,
  socialMedia,
}: Props) {
  const links = [
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      href: `https://wa.me/${
        whatsapp.includes("+") ? whatsapp.replace(/\+/g, "") : whatsapp
      }?text=`,
      label: "واتساب",
      color: "#25D366",
      shadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
    },
    {
      name: "telephone",
      icon: FaPhone,
      href: `tel:${telephone}`,
      label: "اتصال",
      color: "#0752ed",
      shadow: "0 8px 24px rgba(7, 82, 237, 0.3)",
    },
    ...(socialMedia?.facebook
      ? [
          {
            name: "facebook",
            icon: FaFacebookF,
            href: socialMedia.facebook,
            label: "Facebook",
            color: "#1877F2",
            shadow: "0 8px 24px rgba(24, 119, 242, 0.3)",
          },
        ]
      : []),
    ...(socialMedia?.instagram
      ? [
          {
            name: "instagram",
            icon: FaInstagram,
            href: socialMedia.instagram,
            label: "Instagram",
            color: "#E4405F",
            shadow: "0 8px 24px rgba(228, 64, 95, 0.3)",
          },
        ]
      : []),
    ...(socialMedia?.tiktok
      ? [
          {
            name: "tiktok",
            icon: FaTiktok,
            href: socialMedia.tiktok,
            label: "TikTok",
            color: "#000000",
            shadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          },
        ]
      : []),
    ...(socialMedia?.twitter
      ? [
          {
            name: "twitter",
            icon: FaXTwitter,
            href: socialMedia.twitter,
            label: "X",
            color: "#000000",
            shadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          },
        ]
      : []),
    ...(socialMedia?.youtube
      ? [
          {
            name: "youtube",
            icon: FaYoutube,
            href: socialMedia.youtube,
            label: "YouTube",
            color: "#FF0000",
            shadow: "0 8px 24px rgba(255, 0, 0, 0.3)",
          },
        ]
      : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed left-6 bottom-8 z-50 flex flex-col gap-3">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex size-13 items-center justify-center rounded-full shadow-lg transition-all duration-300"
            style={{
              backgroundColor: link.color,
              color: "white",
              boxShadow: link.shadow,
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}>
            <Icon className="size-7" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
