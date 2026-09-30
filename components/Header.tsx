"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "القصة" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#events", label: "المناسبات" },
  { href: "/blog", label: "خدمات الضيافة" },
  { href: "/#packages", label: "باقاتنا" },
  { href: "/#gallery", label: "المعرض" },
];

type HeaderProps = HeaderData & {
  whatsapp: string;
};

export function Header({ brandName, whatsapp }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const waHref = `https://wa.me/${
    whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
  }?text=`;

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-black/10 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20" dir="rtl">
          {/* Logo — wordmark only */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-xl md:text-2xl tracking-[-0.03em] text-[#111111] leading-none">
              {brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-[#111111] transition-colors duration-200 after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0 after:bg-[#C8553D] after:transition-all after:duration-300 hover:after:w-full hover:text-[#C8553D]">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer p-2 text-[#111111]">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* CTA — flat rectangular editorial */}
            <a
              target="_blank"
              href={waHref}
              className="hidden md:flex items-center gap-2 bg-[#111111] text-white px-6 py-3 font-bold text-sm uppercase tracking-wide border-2 border-[#111111] transition-all duration-200 hover:bg-[#C8553D] hover:border-[#C8553D]">
              <span>احجز الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-black/10 bg-[#E6E4DF]">
            <nav
              className="container mx-auto px-6 py-4 flex flex-col"
              dir="rtl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-4 border-b border-black/10 text-[#111111] font-semibold text-sm uppercase tracking-wide hover:text-[#C8553D] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}

              <a
                target="_blank"
                href={waHref}
                className="flex items-center justify-center gap-2 bg-[#111111] text-white py-4 mt-5 font-bold text-sm uppercase tracking-wide border-2 border-[#111111] hover:bg-[#C8553D] hover:border-[#C8553D] transition-all duration-200">
                <span>احجز الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
