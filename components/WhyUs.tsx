import {
  ShieldCheck,
  Clock3,
  Wrench,
  Headphones,
} from "lucide-react";
import {WhyUsReveal,WhyUsStagger,WhyUsItem} from './_UI/WhyUsReveal'

const whyUsFeatures = [
  {
    id: "experience",
    icon: ShieldCheck,
    title: "خبرة واحترافية",
    description:
      "فريق متخصص يقدم حلولًا احترافية للتعامل مع مختلف مشاكل الصرف الصحي بكفاءة.",
  },
  {
    id: "response",
    icon: Clock3,
    title: "سرعة الاستجابة",
    description:
      "نستجيب لطلباتكم بسرعة ونوفر حلولًا عملية للحالات الطارئة والمشكلات المستعجلة.",
  },
  {
    id: "equipment",
    icon: Wrench,
    title: "معدات حديثة",
    description:
      "نعتمد على معدات وأدوات متخصصة تساعد على إنجاز أعمال التسليك والتنظيف بدقة.",
  },
  {
    id: "service",
    icon: Headphones,
    title: "خدمة موثوقة",
    description:
      "نحرص على تقديم خدمة منظمة وموثوقة مع الاهتمام باحتياجات العميل من البداية حتى النهاية.",
  },
];

export default function WhyUs() {
  return (
    <section id="whyUs" className="relative overflow-hidden py-10 lg:py-15">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <WhyUsReveal
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="px-7 py-9 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

              {/* Content */}
              <div className="max-w-xl text-right lg:flex-1">
                <span className="text-lg font-bold tracking-[0.15em] text-orange-500">
                  لماذا نحن؟
                </span>

                <div className="mt-4">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-800 md:text-3xl">
                    خبرة واحترافية في حلول الصرف الصحي
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
                    نوفر حلولًا متخصصة في تسليك وتنظيف وصيانة شبكات الصرف
                    الصحي، مع الاعتماد على فريق متخصص ومعدات مناسبة لضمان
                    تنفيذ العمل بكفاءة وسرعة، والتعامل مع مختلف مشكلات الصرف
                    باحترافية.
                  </p>
                </div>
              </div>

              {/* Features */}
              <WhyUsStagger
                className="grid w-full shrink-0 grid-cols-2 lg:w-[460px]"
              >
                {whyUsFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <WhyUsItem
                      key={feature.id}
                      className={`
                        flex min-h-[165px] flex-col items-center justify-center
                        border-slate-200 px-5 py-7 text-center
                        ${index < 2 ? "border-b" : ""}
                        ${index % 2 === 0 ? "border-l" : ""}
                      `}
                    >
                      <div className="flex h-11 w-11 items-center justify-center text-orange-500">
                        <Icon
                          size={26}
                          strokeWidth={1.8}
                        />
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-slate-800 md:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-[190px] text-xs leading-5 text-slate-400">
                        {feature.description}
                      </p>
                    </WhyUsItem>
                  );
                })}
              </WhyUsStagger>

            </div>
          </div>
        </WhyUsReveal>
      </div>
    </section>
  );
}
