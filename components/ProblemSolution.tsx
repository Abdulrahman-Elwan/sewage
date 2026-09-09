import Image from "next/image";
import Link from "next/link";

import aboutImage from "../assets/2.png";
import Reveal from "./_UI/AboutReveal";

const benefits = [
  "تسليك وإزالة انسدادات الصرف",
  "تنظيف خطوط وشبكات الصرف الصحي",
  "شفط الرواسب والدهون والبيارات",
  "حلول للمنازل والمطاعم والمنشآت",
];

export default function ProblemSolution() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-green/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* ================= TEXT ================= */}
        <Reveal className="about-content text-center lg:text-right">

          {/* Heading */}
          <h2
            id="about-title"
            className="text-3xl font-extrabold leading-[1.35] tracking-tight text-navy sm:text-4xl lg:text-[44px]"
          >
            لا تنتظر انسداد الصرف
            <br />

            <span className="text-green">
              حتى تتحول المشكلة إلى ضرر أكبر
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
            نقدم خدمات احترافية في{" "}
            <strong className="font-bold text-navy">
              تسليك المجاري وتنظيف الصرف الصحي
            </strong>
            ، مع إزالة الانسدادات والرواسب والدهون وشفط البيارات، لمساعدتك
            على استعادة تدفق المياه والتخلص من مشاكل الصرف المتكررة.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
            نعتمد على معدات متخصصة وأساليب فعالة للتعامل مع مشاكل الصرف في
            المنازل والمطاعم والمنشآت، مع التركيز على سرعة الاستجابة وجودة
            التنفيذ وتقليل فرص تكرار الانسداد.
          </p>

          {/* Benefits */}
          <ul
            aria-label="أهم خدمات الصرف الصحي"
            className="mt-7 grid grid-cols-1 gap-3 text-right sm:grid-cols-2"
          >
            {benefits.map((item, index) => (
              <li
                key={item}
                className="about-benefit rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3"
                style={
                  {
                    "--delay": `${0.15 + index * 0.08}s`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green/10 text-green"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.415-1.42l2.543 2.544 6.543-6.544a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-semibold text-navy sm:text-[15px]">
                    {item}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#services"
            className="about-cta focus-ring group mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(10,57,77,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(10,57,77,0.2)] active:translate-y-0 lg:mx-0"
          >
            تعرف على خدماتنا

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L4.414 8H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 01-1.414 1.414H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Reveal>

        {/* ================= IMAGE ================= */}

        <Reveal
          className="about-image relative"
          threshold={0.2}
        >

          {/* Image */}
          <div className="group relative rounded-[2rem] overflow-hidden border-[8px] border-white bg-slate-100 shadow-[0_25px_70px_rgba(10,57,77,0.14)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={aboutImage}
                alt="خدمات تسليك وتنظيف الصرف الصحي وإزالة انسدادات المجاري"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}