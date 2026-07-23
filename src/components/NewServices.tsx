import { MessageCircle, Check, Clock, Calendar, MapPin, Info, Sparkles, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/content";
import SectionWave from "./SectionWave";
import { Service } from "../lib/types";
import { services } from "../lib/services";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F8EDEF] py-20 md:py-28">
      <SectionWave tone="white" flip />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#8B6F86]" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#8B6F86]">
              Our Offerings
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-[#333333] sm:text-4xl">
            Tailored Treatments & <br className="hidden sm:block" />
            <span className="text-[#8B6F86]">Luxury Care</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#333333]/70">
            Designed to enhance your natural beauty, support your recovery, and
            elevate your wellness journey from the inside out.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="mt-16 space-y-6">
          {services.map((service: Service, i: number) => (
            <div
              key={service.slug}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-[#CDB7C8]/20"
            >
              {/* Subtle accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8EDEF]/0 via-[#F8EDEF]/0 to-[#F8EDEF]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative p-6 md:p-10">
                {/* Main Service Card Header */}
                <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8EDEF] font-display text-sm font-semibold text-[#8B6F86]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-medium text-[#333333] group-hover:text-[#8B6F86] transition-colors">
                          {service.name}
                        </h3>
                        {service.price && (
                          <span className="inline-block mt-1 text-sm font-medium text-[#8B6F86]">
                            {service.price}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#333333]/80">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8EDEF] px-3 py-1 text-xs font-medium text-[#333333]">
                        <Info size={12} className="text-[#8B6F86]" />
                        Best for: {service.bestFor}
                      </span>
                      {service.note && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#333333]/60">
                          <Info size={12} className="text-[#8B6F86]" />
                          {service.note}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <div className="flex flex-col items-start justify-center gap-4 border-t border-[#CDB7C8]/20 pt-4 md:items-end md:border-t-0 md:pt-0">
                    <a
                      href={waLink(
                        `Hi Rbody, I'd like to inquire about ${service.name}.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-[#8B6F86] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#8B6F86]/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle size={16} className="transition-transform group-hover/btn:scale-110" /> 
                      Book Service
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* General Metadata Details */}
                {(service.treatmentTime ||
                  service.recommendedSessions ||
                  service.minimumStay) && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#CDB7C8]/20 pt-5 text-xs text-[#333333]/70">
                    {service.treatmentTime && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8EDEF]/50 px-3 py-1">
                        <Clock size={14} className="text-[#8B6F86]" />
                        {service.treatmentTime}
                      </span>
                    )}
                    {service.recommendedSessions && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8EDEF]/50 px-3 py-1">
                        <Calendar size={14} className="text-[#8B6F86]" />
                        {service.recommendedSessions}
                      </span>
                    )}
                    {service.minimumStay && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8EDEF]/50 px-3 py-1">
                        <MapPin size={14} className="text-[#8B6F86]" />
                        {service.minimumStay}
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
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#333333]/80"
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-[#8B6F86]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Included Items */}
                {service.included && (
                  <div className="mt-6 rounded-xl bg-gradient-to-br from-[#F8EDEF]/60 to-white p-5 border border-[#CDB7C8]/20">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                      What's Included
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {service.included.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-[#333333]/80"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6F86]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Treatment Areas */}
                {service.treatmentAreas && (
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                      Treatment Areas
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.treatmentAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-[#F8EDEF] px-3 py-1 text-xs font-medium text-[#333333] hover:bg-[#8B6F86] hover:text-white transition-colors cursor-default"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nested IV Drips */}
                {service.drips && (
                  <div className="mt-8 border-t border-[#CDB7C8]/20 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                        Available IV Infusions
                      </h4>
                      <span className="text-[10px] text-[#333333]/40">
                        {service.drips.length} options
                      </span>
                    </div>
                    
                    <div className="space-y-6">
                      {service.drips.map((drip, idx) => (
                        <div
                          key={drip.slug}
                          className="group/drip rounded-xl bg-[#F8EDEF]/30 p-5 transition-all hover:bg-[#F8EDEF]/60 border border-[#CDB7C8]/10"
                        >
                          <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                            {/* Number and Name */}
                            <div className="flex items-start gap-3 md:flex-col md:items-center">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#8B6F86] shadow-sm">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <div className="md:text-center">
                                <h5 className="font-display text-lg font-medium text-[#333333]">
                                  {drip.name}
                                </h5>
                                <span className="text-sm font-semibold text-[#8B6F86]">
                                  ₦{drip.price.toLocaleString("en-NG")}
                                </span>
                              </div>
                            </div>

                            {/* Description and Benefits */}
                            <div className="space-y-2">
                              <p className="text-xs text-[#333333]/70">
                                <span className="font-medium text-[#333333]">Best for:</span> {drip.bestFor}
                              </p>
                              <p className="text-xs leading-relaxed text-[#333333]/60">
                                {drip.description}
                              </p>
                              {drip.note && (
                                <p className="text-[11px] italic text-[#333333]/40">
                                  {drip.note}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {drip.benefits.slice(0, 3).map((b) => (
                                  <span key={b} className="text-[10px] text-[#333333]/50 bg-white/60 px-2 py-0.5 rounded-full">
                                    {b}
                                  </span>
                                ))}
                                {drip.benefits.length > 3 && (
                                  <span className="text-[10px] text-[#8B6F86]/60">
                                    +{drip.benefits.length - 3} more
                                  </span>
                                )}
                              </div>
                              {drip.treatmentTime && (
                                <span className="inline-flex items-center gap-1 text-[11px] text-[#333333]/40">
                                  <Clock size={12} />
                                  {drip.treatmentTime}
                                </span>
                              )}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-3 md:flex-col md:items-end">
                              <a
                                href={waLink(
                                  `Hi Rbody, I'd like to book the ${drip.name}.`
                                )}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-fit w-full items-center justify-center gap-2 rounded-full border-2 border-[#8B6F86]/20 px-4 py-2 text-xs font-medium text-[#333333] transition-all hover:border-[#8B6F86] hover:bg-[#8B6F86] hover:text-white md:w-auto"
                              >
                                <MessageCircle size={14} /> 
                                <span className="hidden sm:inline">Book Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lymphatic Detail */}
                {service.lymphaticDetail && (
                  <div className="mt-8 rounded-xl bg-gradient-to-br from-[#F8EDEF]/60 to-white p-6 border border-[#CDB7C8]/20">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6F86]">
                            {service.lymphaticDetail.eyebrow}
                          </p>
                          <h4 className="mt-1 font-display text-2xl font-medium text-[#333333]">
                            {service.lymphaticDetail.title}
                          </h4>
                          <p className="text-sm font-medium italic text-[#8B6F86]">
                            "{service.lymphaticDetail.strapline}"
                          </p>
                        </div>
                        <Sparkles size={24} className="text-[#8B6F86]/40" />
                      </div>

                      <p className="text-sm leading-relaxed text-[#333333]/80">
                        {service.lymphaticDetail.intro}
                      </p>

                      {/* Who it's for */}
                      <div>
                        <span className="text-xs font-semibold text-[#333333]">
                          Ideal for:
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {service.lymphaticDetail.who.map((w, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#8B6F86] shadow-sm"
                            >
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* What to expect */}
                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8B6F86]">
                          What to Expect
                        </h5>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                          {service.lymphaticDetail.expect.map((item, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-white p-4 shadow-sm border border-[#CDB7C8]/10 transition-all hover:shadow-md hover:border-[#CDB7C8]/30"
                            >
                              <span className="text-xs font-semibold text-[#8B6F86]">
                                {item.step}
                              </span>
                              <p className="mt-1 text-xs text-[#333333]/70 leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Why choose */}
                      <div className="rounded-lg bg-white/60 p-4 border border-[#CDB7C8]/10">
                        <p className="text-xs italic leading-relaxed text-[#333333]/70">
                          {service.lymphaticDetail.why}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}