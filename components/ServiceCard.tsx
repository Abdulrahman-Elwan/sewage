import {
  Waves,
  Network,
  Wind,
  Droplets,
  Truck,
  Home,
  Building2,
  ArrowLeft,
} from "lucide-react";

import type { Service } from "@/data/services";
import { number } from "@/data/info";
import Link from "next/link";

const iconMap = {
  pipe: Waves,
  network: Network,
  wind: Wind,
  droplets: Droplets,
  truck: Truck,
  home: Home,
  building: Building2,
};

export default function ServiceCard({ service, }: { service: Service; }) {
  const Icon = iconMap[service.icon];
  const message = `محتاج استفسار حول ${service.title}`;
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`استفسار حول ${service.title} عبر واتساب`}
      className="group relative flex h-full flex-col rounded-3xl border-2 border-transparent bg-navy-50 p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green hover:bg-white hover:shadow-[0_18px_45px_rgba(10,57,77,0.10)]"
    >
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-green shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-green group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-navy">
        {service.title}
      </h3>

      <p className="mt-2 flex-1 text-[15px] leading-loose text-muted">
        {service.description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-green">
        <span>اطلب الخدمة</span>

        <ArrowLeft
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
          strokeWidth={2.5}
        />
      </div>

      <div
        className="absolute bottom-0 right-6 left-6 h-[2px] origin-right scale-x-0 rounded-full bg-green transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}