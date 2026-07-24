import React from 'react';
import Image from 'next/image';

const images = [
  '/gallery1.jpeg',
  '/gallery2.jpg',
  '/gallery3.jpeg',
  '/gallery4.jpeg',
  '/gallery5.jpeg',
];

// Edit these to whatever captions you want under each photo
const labels = [
  'RBody Office',
  'Waiting Room',
  'Treatment Room',
  'Queens Bed ',
  'Queens Bed (Double)',
];

function Photo({ index, className = '' }: { index: number; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="relative flex-1 overflow-hidden rounded-lg">
        <Image
          src={images[index]}
          alt={labels[index]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
      <div className="p-3 text-center bg-gray-800 rounded-xl">
        <span className="text-center text-sm text-gray-100 font-semibold text-">{labels[index]}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4 w-full max-w-[1120px] mx-auto h-[690px]">
        <Photo index={0} className="col-span-2 row-span-2" />
        <Photo index={1} className="row-span-2" />
        <Photo index={2} />
        <Photo index={3} />
        <Photo index={4} />
      </div>
    </div>
  );
}