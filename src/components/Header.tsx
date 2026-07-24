"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/content";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Treatments" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroThreshold = window.innerHeight;

      setScrolled(currentScrollY > 40);

      if (currentScrollY <= heroThreshold) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
  }, [open]);

  return (
    <>
      {/*
        IMPORTANT: this wrapper carries the show/hide transform.
        Do NOT put the mobile drawer's `fixed` element anywhere inside
        an element that has a transform applied to it — per spec, a
        `transform` creates a new containing block for `position: fixed`
        descendants, which iOS Safari enforces strictly. That was
        breaking (or silently mispositioning) the drawer and eating
        taps on the hamburger button. The drawer is now rendered as a
        sibling fixed element, fully outside this transformed header.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 p-4 transition-all duration-500 ease-in-out md:p-4 ${visible || open
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Floating Header Capsule */}
        <div
          style={{ WebkitTransform: "translateZ(0)", transform: "translateZ(0)" }}
          className={`relative z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 will-change-transform md:px-6 md:py-3 ${scrolled
              ? "border-[#CDB7C8]/40 bg-white/85 shadow-[0_8px_32px_rgba(139,111,134,0.12)] backdrop-blur-xl"
              : "border-[#CDB7C8]/25 bg-white/70 backdrop-blur-md"
            }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[#CDB7C8]/40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Rbody Logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-xl tracking-tight text-[#333333]">
              R<span className="italic font-normal text-[#8B6F86]">body</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-xs font-medium uppercase tracking-[0.18em] text-[#333333]/70 transition-colors duration-200 hover:text-[#8B6F86]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#8B6F86] opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* WhatsApp Quick Link (Desktop) */}
            <a
              href={waLink("Hi Rbody, I'd like to ask a question.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#CDB7C8]/30 bg-[#F6EEF4]/60 text-[#5B4358] transition-colors hover:bg-[#8B6F86] hover:text-white md:flex"
            >
              <MessageCircle size={15} />
            </a>

            {/* Book Consultation Button */}
            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-[#8B6F86] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#72576d] active:scale-95 sm:flex"
            >
              <Calendar size={13} />
              <span>Book Now</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setOpen(prev => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#F6EEF4] text-[#333333] md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/*
        Full-Screen Mobile Drawer — now a top-level fixed element,
        a sibling of <header>, not a descendant of it. This guarantees
        its `fixed inset-0` is positioned relative to the actual
        viewport on every browser, including iOS Safari.
      */}
      <div
        className={`fixed inset-0 z-40 flex h-screen w-screen flex-col justify-between bg-white/98 px-5 pb-8 pt-24 backdrop-blur-2xl transition-all duration-300 md:hidden ${open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
          }`}
      >
        <nav className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B6F86]">
            Navigation
          </p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-[#CDB7C8]/15 pb-2.5 text-xl font-display text-[#333333] transition-colors active:text-[#8B6F86]"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={18} className="text-[#8B6F86]" />
            </Link>
          ))}
        </nav>

        {/* Mobile Drawer Bottom Info & CTAs */}
        <div className="flex flex-col gap-4 pt-6">
          <div className="rounded-2xl bg-[#F8EDEF] p-4 text-center">
            <p className="text-xs font-medium text-[#5B4358]">
              Consultations strictly by appointment
            </p>
            <p className="mt-1 text-[11px] text-[#333333]/60">Lagos, Nigeria</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={waLink("Hi Rbody, I'd like to ask a question.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#CDB7C8]/50 bg-white py-3 text-xs font-medium text-[#333333]"
            >
              <MessageCircle size={15} className="text-[#8B6F86]" />
              WhatsApp
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#8B6F86] py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}