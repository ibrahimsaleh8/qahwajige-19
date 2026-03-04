"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/qahwajeyn",
      label: "انستقرام",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@user61719922769991",
      label: "تيك توك",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      label: "فيسبوك",
    },
    { icon: FaTwitter, href: "https://x.com/NghmAbw11703", label: "تويتر" },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      label: "يوتيوب",
    },
  ];

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
    { name: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <footer dir="rtl" className="bg-[#1a1a1a] text-white">
      {/* CTA SECTION */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            جاهز لرفع مستوى ضيافتك؟
          </h2>

          {description && (
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              {description}
            </p>
          )}

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="px-10 py-4 bg-white text-black font-bold uppercase border-2 border-white hover:bg-[#C8553D] hover:border-[#C8553D] hover:text-white transition">
              احجز الآن
            </Link>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="px-10 py-4 border-2 border-white font-bold uppercase hover:bg-white hover:text-black transition">
                تواصل عبر الهاتف
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight mb-6">
            {brandName}
          </h3>

          {description && (
            <p className="text-white/60 leading-relaxed max-w-sm">
              {description}
            </p>
          )}
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-white/80">
            روابط سريعة
          </h4>
          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-[#C8553D] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-white/80">تواصل معنا</h4>

          <div className="space-y-4 text-white/60">
            {address && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8553D]" />
                <span>{address}</span>
              </div>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-[#C8553D] transition">
                <Mail className="w-4 h-4 text-[#C8553D]" />
                {email}
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 hover:text-[#C8553D] transition">
                <Phone className="w-4 h-4 text-[#C8553D]" />
                {phone}
              </a>
            )}
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white flex items-center justify-center hover:bg-[#C8553D] hover:border-[#C8553D] transition">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 text-center py-8 text-sm text-white/50">
        © {currentYear} {brandName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
