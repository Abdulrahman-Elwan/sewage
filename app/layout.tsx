import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteUrl = "https://sewage-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "تسليك وتنظيف الصرف الصحي وشفط البيارات | ثقتكم هدفنا",
    template: "%s | ثقتكم هدفنا",
  },

  description:
    "ثقتكم هدفنا لخدمات الصرف الصحي في السعودية. نقدم خدمات تسليك المجاري، تنظيف وصيانة شبكات الصرف، شفط البيارات، فتح الانسدادات وتنظيف غرف التفتيش باحترافية ومعدات متخصصة.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ثقتكم هدفنا | خدمات الصرف الصحي في السعودية",
    description:
      "خدمات متخصصة في تسليك وتنظيف وصيانة شبكات الصرف الصحي، شفط البيارات، فتح الانسدادات وتنظيف غرف التفتيش.",
    url: "/",
    siteName: "ثقتكم هدفنا",
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ثقتكم هدفنا | خدمات الصرف الصحي",
    description:
      "تسليك وتنظيف الصرف الصحي وشفط البيارات وفتح الانسدادات باحترافية ومعدات متخصصة.",
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

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-arabic bg-white text-navy antialiased">
        {children}

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18440415657"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18440415657');
          `}
        </Script>
      </body>
    </html>
  );
}
