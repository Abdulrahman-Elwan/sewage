import Image from "next/image";
import { Phone, Sparkles, Wrench, Users, Zap } from "lucide-react";
import { number } from "@/data/info";
import heroImage from "../assets/1. Hero Truck Photo.png";
import { FaWhatsapp } from "react-icons/fa6";
import HeroReveal from "./_UI/HeroReveal"; 
import HeroParallax from "./_UI/HeroParallax";

const indicators = [
  { icon: Wrench, label: "أحدث المعدات" },
  { icon: Users, label: "فريق عمل متخصص" },
  { icon: Zap, label: "خدمة سريعة في جميع المناطق" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white pt-[86px]"
    >
      {/* Soft green glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-green/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Soft orange glow */}
      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-[320px] w-[320px] rounded-full bg-orange/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle water circles */}
      <div
        className="pointer-events-none absolute right-[42%] top-28 hidden h-24 w-24 rounded-full border border-green/10 lg:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[44%] top-36 hidden h-12 w-12 rounded-full border border-navy/10 lg:block"
        aria-hidden="true"
      />

      {/* Main Hero */}
      <div className="mx-auto grid min-h-[calc(100vh-86px)] max-w-[1440px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4 lg:px-10 lg:pb-16 lg:pt-3 xl:px-14">
        {/* IMAGE / TRUCK SIDE */}
        <HeroReveal
          direction="left"
          delay={0}
          className="relative mx-auto flex w-full max-w-[720px] items-center justify-center lg:order-1 lg:max-w-none"
        >
          <HeroParallax className="relative w-full">
            <div className="relative w-full">

              {/* Main Green Shape */}
              <div
                className="absolute -left-2 top-3 h-[92%] w-[94%] rounded-[45%_55%_52%_48%/48%_42%_58%_52%] bg-green opacity-95 lg:-left-6 lg:-top-5"
                aria-hidden="true"
              />

              {/* Navy Inner Border */}
              <div
                className="absolute -left-1 top-0 h-[91%] w-[91%] rounded-[45%_55%_52%_48%/48%_42%_58%_52%] border-[3px] border-navy opacity-80"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="group relative z-10 overflow-hidden rounded-[42%_58%_48%_52%/47%_43%_57%_53%] border-[10px] border-white bg-navy-50 shadow-[0_25px_70px_rgba(10,57,77,0.16)]">
                <div className="relative aspect-[1.08/1] w-full">

                  <Image
                    src={heroImage}
                    alt="سيارة شفط وتسليك الصرف الصحي"
                    fill
                    priority
                    sizes="(max-width: 1024px) 95vw, 55vw"
                    className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />

                  {/* Image Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-white/5"
                    aria-hidden="true"
                  />

                  {/* Green Reflection */}
                  <div
                    className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-green/20 blur-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </HeroParallax>
        </HeroReveal>

        {/* CONTENT SIDE */}
        <div className="relative lg:-top-10 z-10 text-center lg:order-2 lg:pr-4 lg:text-right xl:pr-10">

          {/* Main Heading */}
          <HeroReveal direction="right" delay={0.2}>
            <h1
              id="hero-title"
              className="mt-6 text-[40px] font-black leading-[1.2] tracking-tight text-navy sm:text-5xl lg:text-[54px] xl:text-[62px]"
            >
              عندك انسداد؟
              <br />

              <span className="relative inline-block text-green">
                خلّ الحل علينا

                <span
                  className="absolute -bottom-2 right-0 h-1 w-[62%] rounded-full bg-orange sm:-bottom-3"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </HeroReveal>

          {/* Description */}
          <HeroReveal direction="right" delay={0.3}>
            <p className="mx-auto mt-7 max-w-[560px] text-[16px] leading-[2] text-muted sm:text-lg lg:mx-0">
              لا تضيّع وقتك مع انسداد الصرف والروائح والمشاكل المتكررة.
              نوصلك بسرعة، نحدد المشكلة ونعالجها باحتراف، من{" "}
              <strong className="font-bold text-navy">
                تسليك المجاري وتنظيف خطوط الصرف
              </strong>{" "}
              إلى شفط البيارات والدهون — بخدمة موثوقة للمنازل والمطاعم
              والمنشآت.
            </p>
          </HeroReveal>

          {/* Trust Indicators */}
          <HeroReveal direction="up" delay={0.4}>
            <ul
              aria-label="مميزات خدمة الصرف الصحي"
              className="mx-auto mt-10 hidden max-w-[620px] grid-cols-1 gap-4 lg:grid sm:grid-cols-3 lg:mx-0"
            >
              {indicators.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-navy/5 bg-white px-3 py-3 text-sm font-bold text-navy shadow-[0_8px_25px_rgba(10,57,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-green/15 hover:shadow-[0_12px_30px_rgba(10,57,77,0.08)] lg:justify-start"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green/10 text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </HeroReveal>

          {/* Small Trust Text */}
          <HeroReveal direction="up" delay={0.45}>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-muted lg:hidden lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              معدات متخصصة • فريق محترف • خدمة سريعة
            </div>
          </HeroReveal>

          {/* CTA Buttons */}
          <HeroReveal direction="up" delay={0.55}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

              {/* Primary CTA */}
              <a
                href={`tel:+${number}`}
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(20,166,119,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-green/90 hover:shadow-[0_18px_38px_rgba(20,166,119,0.28)] active:translate-y-0"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

                اطلب الخدمة الآن

                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full border-2 border-green/20 bg-white px-7 py-3.5 text-[15px] font-bold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-green hover:text-green hover:shadow-[0_12px_30px_rgba(20,166,119,0.10)]"
              >
                <FaWhatsapp className="h-4 w-4 text-green transition-transform duration-300 group-hover:scale-110" />

                تواصل عبر واتساب
              </a>

            </div>
          </HeroReveal>

        </div>
      </div>
    </section>
  );
}