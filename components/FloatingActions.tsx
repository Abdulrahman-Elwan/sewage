"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp,  Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { number } from "@/data/info";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop / all-viewport floating stack */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="العودة إلى الأعلى"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-soft"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={`https://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          className="focus-ring relative h-14 w-14 place-items-center rounded-full bg-green text-white shadow-soft hidden lg:grid"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green/50" />
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-navy/10 bg-white shadow-[0_-4px_20px_rgba(7,59,92,0.08)] lg:hidden">
        <a
          href={`tel:+${number}`}
          className="focus-ring flex flex-1 items-center justify-center gap-2 border-l border-navy/10 py-4 text-[15px] font-bold text-navy"
        >
          <Phone className="h-4 w-4 text-orange" />
          اتصل الآن
        </a>
        <a
          href={`https://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-1 items-center justify-center gap-2 bg-green py-4 text-[15px] font-bold text-white"
        >
          <FaWhatsapp className="h-4 w-4" />
          واتساب
        </a>
      </div>
    </>
  );
}
