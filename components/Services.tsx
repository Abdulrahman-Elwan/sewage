import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import ServiceReveal from "./_UI/ServiceReveal";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-white py-10 lg:py-10"
    >
      {/* Soft Green Glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[360px] w-[360px] rounded-full bg-green/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Soft Orange Glow */}
      <div
        className="pointer-events-none absolute -left-40 bottom-10 h-[320px] w-[320px] rounded-full bg-orange/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <ServiceReveal
          direction="up"
          delay={0}
          className="mx-auto max-w-xl text-center"
        >
          <h2
            id="services-title"
            className="text-3xl font-extrabold leading-[1.35] tracking-tight text-navy sm:text-4xl"
          >
            خدمات الصرف الصحي
            <br />
            حلول متكاملة لمشاكل الصرف
          </h2>

          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            نقدم خدمات متخصصة في تسليك المجاري وتنظيف شبكات الصرف وشفط
            البيارات والدهون، باستخدام معدات مناسبة للتعامل مع مختلف
            مشاكل الصرف في المنازل والمطاعم والمنشآت.
          </p>
        </ServiceReveal>

        {/* =========================================
            SERVICES GRID
        ========================================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceReveal
              key={service.id}
              direction="up"
              delay={0.08 + index * 0.08}
              className="h-full"
            >
              <ServiceCard service={service} />
            </ServiceReveal>
          ))}
        </div>

      </div>
    </section>
  );
}