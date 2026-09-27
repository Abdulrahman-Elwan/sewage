"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { number } from "@/data/info";

export default function FloatingActions() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* =========================
          Floating Contact Actions
      ========================== */}
            <div className="fixed bottom-5 right-4 z-50 flex flex-col items-start gap-3 sm:right-6 sm:bottom-6">
                {/* =========================
            Call Now
        ========================== */}
                <motion.a
                    href={`tel:+${number}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    aria-label="اتصل الآن"
                    className="
            group
            flex
            h-14
            items-center
            gap-3
            rounded-full
            bg-orange
            px-4
            text-white
            shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            transition-shadow
            hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-orange
            focus-visible:ring-offset-2
            sm:h-16
            sm:px-5
          "
                >
                    {/* Icon */}
                    <span
                        className="
              relative
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              bg-white/15
              sm:h-11
              sm:w-11
            "
                    >
                        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
                        <Phone className="relative h-5 w-5 sm:h-5 sm:w-5" />
                    </span>

                    {/* Text */}
                    <span className="flex flex-col items-start leading-tight">
                        <span className="text-sm font-extrabold sm:text-base">
                            اتصل الآن
                        </span>
                    </span>
                </motion.a>

                {/* =========================
            WhatsApp
        ========================== */}
                <motion.a
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    aria-label="تواصل معنا عبر واتساب"
                    className="
            group
            flex
            h-14
            items-center
            gap-3
            rounded-full
            bg-green
            px-4
            text-white
            shadow-[0_8px_30px_rgba(0,0,0,0.16)]
            transition-shadow
            hover:shadow-[0_10px_35px_rgba(0,0,0,0.23)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-green
            focus-visible:ring-offset-2
            sm:h-16
            sm:px-5
          "
                >
                    {/* Icon */}
                    <span
                        className="
              relative
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              bg-white/15
              sm:h-11
              sm:w-11
            "
                    >
                        <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>

                    {/* Text */}
                    <span className="flex flex-col items-start leading-tight">
                        <span className="text-sm font-extrabold sm:text-base">
                            تواصل عبر واتساب
                        </span>
                    </span>
                </motion.a>

                {/* =========================
            Back To Top
        ========================== */}
                <AnimatePresence>
                    {showTop && (
                        <motion.button
                            initial={{
                                opacity: 0,
                                y: 10,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 10,
                                scale: 0.8,
                            }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            aria-label="العودة إلى الأعلى"
                            className="
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                bg-white
                text-navy
                shadow-[0_6px_25px_rgba(7,59,92,0.16)]
                transition-colors
                hover:bg-navy
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-navy
                focus-visible:ring-offset-2
                sm:h-12
                sm:w-12
              "
                        >
                            <ArrowUp className="h-5 w-5" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
