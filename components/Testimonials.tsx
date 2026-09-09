"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            آراء عملائنا
          </h2>
          <p className="mt-3 text-lg text-muted">
            رضا عملائنا هو أكبر دليل على جودة خدماتنا
          </p>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-4xl bg-white p-6 shadow-card sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 items-center gap-8 sm:grid-cols-5"
            >
              <div className="relative order-1 h-44 overflow-hidden rounded-3xl sm:order-2 sm:col-span-2 sm:h-56">
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>

              <div className="order-2 sm:order-1 sm:col-span-3">
                <Quote className="h-8 w-8 text-green/40" />
                <p className="mt-3 text-lg leading-loose text-navy/90">
                  {current.quote}
                </p>
                <div className="mt-5 flex items-center gap-1" aria-label={`${current.rating} من 5 نجوم`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < current.rating
                          ? "fill-orange text-orange"
                          : "text-navy/15"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-3 font-bold text-navy">{current.name}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => go(1)}
              aria-label="السابق"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-navy/10 text-navy transition-colors hover:border-green hover:text-green"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`عرض رأي رقم ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-green" : "w-2 bg-navy/15"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(-1)}
              aria-label="التالي"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-navy/10 text-navy transition-colors hover:border-green hover:text-green"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
