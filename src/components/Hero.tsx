import Image from "next/image";
import { MessageCircle, ShieldCheck, MapPin, GraduationCap } from "lucide-react";

import { waLink } from "@/lib/content";

import SectionWave from "./SectionWave";

const PHASES = [
  { mark: "Day 1", label: "Rest & lymphatic support" },
  { mark: "Week 2", label: "Guided movement" },
  { mark: "Week 6+", label: "Visible, lasting results" },
];

export default function Hero() {
  // Helper to render "written plan" string into individual 3D letter spans
  const render3DBrandText = (text: string) => {
    const shadowClass =
      "[text-shadow:0_1px_0_#7A5F75,0_2px_0_#6A4F65,0_3px_0_#5B4457,0_4px_8px_rgba(91,68,87,0.3)]";

    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index}>&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className={`inline-block transition-transform duration-200 hover:-translate-y-1 ${shadowClass}`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="relative overflow-hidden mt-10 bg-white">
      {/* Oversized watermark word */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[13rem] italic leading-none xl:text-[16rem] lg:block"
      >
        {"recovery".split("").map((char, i) => (
          <span key={i} className="watermark-letter">
            <span className="watermark-letter-base">{char}</span>
            <span
              className="watermark-letter-ink"
              style={{ animationDelay: `${i * 1}s` }}
            >
              {char}
            </span>
          </span>
        ))}
      </span>

      <style>{`
        .watermark-letter {
          position: relative;
          display: inline-block;
        }
        .watermark-letter-base {
          color: rgba(205, 183, 200, 0.3);
        }
        .watermark-letter-ink {
          position: absolute;
          left: 0;
          top: 0;
          color: #5b4457;
          font-weight: 700;
          text-shadow: 0 0 22px rgba(91, 68, 87, 0.35);
          clip-path: inset(0 100% 0 0);
          animation: letter-write 8s ease-in-out infinite;
        }
        @keyframes letter-write {
          0%,
          100% {
            clip-path: inset(0 100% 0 0);
          }
          6% {
            clip-path: inset(0 0 0 0);
          }
          11% {
            clip-path: inset(0 0 0 0);
          }
          17% {
            clip-path: inset(0 0 0 100%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .watermark-letter-ink {
            animation: none;
            clip-path: inset(0 100% 0 0);
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="grid gap-8 lg:gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left column — copy with ONLY "written plan" in 3D */}
          <div className="order-2 lg:order-1">
            <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[#8B6F86]">
              Recovery notes — Lagos, NG
            </p>

            {/* Headline */}
            <h1 className="reveal font-display max-w-xl text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-[#333333] sm:text-5xl md:text-6xl">
              Recovery isn’t a moment.
              <br />
              It’s a{" "}
              <span className="italic text-[#8B6F86]">
                {render3DBrandText("written plan")}
              </span>
              .
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-[#333333]/70 md:text-lg">
              Rbody is a specialist clinic for lymphatic drainage massage,
              post-surgical recovery care, body sculpting, lipolysis, IV
              therapy and medical weight-loss support — every plan charted
              around your body, your timeline, your goals.
            </p>

            {/* 3D Action Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink("Hi Rbody, I'd like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-b-4 border-[#5B4457] bg-[#8B6F86] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:border-b-[5px] hover:bg-[#7a5f75] active:translate-y-1 active:border-b-0 active:shadow-xs"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#CDB7C8] border-b-4 border-b-[#8B6F86]/50 bg-white px-6 py-3.5 text-sm font-semibold text-[#8B6F86] shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:border-b-[5px] hover:bg-[#F8EDEF]/30 active:translate-y-1 active:border-b-0 active:shadow-xs"
              >
                Book a Consultation
              </a>
            </div>

            {/* Recovery-phase strip — hidden on mobile, shown on desktop */}
            <ol className="mt-12 hidden lg:flex flex-col divide-y divide-[#CDB7C8]/30 border-y border-[#CDB7C8]/30 sm:flex-row sm:divide-x sm:divide-y-0">
              {PHASES.map((phase) => (
                <li key={phase.mark} className="flex-1 py-4 sm:px-5 sm:py-3">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#8B6F86]">
                    {phase.mark}
                  </p>
                  <p className="mt-1 text-sm text-[#333333]/70">{phase.label}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right column — the porthole */}
          <div className="order-1 lg:order-2 relative mx-auto flex w-full max-w-xl items-center justify-center py-6 lg:-translate-y-10">
            {/* Pulse line */}
            <svg
              aria-hidden="true"
              viewBox="0 0 500 500"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M-20,250 L120,250 L150,150 L180,340 L210,250 L500,250"
                fill="none"
                stroke="#8B6F86"
                strokeOpacity="0.35"
                strokeWidth="2"
              />
            </svg>

            {/* Dial ticks */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="pointer-events-none absolute h-[104%] w-[104%]"
            >
              <circle
                cx="200"
                cy="200"
                r="196"
                fill="none"
                stroke="#CDB7C8"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeDasharray="1 11"
              />
            </svg>

            <div className="porthole relative aspect-square w-[94%] overflow-hidden rounded-full shadow-2xl shadow-[#8B6F86]/20 ring-[10px] ring-white">
              <Image
                src="https://res.cloudinary.com/ddagbflm8/image/upload/v1784769601/IMG_9456_dle1gn.png"
                alt="Rbody Clinic therapist in a treatment room in Lagos"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 32vw"
                className="object-cover"
              />
            </div>

            {/* Credential chip */}
            <div className="absolute -bottom-2 right-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl shadow-[#8B6F86]/15 ring-1 ring-[#CDB7C8]/40 sm:right-6">
              <div className="font-display text-2xl italic leading-none text-[#8B6F86]">6+</div>
              <div className="text-xs leading-tight text-[#333333]/70">
                years guiding
                <br /> recovery in Lagos
              </div>
            </div>
          </div>

          {/* Recovery-phase strip — mobile only, shown after image */}
          <ol className="order-3 mt-4 flex flex-col divide-y divide-[#CDB7C8]/30 border-y border-[#CDB7C8]/30 lg:hidden sm:flex-row sm:divide-x sm:divide-y-0">
            {PHASES.map((phase) => (
              <li key={phase.mark} className="flex-1 py-4 sm:px-5 sm:py-3">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#8B6F86]">
                  {phase.mark}
                </p>
                <p className="mt-1 text-sm text-[#333333]/70">{phase.label}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Trust markers */}
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#333333]/60">
          <li className="flex items-center gap-2">
            <GraduationCap size={16} className="text-[#8B6F86]" /> Trained
            aesthetic therapists
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#8B6F86]" /> Hygiene-first
            protocols
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-[#8B6F86]" /> Based in Lagos
          </li>
        </ul>
      </div>

      {/* Signature flowing line */}
      <div className="relative mt-6 h-40 w-full overflow-hidden md:h-56">
        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M-20,120 C160,40 260,190 460,110 C640,38 760,180 940,95 C1060,42 1140,120 1220,80"
            fill="none"
            stroke="#CDB7C8"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <path
            d="M-20,150 C180,80 280,210 480,140 C660,72 780,200 960,120 C1080,66 1150,140 1220,105"
            fill="none"
            stroke="#8B6F86"
            strokeWidth="2.5"
          />
          <circle cx="-4" cy="151" r="7" fill="#8B6F86" />
        </svg>
        <div className="absolute inset-x-0 bottom-0">
          <SectionWave tone="blush" />
        </div>
      </div>
    </section>
  );
}