import { GraduationCap, ClipboardCheck, Droplet, MessageSquare, Heart, Shield, Users } from "lucide-react";
import SectionWave from "./SectionWave";

const pillars = [
  {
    icon: GraduationCap,
    title: "Trained specialists",
    detail: "Therapists trained specifically in post-op lymphatic technique.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized plans",
    detail: "No generic packages — every plan is built around your body.",
  },
  {
    icon: Droplet,
    title: "Clinical hygiene",
    detail: "Medical-grade sanitation standards at every session.",
  },
  {
    icon: MessageSquare,
    title: "Client-first care",
    detail: "Honest guidance — we tell you what you actually need.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F8EDEF]">
      <div className="absolute left-0 top-0 h-1/2 w-1/3 rounded-full bg-white/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-1/3 w-1/4 rounded-full bg-[#8B6F86]/5 blur-3xl" />
      <SectionWave tone="blush" flip />
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-3 text-[#8B6F86]">About Rbody</p>
          <h2 className="font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
            Care that understands the body&rsquo;s real recovery process
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#8B6F86]/30" />
        </div>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left - Image/Visual with Stats Overlay */}
          <div className="lg:col-span-2">
            <div className="relative flex h-full items-stretch overflow-hidden rounded-2xl border border-[#CDB7C8]/40 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full bg-linear-to-br from-[#8B6F86]/5 to-[#F8EDEF] lg:aspect-auto">
                <div className="flex h-full w-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#8B6F86]/10">
                      <Heart size={32} className="text-[#8B6F86]" />
                    </div>
                    <p className="text-sm text-[#333333]/50">
                      Clinic image placeholder
                    </p>
                    <p className="mt-1 text-xs text-[#333333]/30">Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#333333]/85 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-display text-2xl font-bold">2019</p>
                    <p className="text-xs opacity-70">Founded in Lagos</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold">700+</p>
                    <p className="text-xs opacity-70">Happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Intro Text */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-3">
            <div className="space-y-4 text-[#333333]/75">
              <p className="text-base leading-relaxed">
                Rbody was founded to fill a gap in Lagos&rsquo;s aesthetic and
                wellness space:{" "}
                <span className="font-medium text-[#333333]">real clinical support</span>{" "}
                for the body, before and after major procedures — not just
                relaxation, but recovery.
              </p>
              <p className="text-base leading-relaxed">
                We work closely with clients navigating post-surgical healing,
                body contouring goals, and sustainable weight-loss journeys,
                combining hands-on therapeutic technique with medically-informed
                protocols.
              </p>
              <div className="rounded-xl border border-[#CDB7C8]/40 bg-white p-4 text-base leading-relaxed">
                <span className="font-medium text-[#333333]">
                  Every client starts with a proper consultation.
                </span>{" "}
                We assess your body, your surgeon&rsquo;s recovery guidelines,
                and your goals, before recommending a plan —
                <span className="font-medium text-[#8B6F86]">
                  {" "}
                  never a one-size-fits-all package.
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 rounded-xl border border-[#CDB7C8]/40 bg-white px-4 py-3">
                <Shield size={18} className="text-[#8B6F86]" />
                <div>
                  <p className="text-xs font-medium text-[#333333]">Trained experts</p>
                  <p className="text-[10px] text-[#333333]/50">
                    Post-op certified
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#CDB7C8]/40 bg-white px-4 py-3">
                <Users size={18} className="text-[#8B6F86]" />
                <div>
                  <p className="text-xs font-medium text-[#333333]">Trusted care</p>
                  <p className="text-[10px] text-[#333333]/50">
                    700+ clients served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars - Now with a slightly different visual treatment */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-xl bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="absolute -top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8B6F86] text-white shadow-md transition-colors group-hover:bg-[#6b5566]">
                  <Icon size={18} />
                </div>
                <div className="mt-4">
                  <dt className="font-display text-base font-semibold text-[#333333]">
                    {p.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#333333]/70">
                    {p.detail}
                  </dd>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#8B6F86] px-8 py-4 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#7a5f75] hover:shadow-lg"
          >
            <Heart size={18} className="text-white" />
            Book your consultation
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}