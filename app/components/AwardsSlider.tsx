"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 5000;

type AwardsSliderProps = {
  images: string[];
};

export function AwardsSlider({ images }: AwardsSliderProps) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setSlide((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [slide, paused, images.length]);

  return (
    <div
      className="relative flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-1 h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          key={`awards-${slide}`}
          className="h-full bg-amber-500"
          style={{
            animation: `sliderProgress ${SLIDE_INTERVAL_MS}ms linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>
      <div className="relative h-64 overflow-hidden rounded-2xl bg-linear-to-br from-amber-50 to-yellow-50 shadow-lg shadow-amber-100 sm:h-80">
        <Image
          src={images[slide]}
          alt={`IEEE EUI award ${slide + 1} of ${images.length}`}
          fill
          className="object-contain p-3 sm:p-6"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous award"
            onClick={() =>
              setSlide((current) => (current - 1 + images.length) % images.length)
            }
            className="rounded-full bg-gray-200 px-3 py-2 text-gray-700 transition hover:bg-gray-300"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next award"
            onClick={() => setSlide((current) => (current + 1) % images.length)}
            className="rounded-full bg-gray-200 px-3 py-2 text-gray-700 transition hover:bg-gray-300"
          >
            →
          </button>
        </div>
        <div className="flex gap-1">
          {images.map((image, i) => (
            <span
              key={image}
              className={`h-2 w-2 rounded-full ${i === slide ? "bg-amber-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
