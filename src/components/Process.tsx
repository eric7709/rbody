import { process, waLink } from "@/lib/content";
import {
  Calendar,
  UserCheck,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import SectionWave from "./SectionWave";

const stepIcons = [Calendar, UserCheck, Sparkles, ShieldCheck];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-20 text-[#333333] md:py-28"
    >
      <SectionWave tone="blush" flip />

      <div className="relative mx-auto max-w-4xl py-5 px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-lg text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-widest text-[#8B6F86]">
            The Experience
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-[#333333] sm:text-4xl">
            Your Journey With Us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#333333]/70">
            From your very first conversation to long-term results, here is how we
            care for you at every step.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Timeline Backbone */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#CDB7C8]/20 via-[#8B6F86] to-[#CDB7C8]/20 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {process.map((p, i) => {
              const Icon = stepIcons[i] || ShieldCheck;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={p.step || i}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  {/* Timeline Center Node / Badge */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#8B6F86] text-white shadow-md md:left-1/2 md:-translate-x-1/2">
                    <Icon size={20} />
                  </div>

                  {/* Content Container (Alternates left and right on desktop) */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:col-start-2 md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="rounded-2xl border border-[#CDB7C8]/30 bg-[#F8EDEF]/40 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-[#8B6F86]/40 hover:bg-[#F8EDEF]/80">
                      <div
                        className={`flex items-center gap-2 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-[#8B6F86]">
                          Step {p.step ? p.step : `0${i + 1}`}
                        </span>
                      </div>

                      <h3 className="mt-1 font-display text-lg font-semibold text-[#333333]">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-[#333333]/70">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-20 rounded-2xl border border-[#CDB7C8]/30 bg-[#F8EDEF] p-8 text-center shadow-xs">
          <h3 className="font-display text-xl font-medium text-[#333333]">
            Ready to Begin Your Transformation?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#333333]/70">
            Reach out to our team today for a confidential consultation tailored
            to your specific goals.
          </p>

          <a
            href={waLink("Hi Rbody, I'd like to start my consultation.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8B6F86] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#7A5F75] hover:shadow-md hover:scale-105"
          >
            <MessageCircle size={16} />
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}