import Image from "next/image";
import { Play, Phone } from "lucide-react";

import { workGallery } from "@/data/workGallery";
import GalleryReveal from "./_UI/GalleryReveal";

function isVideo(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-navy-50 py-10 lg:py-15"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <GalleryReveal
          delay={0}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/10 bg-green/5 px-4 py-2 text-sm font-bold text-green">
            <span
              className="h-2 w-2 rounded-full bg-green"
              aria-hidden="true"
            />
            أعمالنا على أرض الواقع
          </div>

          <h2
            id="gallery-title"
            className="text-3xl font-extrabold leading-[1.35] tracking-tight text-navy sm:text-4xl"
          >
            شغل حقيقي من مواقع العمل
          </h2>

          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            شاهد جانبًا من أعمالنا وخدماتنا كما يتم تنفيذها فعليًا في مواقع
            العملاء، باستخدام معدات متخصصة وفريق عمل محترف.
          </p>
        </GalleryReveal>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workGallery.map((src, index) => {
            const video = isVideo(src);

            return (
              <GalleryReveal
                key={src}
                delay={0.08 + index * 0.08}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-card">
                  <div
                    className={`relative ${index === 0
                        ? "aspect-[16/9]"
                        : "aspect-[4/3]"
                      } ${index === 1 ? "h-full" : ""}`}
                  >
                    {video ? (
                      <video
                        src={src}
                        controls
                        preload="metadata"
                        playsInline
                        className={`h-full w-full object-cover ${index === 1 ? "object-contain" : ""
                          }`}
                        aria-label={`فيديو من أعمالنا رقم ${index + 1
                          }`}
                      />
                    ) : (
                      <Image
                        src={src}
                        alt={`صورة من أعمال وخدمات الصرف الصحي - ${index + 1
                          }`}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${index === 1 ? "object-contain" : ""
                          }`}
                      />
                    )}

                    {/* Video Badge */}
                    {video && (
                      <div
                        className="pointer-events-none absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                    )}

                    {/* Overlay */}
                    {!video && (
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </GalleryReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}