import React from "react";
import Image from "next/image";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
];

const labels = [
  "RBody Office",
  "Waiting Room",
  "Treatment Room",
  "Queens Bed",
  "Queens Bed Double",
];

function Photo({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
        <Image
          src={images[index]}
          alt={labels[index]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <span className="text-sm font-semibold text-white drop-shadow-lg md:text-base">
            {labels[index]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3 text-[#8B6F86]">Gallery</p>

          <h2 className="font-display text-3xl leading-tight text-[#333333] sm:text-4xl">
            Inside RBody Clinic
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#8B6F86]/30" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:h-[690px] md:grid-cols-3 md:grid-rows-3">
          <Photo index={0} className="md:col-span-2 md:row-span-2" />
          <Photo index={1} className="md:row-span-2" />
          <Photo index={2} />
          <Photo index={3} />
          <Photo index={4} />
        </div>
      </div>
    </section>
  );
}