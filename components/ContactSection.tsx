"use client";

import { FooterData } from "@/lib/responseType";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");

  return (
    <section id="contact" dir="rtl" className="py-32 bg-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase mb-6">
            تواصل معنا
          </h2>
          <div className="w-32 h-1 bg-[#C8553D]" />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* CONTACT BLOCK */}
          <div className="bg-white border border-black p-12 flex flex-col justify-between">
            <div className="space-y-12">
              {/* PHONE */}
              {phone && (
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-[#C8553D]">
                      01
                    </span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">رقم الهاتف</h3>
                      <a
                        href={`tel:${phone}`}
                        dir="ltr"
                        className="text-black hover:text-[#C8553D] transition">
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* WHATSAPP */}
              {whatsapp && (
                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-[#C8553D]">
                      02
                    </span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">واتساب</h3>
                      <a
                        href={`https://wa.me/${formattedWhatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="text-black hover:text-[#C8553D] transition">
                        {whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* EMAIL */}
              {email && (
                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-[#C8553D]">
                      03
                    </span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        البريد الإلكتروني
                      </h3>
                      <a
                        href={`mailto:${email}`}
                        className="text-black hover:text-[#C8553D] transition break-all">
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ADDRESS */}
              {address && (
                <div>
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-[#C8553D]">
                      04
                    </span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">الموقع</h3>
                      <p className="text-gray-700">{address}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA BUTTON */}
            {whatsapp && (
              <div className="mt-16">
                <a
                  href={`https://wa.me/${formattedWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border-2 border-black px-10 py-4 font-bold uppercase hover:bg-[#C8553D] hover:border-[#C8553D] hover:text-white transition">
                  ابدأ المحادثة الآن
                </a>
              </div>
            )}
          </div>

          {/* MAP BLOCK */}
          <div className="border border-black min-h-125 relative">
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة على الخريطة"
              className="absolute inset-0 w-full h-full border-0 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
