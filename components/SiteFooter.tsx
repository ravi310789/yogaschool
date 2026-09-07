import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com/vedichathavinyasayogaashram", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "YouTube" },
];

export default function SiteFooter() {
  return (
    <>
      <Link
        href="https://wa.me/919579930589?text=Namaste%20Vedic%20Yoga%20Ashram%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:shadow-[0_16px_36px_rgba(34,197,94,0.45)]"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
          <path d="M18.9 5.1A10.8 10.8 0 0 0 12.1 2C6.8 2 2.5 6.3 2.5 11.6c0 2 .6 4 1.7 5.7L2.2 22l4.8-1.3a9.6 9.6 0 0 0 5.1 1.5h.1c5.3 0 9.6-4.3 9.6-9.6 0-2.6-1-5-2.9-6.8Zm-6.8 14.8h-.1a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3a8 8 0 0 1-1.2-4.1A8.1 8.1 0 0 1 12.1 4a8.1 8.1 0 0 1 8.1 8.1c0 2.2-.9 4.3-2.4 5.9a8.1 8.1 0 0 1-5.6 2.9Zm4.5-6.1c-.2-.1-1.3-.7-1.6-.8-.3-.1-.5-.1-.7.1-.2.2-.8.8-.9 1-.1.2-.3.2-.5.1-.8-.4-1.6-1-2.2-1.8-.6-.7-.9-1.4-1-.9-.1-.2 0-.3.1-.5l.2-.2c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-.9-2.4-.2-.7-.5-.6-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.3 3.4c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.6.2-.8.2-1.5.1-1.6-.1-.1-.3-.2-.6-.3Z"/>
        </svg>
      </Link>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex flex-col items-center gap-1 text-center lg:flex-row lg:gap-3 lg:text-left">
            <span className="font-semibold text-slate-900">Vedic Yoga Ashram</span>
            <span>info@vedicyogaashram.com</span>
            <span>+91 95799 30589</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
