"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import imageLogo from '../assets/logo.png';
import {number} from '../data/info'
const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "أعمالنا" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#testimonials", label: "آراء عملائنا" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "h-[64px] border-navy/10 bg-white/85 shadow-soft backdrop-blur-md"
          : "h-[78px] border-transparent bg-white"
        }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="/" className="flex items-center gap-2 focus-ring rounded-lg">
          <Image src={imageLogo} className="w-36" alt="تسليك مجاري الصرف الصحي" height={200} width={400} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md text-[17px] font-bold text-navy/80 transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`tel:+${number}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            اتصل الآن
          </a>
        </div>

        <button
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-lg text-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="focus-ring rounded-lg px-2 py-3 text-[17px] font-bold text-navy/85 hover:bg-navy/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={`tel:+${number}`}
                className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                اتصل الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
