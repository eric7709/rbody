import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MessageCircle, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Users, 
  Sparkles,
  Package,
  MapPin,
  Droplets,
  Info
} from "lucide-react";

import { waLink } from "@/lib/content";
import { services, bookableListings } from "@/lib/services";
import { Service } from "@/lib/types";

function bookingMessage(name: string, context?: string) {
  return (
    "Hi Rbody, I'd like to book an appointment for:\n" +
    name + (context ? ` (${context})` : "") + "\n\n" +
    "Please let me know your next available slot."
  );
}

function findService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ treatmentSlug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treatmentSlug: string }>;
}): Promise<Metadata> {
  const { treatmentSlug } = await params;
  const service = findService(treatmentSlug);
  if (!service) return {};
  return {
    title: `${service.name} — Rbody Clinic`,
    description: service.description,
  };
}

type Fact = { label: string; value?: string; icon?: React.ReactNode };

function InfoGrid({ facts }: { facts: Fact[] }) {
  const filled = facts.filter((f) => f.value);
  if (filled.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {filled.map((f) => (
        <div key={f.label} className="flex items-start gap-2.5">
          {f.icon && (
            <span className="mt-0.5 text-[#8B6F86]/50">{f.icon}</span>
          )}
          <div>
            <dt className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B6F86]/50">
              {f.label}
            </dt>
            <dd className="text-sm font-medium text-[#333333]">{f.value}</dd>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon && <span className="text-[#8B6F86]/50">{icon}</span>}
      <h2 className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B6F86]/50">
        {title}
      </h2>
    </div>
  );
}

function SectionDivider() {
  return <div className="h-px w-full bg-gradient-to-r from-[#8B6F86]/15 via-[#8B6F86]/20 to-transparent" />;
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  let state = h >>> 0;
  const random = () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ treatmentSlug: string }>;
}) {
  const { treatmentSlug } = await params;
  const service = findService(treatmentSlug);
  if (!service) notFound();

  const facts: Fact[] = [
    { label: "Duration", value: service.treatmentTime, icon: <Clock size={14} /> },
    { label: "Sessions", value: service.recommendedSessions, icon: <Calendar size={14} /> },
    { label: "Stay", value: service.minimumStay, icon: <Users size={14} /> },
    { label: "Best for", value: service.bestFor, icon: <Sparkles size={14} /> },
  ];

  const relatedPool = bookableListings.filter(
    (item) => item.slug !== service.slug && !item.href.startsWith(`/treatments/${service.slug}#`)
  );
  const related = seededShuffle(relatedPool, service.slug).slice(0, 3);

  return (
    <main className="rb-page bg-white pb-20 pt-12 sm:pb-24 sm:pt-16 md:pt-24">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .rb-page .rb-rise { opacity: 0; animation: rb-rise 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
          .rb-page .rb-rise-1 { animation-delay: 0.02s; }
          .rb-page .rb-rise-2 { animation-delay: 0.08s; }
          .rb-page .rb-rise-3 { animation-delay: 0.14s; }
          @keyframes rb-rise {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Navigation */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#8B6F86]/50 transition-colors hover:text-[#8B6F86]"
        >
          <ArrowLeft size={12} />
          All treatments
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Main column */}
          <div className="min-w-0">
            {/* Header */}
            <div className="rb-rise rb-rise-1">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8B6F86]/60">
                    Rbody Clinic
                  </p>
                  <h1 className="mt-1.5 font-display text-3xl font-medium leading-[1.1] text-[#333333] sm:text-4xl md:text-[2.5rem]">
                    {service.name}
                  </h1>
                </div>
                {service.price && (
                  <span className="hidden shrink-0 rounded-full bg-[#F8EDEF] px-4 py-1.5 text-sm font-medium tabular-nums text-[#8B6F86] lg:inline-block">
                    {service.price}
                  </span>
                )}
              </div>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#333333]/70 sm:text-base">
                {service.description}
              </p>
            </div>

            {/* Quick Info - Mobile */}
            <div className="rb-rise rb-rise-2 mt-6 rounded-xl bg-[#F8EDEF]/20 px-5 py-4 lg:hidden">
              <InfoGrid facts={facts.filter(f => f.value)} />
              {service.note && (
                <p className="mt-3 text-xs italic text-[#333333]/50">— {service.note}</p>
              )}
            </div>

            {/* Content Sections */}
            <div className="rb-rise rb-rise-3 mt-10 space-y-10">
              {/* Section: Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <section>
                  <SectionHeader title="Key Benefits" icon={<Sparkles size={13} />} />
                  <SectionDivider />
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-[#8B6F86]/10 bg-white/50 px-3.5 py-2.5 transition-colors hover:border-[#8B6F86]/25 hover:bg-[#F8EDEF]/20"
                      >
                        <Check size={13} className="mt-0.5 shrink-0 text-[#8B6F86]" strokeWidth={2.5} />
                        <span className="text-sm text-[#333333]/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Section: What's Included */}
              {service.included && (
                <section>
                  <SectionHeader title="What's Included" icon={<Package size={13} />} />
                  <SectionDivider />
                  <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="text-sm text-[#333333]/70">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Section: Treatment Areas */}
              {service.treatmentAreas && (
                <section>
                  <SectionHeader title="Treatment Areas" icon={<MapPin size={13} />} />
                  <SectionDivider />
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.treatmentAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#8B6F86]/15 px-3.5 py-1 text-xs text-[#333333]/65 transition-colors hover:border-[#8B6F86]/30 hover:bg-[#F8EDEF]/30"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Section: IV Drips */}
              {service.drips && service.drips.length > 0 && (
                <section>
                  <div className="flex items-center justify-between">
                    <SectionHeader title="Available Infusions" icon={<Droplets size={13} />} />
                    <span className="text-[10px] text-[#8B6F86]/30">{service.drips.length}</span>
                  </div>
                  <SectionDivider />
                  <div className="mt-4 space-y-3">
                    {service.drips.map((drip) => (
                      <div
                        key={drip.slug}
                        id={drip.slug}
                        className="group rounded-lg border border-[#8B6F86]/10 bg-white/50 p-4 transition-colors hover:border-[#8B6F86]/25 scroll-mt-24"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-display text-base font-medium text-[#333333]">
                            {drip.name}
                          </h3>
                          <span className="text-sm font-medium tabular-nums text-[#8B6F86]">
                            ₦{drip.price.toLocaleString("en-NG")}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-[#333333]/65">
                          {drip.description}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                          <p className="text-xs text-[#333333]/50">
                            {drip.benefits.slice(0, 3).join(" · ")}
                            {drip.treatmentTime && <span> · {drip.treatmentTime}</span>}
                          </p>
                          <a
                            href={waLink(bookingMessage(drip.name, service.name))}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#8B6F86] transition-all hover:gap-2.5"
                          >
                            Book now
                            <ArrowRight size={11} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section: Lymphatic Detail */}
              {service.lymphaticDetail && (
                <section>
                  <SectionHeader title={service.lymphaticDetail.eyebrow} icon={<Info size={13} />} />
                  <SectionDivider />
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-medium text-[#333333]">
                      {service.lymphaticDetail.title}
                    </h3>
                    <p className="mt-0.5 text-sm italic text-[#8B6F86]/60">
                      &ldquo;{service.lymphaticDetail.strapline}&rdquo;
                    </p>
                    
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#333333]/70">
                      {service.lymphaticDetail.intro}
                    </p>
                    
                    {/* Ideal For */}
                    <div className="mt-4">
                      <p className="text-xs font-medium text-[#8B6F86]">Ideal for</p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {service.lymphaticDetail.who.map((item) => (
                          <span 
                            key={item} 
                            className="rounded-full bg-[#F8EDEF]/40 px-3 py-0.5 text-xs text-[#333333]/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* What to Expect */}
                    <div className="mt-4">
                      <p className="text-xs font-medium text-[#8B6F86]">What to expect</p>
                      <div className="mt-1.5 grid gap-2 sm:grid-cols-2">
                        {service.lymphaticDetail.expect.map((item, idx) => (
                          <div key={idx} className="rounded-lg border border-[#8B6F86]/10 bg-white/30 p-3">
                            <p className="text-xs font-medium text-[#8B6F86]">
                              {String(idx + 1).padStart(2, "0")} · {item.step}
                            </p>
                            <p className="mt-0.5 text-sm text-[#333333]/65">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 max-w-xl text-sm italic leading-relaxed text-[#333333]/55">
                      {service.lymphaticDetail.why}
                    </p>
                  </div>
                </section>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="mt-10 border-t border-[#8B6F86]/10 pt-6 lg:hidden">
              <a
                href={waLink(bookingMessage(service.name))}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#8B6F86] px-6 text-sm font-medium text-white transition-colors hover:bg-[#7a5f75]"
              >
                <MessageCircle size={15} />
                Book this treatment
              </a>
            </div>
          </div>

          {/* Sidebar — Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-[#8B6F86]/10 bg-[#F8EDEF]/15 p-6 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Price */}
                {service.price && (
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#333333]/35">
                      Price
                    </p>
                    <p className="mt-0.5 font-display text-2xl font-medium tabular-nums text-[#8B6F86]">
                      {service.price}
                    </p>
                  </div>
                )}

                {/* Quick Info */}
                <div className="space-y-3">
                  {facts
                    .filter((f) => f.value)
                    .map((fact) => (
                      <div key={fact.label} className="flex items-center gap-2.5">
                        {fact.icon && (
                          <span className="text-[#8B6F86]/35">{fact.icon}</span>
                        )}
                        <div>
                          <dt className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#333333]/35">
                            {fact.label}
                          </dt>
                          <dd className="text-sm leading-snug text-[#333333]/70">
                            {fact.value}
                          </dd>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Note */}
                {service.note && (
                  <p className="border-t border-[#8B6F86]/10 pt-4 text-xs italic leading-relaxed text-[#333333]/45">
                    {service.note}
                  </p>
                )}

                {/* CTA */}
                <a
                  href={waLink(bookingMessage(service.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#8B6F86] px-6 text-sm font-medium text-white transition-colors hover:bg-[#7a5f75]"
                >
                  <MessageCircle size={15} />
                  Book this treatment
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Treatments */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-[#8B6F86]/10 pt-8 sm:mt-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#333333]/35">
              You might also consider
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group flex items-center justify-between rounded-lg border border-[#8B6F86]/10 px-4 py-3 transition-colors hover:border-[#8B6F86]/25 hover:bg-[#F8EDEF]/15"
                >
                  <span className="text-sm font-medium text-[#333333] transition-colors group-hover:text-[#8B6F86]">
                    {item.name}
                  </span>
                  <ArrowRight
                    size={13}
                    className="shrink-0 text-[#8B6F86] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Booking Bar — Mobile */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#8B6F86]/10 bg-white/90 px-5 py-3 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-[#333333]">{service.name}</p>
            {service.price && (
              <p className="text-xs font-medium tabular-nums text-[#8B6F86]">{service.price}</p>
            )}
          </div>
          <a
            href={waLink(bookingMessage(service.name))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#8B6F86] px-5 text-sm font-medium text-white transition-colors hover:bg-[#7a5f75]"
          >
            <MessageCircle size={14} />
            Book
          </a>
        </div>
      </div>
    </main>
  );
}