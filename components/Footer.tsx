"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
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
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
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
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 text-center py-8 text-sm text-white/50">
        © {currentYear} {brandName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
