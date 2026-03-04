"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        localStorage.setItem(STORAGE_KEY(projectId), String(value));
        Toast({ icon: "success", message: "شكراً لتقييمك" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-4" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;

        return interactive ? (
          <motion.button
            key={star}
            type="button"
            aria-label="زر التقييم"
            disabled={isLoading || !mounted}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="transition disabled:opacity-40">
            <Star
              className="w-9 h-9"
              style={{
                fill: active ? "#C8553D" : "transparent",
                color: active ? "#C8553D" : "#111111",
              }}
              strokeWidth={2}
            />
          </motion.button>
        ) : (
          <Star
            key={star}
            className="w-9 h-9"
            style={{
              fill: active ? "#C8553D" : "transparent",
              color: active ? "#C8553D" : "#111111",
            }}
            strokeWidth={2}
          />
        );
      })}
    </div>
  );

  return (
    <section id="rating" dir="rtl" className="py-28 bg-[#E6E4DF]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block border border-black px-6 py-2 text-sm font-bold uppercase bg-white">
            التقييمات
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111111]">
            قيّم تجربتك
          </h2>

          <p className="mt-6 text-[#4A4A4A] max-w-xl mx-auto">
            رأيك يساعدنا على تقديم تجربة ضيافة أفضل دائماً.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="border border-black bg-white p-14">
          {/* Stats */}
          {(averageRating > 0 || totalRatings > 0) && (
            <div className="flex justify-center gap-20 mb-16 text-center">
              {averageRating > 0 && (
                <div>
                  <div className="text-7xl font-extrabold text-[#111111]">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-2">
                    متوسط التقييم
                  </div>
                </div>
              )}

              {totalRatings > 0 && (
                <div>
                  <div className="text-7xl font-extrabold text-[#111111]">
                    {totalRatings}
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-2">
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interaction */}
          <div className="flex flex-col items-center gap-8">
            {submitted !== null && mounted ? (
              <>
                {renderStars(submitted, false)}

                <div className="border border-black px-10 py-4 text-sm font-bold uppercase">
                  تم إرسال تقييمك
                </div>
              </>
            ) : (
              <>
                {renderStars(displayRating, true)}

                <div className="text-sm uppercase tracking-wide">
                  {!isLoading && mounted && "اضغط على النجوم"}
                  {isLoading && "جاري الإرسال..."}
                </div>
              </>
            )}
          </div>

          {/* Accent line */}
          <div className="mt-14 h-2 bg-[#C8553D]" />
        </motion.div>
      </div>
    </section>
  );
}
