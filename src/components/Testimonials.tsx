import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="mx-auto max-w-6xl bg-white px-6 py-20 md:py-28">
      <p className="eyebrow mb-4 text-[#8B6F86]">Client Love</p>
      <h2 className="font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
        What our clients say
      </h2>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <figure className="border-l-2 border-[#8B6F86] pl-7">
          <div className="flex gap-1 text-[#8B6F86]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="font-display mt-4 text-2xl leading-snug text-[#333333] sm:text-3xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="block font-medium text-[#333333]">{featured.name}</span>
            <span className="block text-[#333333]/60">{featured.role}</span>
          </figcaption>
        </figure>

        <div className="space-y-8 divide-y divide-[#CDB7C8]/40">
          {rest.map((t) => (
            <figure key={t.name} className="pt-8 first:pt-0">
              <div className="flex gap-1 text-[#8B6F86]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-[#333333]/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-medium text-[#333333]">{t.name}</span>
                <span className="text-[#333333]/60"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
