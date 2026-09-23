
import type { Metadata } from "next";
import Script from "next/script";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteUrl = "https://sewage-one.vercel.app";

const GOOGLE_TAG_MANAGER_ID = "GTM-TJJHXK3C";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
      </head>

      <body className="font-arabic bg-white text-navy antialiased">
        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
