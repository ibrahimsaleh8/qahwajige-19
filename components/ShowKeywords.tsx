"use client";

import clsx from "clsx";

type MarqueeProps = {
  items: string[];
  speed?: number; // seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
};

export default function ShowKeywords({
  items,
  speed = 25,
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-[#111111] text-white py-3 sm:py-4",
        className,
      )}>
      {/* Gradient Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-[#111111] to-transparent z-10" />

      {/* Gradient Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-[#111111] to-transparent z-10" />

      <div
        className={clsx(
          "flex w-max whitespace-nowrap",
          pauseOnHover && "hover:paused",
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
        }}>
        {/* Duplicate content for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 sm:mx-12 font-bold text-sm sm:text-lg">
            <span className="text-[#C8553D] mr-3">✦</span>
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
