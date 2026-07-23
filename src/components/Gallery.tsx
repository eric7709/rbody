import { galleryItems } from "@/lib/content";
import { iconMap } from "./IconMap";

const spans = [
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
];

const tones = [
  "bg-[#F8EDEF]",
  "bg-[#CDB7C8]/30",
  "bg-[#8B6F86]",
  "bg-[#F8EDEF]",
  "bg-[#8B6F86]",
  "bg-[#CDB7C8]/30",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl bg-white px-4 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow mb-4 text-[#8B6F86]">Gallery</p>

          <h2 className="max-w-md font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
            Inside the clinic
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-[#333333]/70 md:text-right">
          A look at our space, our treatments in progress, and the care behind
          every session — swap these tiles for real photos and clips.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[12rem]">
        {galleryItems.map((item, i) => {
          const Icon = iconMap[item.icon];
          const isDark = tones[i] === "bg-[#8B6F86]";

          return (
            <div
              key={item.label}
              className={`relative flex flex-col overflow-hidden rounded-sm ${tones[i]} ${spans[i]}`}
            >
              <div className="flex flex-1 items-center justify-center p-5">
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-3 rounded-sm border border-dashed ${
                    isDark
                      ? "border-white/30 text-white/70"
                      : "border-[#333333]/15 text-[#333333]/50"
                  }`}
                >
                  <Icon size={24} />

                  <span
                    className={`text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
                      isDark ? "text-white/55" : "text-[#333333]/55"
                    }`}
                  >
                    Image Placeholder
                  </span>
                </div>
              </div>

              <div
                className={`border-t px-4 py-3 ${
                  isDark
                    ? "border-white/15 bg-black/10"
                    : "border-[#333333]/10 bg-white/40"
                }`}
              >
                <p
                  className={`text-center text-[0.7rem] font-medium uppercase tracking-wide ${
                    isDark ? "text-white/80" : "text-[#333333]/80"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
