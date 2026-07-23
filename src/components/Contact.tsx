"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { Clock, MapPin, MessageCircle, Phone, ChevronDown, Check } from "lucide-react";

import { site, waLink } from "@/lib/content";

import SectionWave from "./SectionWave";
import InstagramIcon from "./InstagramIcon";
import { services } from "@/lib/services";

export default function Contact() {
  const [selectedTreatment, setSelectedTreatment] = useState(
    services[0]?.name || "Select a treatment"
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Clean phone number so tel: links parse correctly across all browsers & OS
  const cleanPhone = "+2347074170795";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name")?.toString() || "";
    const phone = form.get("phone")?.toString() || "";
    const treatment = selectedTreatment;
    const message = form.get("message")?.toString() || "";

    const text = `
Hi Rbody, I'd like to book a consultation.

Name: ${name}
Phone: ${phone}
Treatment: ${treatment}

Message:
${message}
`.trim();

    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  const instagramHref = site.instagram
    ? `https://instagram.com/${site.instagram.replace("@", "")}`
    : "#";

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8EDEF]">
      <SectionWave tone="white" flip />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4 text-[#8B6F86]">Contact</p>

            <h2 className="max-w-xl font-display text-4xl leading-[1.1] text-[#333333] sm:text-5xl">
              Begin with a private consultation.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#333333]/65">
              Tell us what you would like to improve, and our team will guide
              you through the most suitable treatment options.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Hi Rbody, I'd like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8B6F86] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7a5f75]"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>

              {/* Fixed Call Link */}
              <a
                href={cleanPhone ? `tel:+${cleanPhone}` : "#"}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#8B6F86]/30 px-6 py-3 text-sm font-medium text-[#333333] transition hover:border-[#8B6F86] hover:text-[#8B6F86]"
              >
                <Phone size={17} />
                Call Clinic
              </a>
            </div>

            <div className="mt-9 space-y-5 border-t border-[#CDB7C8]/40 pt-7">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CDB7C8]/30">
                  <MapPin className="text-[#8B6F86]" size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#333333]">Visit Us</p>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-[#333333]/60">
                    {site.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CDB7C8]/30">
                  <Clock className="text-[#8B6F86]" size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#333333]">Opening Hours</p>
                  <div className="mt-1 space-y-0.5">
                    {site.hours.map((h) => (
                      <p key={h.days} className="text-sm text-[#333333]/60">
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CDB7C8]/30">
                  <span className="text-[#8B6F86]">
                    <InstagramIcon size={18} />
                  </span>
                </span>

                <div>
                  <p className="text-sm font-medium text-[#333333]">Instagram</p>
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-[#333333]/60 transition hover:text-[#8B6F86]"
                  >
                    {site.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-[#CDB7C8]/40 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="border-b border-[#CDB7C8]/40 pb-5">
              <p className="eyebrow mb-2 text-[#8B6F86]">Enquiry Form</p>

              <h3 className="font-display text-2xl text-[#333333]">
                Request your appointment
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#333333]/60">
                Complete the form and your message will open directly in
                WhatsApp.
              </p>
            </div>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="eyebrow !text-[#333333]/50" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full border-b border-[#CDB7C8]/60 bg-transparent px-0 py-2.5 text-sm text-[#333333] placeholder:text-[#333333]/30 outline-none transition focus:border-[#8B6F86]"
                  />
                </div>

                <div>
                  <label className="eyebrow !text-[#333333]/50" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0800 000 0000"
                    className="mt-1.5 w-full border-b border-[#CDB7C8]/60 bg-transparent px-0 py-2.5 text-sm text-[#333333] placeholder:text-[#333333]/30 outline-none transition focus:border-[#8B6F86]"
                  />
                </div>
              </div>

              {/* Custom Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="eyebrow !text-[#333333]/50">
                  Treatment Interested In
                </label>

                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="mt-1.5 flex w-full items-center justify-between border-b border-[#CDB7C8]/60 bg-transparent px-0 py-2.5 text-left text-sm text-[#333333] outline-none transition focus:border-[#8B6F86]"
                >
                  <span className="truncate">{selectedTreatment}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#8B6F86] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-[#CDB7C8]/40 bg-white py-2 shadow-xl">
                    {services.map((service) => {
                      if (service?.drips && service.drips.length > 0) {
                        return (
                          <div key={service.slug} className="mt-1 border-t border-[#CDB7C8]/20 pt-2 first:mt-0 first:border-0 first:pt-0">
                            <div className="px-4 py-2 font-display text-sm font-semibold tracking-wide text-[#8B6F86]">
                              {service.name}
                            </div>
                            {service.drips.map((drip) => (
                              <button
                                key={drip.slug}
                                type="button"
                                onClick={() => {
                                  setSelectedTreatment(drip.name);
                                  setIsOpen(false);
                                }}
                                className={`flex w-full items-center justify-between px-6 py-2 text-left text-sm transition hover:bg-[#F8EDEF]/50 ${
                                  selectedTreatment === drip.name
                                    ? "font-medium text-[#8B6F86]"
                                    : "text-[#333333]/80"
                                }`}
                              >
                                <span>{drip.name}</span>
                                {selectedTreatment === drip.name && (
                                  <Check size={14} className="text-[#8B6F86]" />
                                )}
                              </button>
                            ))}
                          </div>
                        );
                      }

                      return (
                        <button
                          key={service.slug}
                          type="button"
                          onClick={() => {
                            setSelectedTreatment(service.name);
                            setIsOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition hover:bg-[#F8EDEF]/50 ${
                            selectedTreatment === service.name
                              ? "font-medium text-[#8B6F86]"
                              : "text-[#333333]"
                          }`}
                        >
                          <span>{service.name}</span>
                          {selectedTreatment === service.name && (
                            <Check size={14} className="text-[#8B6F86]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div>
                <label className="eyebrow !text-[#333333]/50" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you would like to achieve..."
                  className="mt-1.5 w-full resize-none border-b border-[#CDB7C8]/60 bg-transparent px-0 py-2.5 text-sm text-[#333333] placeholder:text-[#333333]/30 outline-none transition focus:border-[#8B6F86]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8B6F86] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#7a5f75]"
              >
                <MessageCircle size={17} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}