import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock3,
  HeartPulse,
  MessageCircle,
} from "lucide-react";

import { waLink } from "@/lib/content";
import { groupedServices } from "@/lib/services";
import type { Service } from "@/lib/types";

import SectionWave from "./SectionWave";

function bookingMessage(name: string) {
  return [
    "Hi Rbody, I'd like to book an appointment for:",
    name,
    "",
    "Please let me know your next available slot.",
  ].join("\n");
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const dripCount = service.drips?.length ?? 0;
  const previewDrips = service.drips?.slice(0, 3) ?? [];
  const remainingDrips = dripCount - previewDrips.length;
  const previewBenefits =
    dripCount > 0 ? [] : service.benefits?.slice(0, 2) ?? [];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#8B6F86]/10 bg-white shadow-sm shadow-[#8B6F86]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B6F86]/25 hover:shadow-xl hover:shadow-[#8B6F86]/10">
      {/* Soft corner accent */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#CDB7C8]/25 transition-transform duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-full flex-col p-5 sm:p-6">
        {/* Card header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F8EDEF] font-mono text-xs font-semibold text-[#8B6F86]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {service.price ? (
            <span className="max-w-[11rem] rounded-full bg-[#8B6F86]/10 px-3 py-1 text-right text-xs font-medium leading-snug tabular-nums text-[#8B6F86]">
              {service.price}
            </span>
          ) : dripCount > 0 ? (
            <span className="rounded-full bg-[#8B6F86]/10 px-3 py-1 text-xs font-medium text-[#8B6F86]">
              {dripCount} IV drips
            </span>
          ) : null}
        </div>

        {/* Main content */}
        <div>
          <h3 className="font-display text-xl font-medium leading-tight text-[#333333] transition-colors group-hover:text-[#8B6F86] sm:text-2xl">
            {service.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#333333]/65">
            {service.description}
          </p>

          {/* Treatment facts */}
          <div className="mt-5 space-y-2.5 rounded-2xl bg-[#F8EDEF]/35 p-4">
            {service.treatmentTime && (
              <div className="flex items-center gap-2.5 text-xs leading-relaxed text-[#333333]/60">
                <Clock3 size={14} className="shrink-0 text-[#8B6F86]" />
                <span>{service.treatmentTime}</span>
              </div>
            )}

            {service.recommendedSessions && (
              <div className="flex items-center gap-2.5 text-xs leading-relaxed text-[#333333]/60">
                <CalendarCheck size={14} className="shrink-0 text-[#8B6F86]" />
                <span className="line-clamp-1">
                  {service.recommendedSessions}
                </span>
              </div>
            )}

            {service.bestFor && (
              <div className="flex items-center gap-2.5 text-xs leading-relaxed text-[#333333]/60">
                <HeartPulse size={14} className="shrink-0 text-[#8B6F86]" />
                <span className="line-clamp-1">{service.bestFor}</span>
              </div>
            )}
          </div>

          {/* IV Therapy compact menu preview */}
          {dripCount > 0 && (
            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B6F86]/70">
                  IV Menu
                </p>

                <span className="text-xs font-medium text-[#333333]/45">
                  {dripCount} available
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {previewDrips.map((drip) => (
                  <span
                    key={drip.slug}
                    className="rounded-full border border-[#8B6F86]/15 bg-white px-3 py-1 text-xs text-[#333333]/60"
                  >
                    {drip.name}
                  </span>
                ))}

                {remainingDrips > 0 && (
                  <span className="rounded-full bg-[#8B6F86]/10 px-3 py-1 text-xs font-medium text-[#8B6F86]">
                    +{remainingDrips} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Normal service benefits */}
          {previewBenefits.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {previewBenefits.map((benefit, benefitIndex) => (
                <li
                  key={benefitIndex}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-[#333333]/60"
                >
                  <BadgeCheck
                    size={14}
                    className="mt-0.5 shrink-0 text-[#8B6F86]"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card buttons pinned to bottom */}
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#8B6F86]/10 pt-5">
          <Link
            href={`/treatments/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8B6F86] underline decoration-[#8B6F86]/30 underline-offset-4 transition-all hover:gap-2.5 hover:decoration-[#8B6F86]"
          >
            {dripCount > 0 ? "View IV menu" : "See details"}
            <ArrowRight size={14} />
          </Link>

          <a
            href={waLink(bookingMessage(service.name))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#8B6F86] px-5 text-sm font-medium text-white shadow-sm shadow-[#8B6F86]/20 transition-colors hover:bg-[#7A5F75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F86]"
          >
            <MessageCircle size={14} />
            Book
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#F8EDEF] pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-28 md:pt-40"
    >
      <SectionWave tone="white" flip />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(139,111,134,0.09),transparent_26%)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-3 text-[#8B6F86]">Our Offerings</p>

          <h2 className="font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
            Tailored treatments for your body’s real recovery process
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#8B6F86]/30" />
        </div>

        {/* Services grid */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groupedServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-2xl leading-tight text-[#333333] sm:text-3xl">
            Not sure where to start?
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#333333]/70">
            Tell us what you’re working towards — post-op recovery, body
            sculpting, wellness, skin glow or weight-loss support — and we’ll
            guide you to the right treatment plan.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                "Hi Rbody, I'd like help choosing the right treatment."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#8B6F86] px-6 text-sm font-medium text-white shadow-sm shadow-[#8B6F86]/20 transition-colors hover:bg-[#7A5F75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F86]"
            >
              <MessageCircle size={15} />
              Ask on WhatsApp
            </a>

            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#8B6F86]/25 bg-white/70 px-6 text-sm font-medium text-[#8B6F86] transition-colors hover:border-[#8B6F86]/45 hover:bg-white"
            >
              Book a consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}