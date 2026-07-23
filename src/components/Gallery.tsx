import { galleryItems } from "@/lib/content";
import { iconMap } from "./IconMap";

// Grid layout configuration for a 3x3 layout (9 slots)
const gridSpans = [
  "sm:row-span-2", // Pos 0: Tall (Row 1-2, Col 1)
  "",              // Pos 1: Normal
  "",              // Pos 2: Normal
  "",              // Pos 3: Normal
  "sm:col-span-2", // Pos 4: Wide (Row 2, Col 2-3)
  "sm:row-span-2", // Pos 5: Tall (Row 2-3, Col 1)
  "",              // Pos 6: Normal
  "",              // Pos 7: Normal
  "",              // Pos 8: Normal
];

// Background colors updated for 9 tiles
const tileColors = [
  "bg-[#F8EDEF]",
  "bg-[#CDB7C8]/30",
  "bg-[#8B6F86]",
  "bg-[#8B6F86]",
  "bg-[#F8EDEF]",
  "bg-[#CDB7C8]/30",
  "bg-[#F8EDEF]",
  "bg-[#8B6F86]",
  "bg-[#CDB7C8]/30",
];

// Video indices assigned to specific grid tiles
const VIDEO_POSITIONS = [0, 3, 5];

export default function Gallery() {
  return (
    <section 
      id="gallery" 
      className="mx-auto max-w-6xl bg-white px-4 py-20 md:py-28"
    >
      {/* Header Section */}
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

      {/* Gallery Grid: Explicit 3-column layout on sm+ screens */}
      <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[12rem] sm:grid-cols-3">
        {galleryItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          const isDark = tileColors[index] === "bg-[#8B6F86]";
          const hasVideo = "video" in item && !!item?.video;

          return (
            <div
              key={`${item.label}-${index}`}
              className={`relative flex flex-col overflow-hidden rounded-sm ${tileColors[index] || "bg-[#F8EDEF]"} ${gridSpans[index] || ""}`}
            >
              {/* Media Content */}
              {hasVideo ? (
                <VideoTile video={item.video} />
              ) : (
                <ImagePlaceholder 
                  Icon={Icon} 
                  isDark={isDark} 
                />
              )}

              {/* Bottom Label */}
              <TileLabel label={item.label} isDark={isDark} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Sub-component: Video Tile
function VideoTile({ video }: { video: string }) {
  return (
    <div className="relative flex-1 w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
}

// Sub-component: Image Placeholder
function ImagePlaceholder({ 
  Icon, 
  isDark 
}: { 
  Icon: React.ComponentType<{ size: number }>;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-1 items-center justify-center p-5">
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 rounded-sm border border-dashed ${
          isDark
            ? "border-white/30 text-white/70"
            : "border-[#333333]/15 text-[#333333]/50"
        }`}
      >
        {Icon && <Icon size={24} />}
        <span
          className={`text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
            isDark ? "text-white/55" : "text-[#333333]/55"
          }`}
        >
          Image Placeholder
        </span>
      </div>
    </div>
  );
}

// Sub-component: Tile Label
function TileLabel({ 
  label, 
  isDark 
}: { 
  label: string;
  isDark: boolean;
}) {
  return (
    <div
      className={`relative z-10 border-t px-4 py-3 backdrop-blur-xs ${
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
        {label}
      </p>
    </div>
  );
}