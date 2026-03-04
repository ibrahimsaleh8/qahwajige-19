import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجى وصباب",
    short_name: "قهوجى وصباب",
    description:
      "خدمة قهوجى وصباب للمناسبات والأفراح والفعاليات مع تقديم القهوة العربية والضيافة الراقية بأسلوب احترافي وتنظيم متكامل.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#e6e4df",
    theme_color: "#a03e2a",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
