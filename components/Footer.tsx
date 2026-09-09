import Link from "next/link";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "أعمالنا" },
  { href: "#sectors", label: "المناطق" },
  { href: "#testimonials", label: "آراء عملائنا" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-3 pt-4 lg:px-8">
        {/* Links */}
        <nav
          dir="rtl"
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[17px] font-medium text-slate-500 transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="mt-2 border-t border-slate-100 pt-5 text-center">
          <p
            dir="rtl"
            className="text-[16px] text-slate-400"
          >
            © {new Date().getFullYear()} ثقتكم هدفنا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
