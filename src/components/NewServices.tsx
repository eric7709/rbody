import { MessageCircle, Check, Clock, Calendar, MapPin, Info } from "lucide-react";
import { waLink } from "@/lib/content";
import SectionWave from "./SectionWave";
import { Service } from "../lib/types";
import { services } from "../lib/services";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F8EDEF] py-20 md:py-28">
      <SectionWave tone="white" flip />

      <div className="mx-auto max-w-6xl py-10 px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-widest text-[#8B6F86]">
            Our Offerings
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-[#333333] sm:text-4xl">
            Tailored Treatments & Luxury Care
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#333333]/70">
            Designed to enhance your natural beauty, support your recovery, and
            elevate your wellness journey from the inside out.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="mt-16 space-y-5">
          {services.map((service: Service, i: number) => (
            <div
              key={service.slug}
              className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-[#CDB7C8]/30 md:p-10"
            >
              {/* Main Service Card Header */}
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-semibold text-[#CDB7C8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#333333]">
                      {service.name}
                    </h3>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-[#333333]/80">
                    {service.description}
                  </p>

                  <p className="text-xs text-[#8B6F86] font-medium">
                    <strong className="text-[#333333]">Best for:</strong>{" "}
                    {service.bestFor}
                  </p>

                  {/* Main Service Note */}
                  {service.note && (
                    <p className="flex items-center gap-1.5 text-xs italic text-[#333333]/60">
                      <Info size={13} className="shrink-0 text-[#8B6F86]" />
                      {service.note}
                    </p>
                  )}
                </div>

                {/* Price and Primary CTA */}
                <div className="flex flex-col items-start justify-between gap-4 border-t border-[#CDB7C8]/20 pt-4 md:items-end md:border-t-0 md:pt-0">
                  {service.price && (
                    <span className="font-display text-lg font-semibold text-[#8B6F86]">
                      {service.price}
                    </span>
                  )}
                  <a
                    href={waLink(
                      `Hi Rbody, I'd like to inquire about ${service.name}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8B6F86] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#8B6F86]/90"
                  >
                    <MessageCircle size={16} /> Book Service
                  </a>
                </div>
              </div>

              {/* General Metadata Details */}
              {(service.treatmentTime ||
                service.recommendedSessions ||
                service.minimumStay) && (
                <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-[#CDB7C8]/30 pt-4 text-xs text-[#333333]/70">
                  {service.treatmentTime && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-[#8B6F86]" />
                      Duration: {service.treatmentTime}
                    </span>
                  )}
                  {service.recommendedSessions && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#8B6F86]" />
                      {service.recommendedSessions}
                    </span>
                  )}
                  {service.minimumStay && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#8B6F86]" />
                      Min. Stay: {service.minimumStay}
                    </span>
                  )}
                </div>
              )}

              {/* Key Benefits List */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                    Key Benefits
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#333333]/80"
                      >
                        <Check size={14} className="shrink-0 text-[#8B6F86]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included Items (Post-Op Care / Signature Sculpt) */}
              {service.included && (
                <div className="mt-6 rounded-xl bg-[#F8EDEF]/50 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                    What's Included
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {service.included.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#333333]/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#CDB7C8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatment Areas (Botox) */}
              {service.treatmentAreas && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                    Treatment Areas
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.treatmentAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[#F8EDEF] px-3 py-1 text-xs text-[#333333]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Nested IV Drips Menu */}
              {service.drips && (
                <div className="mt-8 border-t border-[#CDB7C8]/30 pt-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8B6F86]">
                    Available IV Infusions
                  </h4>
                  <div className="mt-4 divide-y divide-[#CDB7C8]/40 border-y border-[#CDB7C8]/40">
                    {service.drips.map((drip, idx) => (
                      <div
                        key={drip.slug}
                        className="group grid gap-6 py-8 md:grid-cols-[3rem_1fr_1fr_auto] md:items-start md:gap-8"
                      >
                        <span className="font-display text-xl text-[#CDB7C8]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h5 className="font-display text-xl text-[#333333]">
                            {drip.name}
                          </h5>
                          <p className="mt-1 text-xs text-[#8B6F86] font-medium">
                            <strong className="text-[#333333]">Best for:</strong>{" "}
                            {drip.bestFor}
                          </p>
                          <p className="mt-2 max-w-md text-xs leading-relaxed text-[#333333]/70">
                            {drip.description}
                          </p>
                          {drip.note && (
                            <p className="mt-2 max-w-md text-[11px] italic text-[#333333]/50">
                              {drip.note}
                            </p>
                          )}
                        </div>

                        <ul className="space-y-1.5 md:pt-1">
                          {drip.benefits.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-xs text-[#333333]/70"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#8B6F86]" />
                              {b}
                            </li>
                          ))}
                          {drip.treatmentTime && (
                            <li className="pt-1 text-[11px] text-[#333333]/50">
                              Treatment time: {drip.treatmentTime}
                            </li>
                          )}
                        </ul>

                        <div className="flex flex-col items-start gap-3 md:items-end">
                          <span className="font-display text-lg font-semibold text-[#8B6F86]">
                            ₦{drip.price.toLocaleString("en-NG")}
                          </span>
                          <a
                            href={waLink(
                              `Hi Rbody, I'd like to book the ${drip.name}.`
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-fit items-center gap-2 rounded-full border border-[#8B6F86]/30 px-4 py-2 text-xs font-medium text-[#333333] transition-colors hover:border-[#8B6F86] hover:text-[#8B6F86]"
                          >
                            <MessageCircle size={14} /> Book
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lymphatic Detail Sub-Section */}
              {service.lymphaticDetail && (
                <div className="mt-8 border-t border-[#CDB7C8]/30 pt-6">
                  <div className="rounded-2xl bg-[#F8EDEF]/60 p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6F86]">
                      {service.lymphaticDetail.eyebrow}
                    </p>
                    <h4 className="mt-1 font-display text-2xl font-medium text-[#333333]">
                      {service.lymphaticDetail.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium italic text-[#8B6F86]">
                      "{service.lymphaticDetail.strapline}"
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#333333]/80">
                      {service.lymphaticDetail.intro}
                    </p>

                    {/* Who it is for */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-[#333333]">
                        Ideal for:
                      </span>
                      {service.lymphaticDetail.who.map((w, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#8B6F86]"
                        >
                          {w}
                        </span>
                      ))}
                    </div>

                    {/* What to expect steps */}
                    <div className="mt-6">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                        What to Expect
                      </h5>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                        {service.lymphaticDetail.expect.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl bg-white p-3 shadow-xs border border-[#CDB7C8]/20"
                          >
                            <span className="text-xs font-semibold text-[#8B6F86]">
                              {item.step}
                            </span>
                            <p className="mt-1 text-[11px] text-[#333333]/70">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why choose this */}
                    <p className="mt-5 text-xs italic leading-relaxed text-[#333333]/70">
                      {service.lymphaticDetail.why}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}