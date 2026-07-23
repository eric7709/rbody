"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl bg-white px-6 py-20 md:py-28">
      <div className="text-center">
        <p className="eyebrow mb-4 text-[#8B6F86]">FAQ</p>
        <h2 className="font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
          Common questions
        </h2>
      </div>

      <div className="mt-12 divide-y divide-[#CDB7C8]/40 border-y border-[#CDB7C8]/40">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base text-[#333333] sm:text-lg">
                  {f.q}
                </span>
                <Plus
                  size={18}
                  className={`shrink-0 text-[#8B6F86] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-[#333333]/70">
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
