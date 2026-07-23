import type { Metadata } from "next";
import { Check, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWave from "@/components/SectionWave";
import { lymphaticDetail, waLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lymphatic Drainage Massage — Rbody Clinic",
  description: lymphaticDetail.intro,
};

export default function LymphaticDrainagePage() {
  const d = lymphaticDetail;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-14 md:pt-20">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-terracotta"
          >
            <ArrowLeft size={15} /> Back to treatments
          </Link>

          <p className="eyebrow mb-4 mt-8">{d.eyebrow}</p>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            {d.title}
          </h1>
          <p className="mt-3 font-display text-xl italic text-clay-deep">
            {d.strapline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
            {d.intro}
          </p>

          <a
            href={waLink("Hi Rbody, I'd like to book a Lymphatic Drainage Massage.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={17} /> Book This Service
          </a>
        </section>

        <section className="bg-sand">
          <SectionWave tone="ivory" flip />
          <div className="mx-auto max-w-4xl px-6 pb-16 pt-2">
            <h2 className="font-display text-2xl text-ink">Benefits</h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check size={16} className="mt-0.5 shrink-0 text-terracotta" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink">Who is this treatment for?</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {d.who.map((w) => (
              <span
                key={w}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft"
              >
                {w}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-ink text-ivory">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="font-display text-2xl">What to expect</h2>
            <div className="mt-8 divide-y divide-line-on-dark border-y border-line-on-dark">
              {d.expect.map((e, i) => (
                <div
                  key={e.step}
                  className="grid gap-2 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start sm:gap-6"
                >
                  <span className="font-display text-xl text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg">{e.step}</h3>
                  <p className="text-sm leading-relaxed text-ivory/70">{e.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink">
            Why choose Rbody&rsquo;s Lymphatic Drainage Massage?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {d.why}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hi Rbody, I'd like to book a Lymphatic Drainage Massage.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-clay-deep/30 px-6 py-3.5 text-sm font-medium text-ink hover:border-terracotta hover:text-terracotta"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
