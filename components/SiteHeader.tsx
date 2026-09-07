"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/yoga-courses", label: "Yoga Courses" },
  { href: "/short-courses", label: "Short Courses" },
  { href: "/online-courses", label: "Online Courses" },
  { href: "/retreat", label: "Retreat" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#7a4828] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-sm font-medium sm:gap-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.25-.25 6.9 5.4a1 1 0 0 0 1.2 0l6.9-5.4H5.25Zm13.75 11.5V7.75l-5.8 4.5a3 3 0 0 1-3.9 0L5 7.75v10.25h14Z"/>
              </svg>
            </span>
            <Link href="mailto:info@vedicyogaashram.com" className="transition hover:opacity-90">
              info@vedicyogaashram.com
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3 13.3 13.3 0 0 0 4.1 1 1.2 1.2 0 0 1 1.2 1.2V20a1.2 1.2 0 0 1-1.2 1.2A18.8 18.8 0 0 1 3 4.2 1.2 1.2 0 0 1 4.2 3h3.5a1.2 1.2 0 0 1 1.2 1.2 13.3 13.3 0 0 0 1 4.1 1.2 1.2 0 0 1-.3 1.2L6.6 10.8Z"/>
              </svg>
            </span>
            <Link href="tel:+919579930589" className="transition hover:opacity-90">
              +91 95799 30589
            </Link>
          </div>

          <div className="hidden items-center justify-center gap-3 sm:flex">
            <Link href="https://www.instagram.com/vedichathavinyasayogaashram" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 transition hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5-3.2a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Z"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 transition hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V7.3c0-.9.3-1.5 1.6-1.5H17V2.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.4v8h3.1Z"/>
              </svg>
            </Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 transition hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M21.8 8.1a2.8 2.8 0 0 0-2-2C18 5.6 12 5.6 12 5.6s-6 0-7.8.5a2.8 2.8 0 0 0-2 2A29.7 29.7 0 0 0 2 12a29.7 29.7 0 0 0 .2 3.9 2.8 2.8 0 0 0 2 2c1.8.5 7.8.5 7.8.5s6 0 7.8-.5a2.8 2.8 0 0 0 2-2A29.7 29.7 0 0 0 22 12a29.7 29.7 0 0 0-.2-3.9ZM10 15V9l5.2 3L10 15Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Vedic Yoga Ashram home">
            <Image
              src="/logo.png"
              alt="Vedic Hatha Vinyasa Yoga Ashram logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
