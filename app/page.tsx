import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "خدمات تسليك وتنظيف الصرف الصحي في السعودية | ثقتكم هدفنا",

  description:
    "ثقتكم هدفنا لخدمات الصرف الصحي. نقدم خدمات تسليك المجاري، تنظيف وصيانة شبكات الصرف، شفط البيارات، فتح الانسدادات وتنظيف غرف التفتيش بأيدي فنيين متخصصين ومعدات حديثة.",

  keywords: [
    "تسليك مجاري",
    "تسليك صرف صحي",
    "تنظيف الصرف الصحي",
    "شركة صرف صحي",
    "خدمات الصرف الصحي",
    "شفط بيارات",
    "فتح انسدادات",
    "تنظيف غرف التفتيش",
    "صيانة شبكات الصرف الصحي",
    "فني صرف صحي",
    "تسليك مواسير",
    "تنظيف مجاري",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ثقتكم هدفنا | خدمات الصرف الصحي في السعودية",
    description:
      "خدمات متخصصة في تسليك وتنظيف وصيانة شبكات الصرف الصحي، فتح الانسدادات، شفط البيارات وتنظيف غرف التفتيش باستخدام معدات حديثة وفريق متخصص.",
    type: "website",
    locale: "ar_SA",
    siteName: "ثقتكم هدفنا",
  },

  twitter: {
    card: "summary_large_image",
    title: "ثقتكم هدفنا | خدمات الصرف الصحي",
    description:
      "خدمات تسليك وتنظيف وصيانة الصرف الصحي في السعودية باحترافية وسرعة استجابة.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        تخطي إلى المحتوى الرئيسي
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <ProblemSolution />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}
