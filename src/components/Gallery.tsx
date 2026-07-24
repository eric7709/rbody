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
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:flex-1">
        <Image
          src={images[index]}
          alt={labels[index]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority={index === 0}
        />
      </div>

      <div className="rounded-xl bg-gray-800 px-4 py-3 text-center">
        <span className="text-sm font-semibold text-gray-100">
          {labels[index]}
        </span>
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