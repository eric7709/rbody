import Image from "next/image";
import { ImageIcon, CheckCircle } from "lucide-react";
import { beforeAfter } from "@/lib/beforeAfter";

export default function BeforeAfter() {
  return (
    <section id="results" className="relative bg-[#F8EDEF] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-widest text-[#8B6F86]">
            Real Results
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-[#333333] sm:text-4xl">
            Transformations From Our Clients
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#333333]/70">
            Shared with client consent. Individual results vary depending on body
            type, treatment plan, and consistency.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
          {beforeAfter.map((b, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CDB7C8]/40 bg-white shadow-xs transition-shadow duration-300 hover:shadow-md"
            >
              {/* Card Header */}
              <div className="border-b border-[#CDB7C8]/30 bg-[#F8EDEF]/50 px-5 py-3 text-center">
                <h3 className="font-display text-base font-medium text-[#333333]">
                  {b.title}
                </h3>
                <p className="text-xs font-medium text-[#8B6F86]">{b.meta}</p>
              </div>

              {/* Image Area - Standardized uniform container */}
              <div className="w-full h-[350px] bg-gray-400/200">
                <div className="relative w-full h-full overflow-hidden bg-white">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover scale-[107%] object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>


              {/* Card Footer */}
              <div className="flex items-center justify-center gap-1.5 border-t border-[#CDB7C8]/30 bg-[#F8EDEF]/30 px-4 py-2.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#8B6F86]" />
                <span className="text-[11px] font-medium text-[#333333]/60">
                  Client permission on file
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#333333]/50">
          Individual results vary depending on body type, treatment plan, and consistency.
        </p>
      </div>
    </section>
  );
}