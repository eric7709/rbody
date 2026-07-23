"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Calendar,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { waLink } from "@/lib/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#gallery", label: "Gallery" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export default function Header2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 p-4">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-colors duration-300 ${
            scrolled
              ? "bg-white shadow-lg border-[#CDB7C8]/40"
              : "bg-white/90 border-[#CDB7C8]/30"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image
                src="/images/logo.jpg"
                alt="Rbody"
                fill
                className="object-cover"
              />
            </div>

            <span className="font-display text-xl text-[#333333]">
              R<span className="italic text-[#8B6F86]">body</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#333333] hover:text-[#8B6F86]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Hi Rbody, I'd like to ask a question.")}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border"
            >
              <MessageCircle size={16} />
            </a>

            <Link
              href="#contact"
              className="hidden sm:flex items-center gap-2 rounded-full bg-[#8B6F86] px-5 py-2 text-white"
            >
              <Calendar size={14} />
              Book Now
            </Link>

            <button
              type="button"
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6EEF4] md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col justify-between pt-28 px-6 pb-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-2xl text-[#333333]"
              >
                {link.label}
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <div className="rounded-2xl bg-[#F8EDEF] p-4 text-center">
              <p className="text-sm">
                Consultations strictly by appointment
              </p>

              <p className="text-xs mt-1 text-gray-500">
                Lagos, Nigeria
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={waLink("Hi Rbody, I'd like to ask a question.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border py-3"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-[#8B6F86] py-3 text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}