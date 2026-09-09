"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { locatiom, number } from "@/data/info";

type FormState = {
  name: string;
  phone: string;
  serviceType: string;
  city: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  serviceType: "",
  city: "",
  message: "",
};

const serviceOptions = [
  "تسليك خطوط الصرف",
  "تنظيف شبكات الصرف",
  "إزالة الروائح الكريهة",
  "شفط الدهون والرواسب",
  "شفط البيارات",
  "تنظيف بيارات المنازل",
  "عقود الشركات والمصانع والمطاعم",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "الرجاء إدخال الاسم";
    if (!/^0?5\d{8}$/.test(form.phone.replace(/\s|-/g, "")))
      next.phone = "رقم جوال سعودي غير صحيح";
    if (!form.serviceType) next.serviceType = "الرجاء اختيار نوع الخدمة";
    if (!form.city.trim()) next.city = "الرجاء إدخال المدينة";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    // NOTE: no backend endpoint exists yet — wire this up to your API/CRM.
    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1800&auto=format&fit=crop"
        alt="سيارة شفط صرف صحي أثناء العمل"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 gap-6 lg:grid-cols-5"
        >
          {/* Info card */}
          <motion.div
            variants={fadeUp}
            className="rounded-4xl bg-white p-8 shadow-soft lg:col-span-2"
          >
            <h3 className="text-2xl font-extrabold text-navy">تواصل معنا</h3>
            <p className="mt-2 text-muted">
              نحن هنا لخدمتك على مدار الساعة
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-green-light text-green">
                  <Phone className="h-5 w-5" />
                </span>
                <a href={`tel:+${number}`} dir="ltr" className="focus-ring rounded text-navy/90 hover:text-green">
                  +{number}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-green-light text-green">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <a
                  href={`https://wa.me/${number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="focus-ring rounded text-navy/90 hover:text-green"
                >
                  +{number}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-green-light text-green">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-navy/90">{locatiom}</span>
              </li>
            </ul>
          </motion.div>

          {/* Google Maps card */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-4xl bg-white shadow-soft lg:col-span-3"
          >

            <div className="px-4 py-4 sm:px-6 sm:pb-6">
              <div className="relative h-[350px] w-full overflow-hidden rounded-3xl sm:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58017.90162013669!2d46.856456!3d24.65403705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa80938a44ddf%3A0xc6df1d7882486c4a!2z2KfZhNiz2YTZitiMINin2YTYsdmK2KfYtiDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2seg!4v1788882541891!5m2!1sar!2seg"
                  title="موقعنا على الخريطة"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `focus-ring w-full rounded-xl border bg-navy-50 px-4 py-3 text-[15px] text-navy outline-none transition-colors ${hasError ? "border-orange" : "border-transparent focus:border-green"
    }`;
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium text-navy/80 ${className}`}>
      {label}
      {children}
      {error && <span className="text-xs font-semibold text-orange">{error}</span>}
    </label>
  );
}
