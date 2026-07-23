import { whyChoose } from "@/lib/content";
import SectionWave from "./SectionWave";
import { Check } from "lucide-react";
import { iconMap } from "./IconMap";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8EDEF] text-[#333333]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#CDB7C8]/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/60 rounded-full blur-3xl" />

      <SectionWave tone="white" flip />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 md:pb-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-3 text-[#8B6F86]">Why Choose Rbody</p>
            <h2 className="font-display max-w-lg text-3xl leading-tight text-[#333333] sm:text-4xl">
              The difference is in the detail
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#333333]/70">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-[#8B6F86]" />
              <span>Expert care</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-[#8B6F86]" />
              <span>Personalized plans</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyChoose.map((w, index) => {
            const Icon = iconMap[w.icon];
            return (
              <div
                key={w.title}
                className="group relative bg-white rounded-2xl p-7 border border-[#CDB7C8]/40 shadow-sm hover:border-[#8B6F86]/50 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                {/* Icon with background */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CDB7C8]/35 flex items-center justify-center shrink-0 group-hover:bg-[#CDB7C8]/55 transition-colors duration-300">
                    <Icon size={22} className="text-[#8B6F86]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#333333]">
                    {w.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#333333]/70 pl-0">
                  {w.detail}
                </p>

                {/* Decorative line */}
                <div className="mt-4 w-10 h-0.5 bg-[#8B6F86] rounded-full group-hover:w-16 transition-all duration-500" />

                {/* Number indicator */}
                <span className="absolute top-4 right-4 text-[#CDB7C8]/60 font-display text-4xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="text-center p-4 bg-white rounded-xl border border-[#CDB7C8]/40">
            <p className="font-display text-2xl text-[#8B6F86]">500+</p>
            <p className="text-xs text-[#333333]/60 mt-1">Happy Clients</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-[#CDB7C8]/40">
            <p className="font-display text-2xl text-[#8B6F86]">4.9★</p>
            <p className="text-xs text-[#333333]/60 mt-1">Average Rating</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-[#CDB7C8]/40">
            <p className="font-display text-2xl text-[#8B6F86]">2024</p>
            <p className="text-xs text-[#333333]/60 mt-1">Founded</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-[#CDB7C8]/40">
            <p className="font-display text-2xl text-[#8B6F86]">100%</p>
            <p className="text-xs text-[#333333]/60 mt-1">Client-First Care</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#8B6F86] hover:bg-[#7a5f75] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm group"
          >
            Start your journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
