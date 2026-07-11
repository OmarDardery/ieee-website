"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Member } from "../team-data";

const SLIDE_INTERVAL_MS = 5000;

type PersonSliderProps = {
  members: Member[];
  title: string;
};

export function PersonSlider({ members, title }: PersonSliderProps) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = members.length > 1;
  const member = members[slide];

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const timer = setTimeout(() => {
      setSlide((current) => (current + 1) % members.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [slide, paused, hasMultiple, members.length]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h3 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">
        {title}
      </h3>
      {hasMultiple && (
        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            key={`${title}-${slide}`}
            className="h-full bg-blue-600"
            style={{
              animation: `sliderProgress ${SLIDE_INTERVAL_MS}ms linear forwards`,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        </div>
      )}
      <div className="relative flex flex-col items-center gap-4 sm:gap-6">
        <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 shadow-lg shadow-blue-100 sm:h-80 sm:w-64">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, 256px"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900 sm:text-xl">
            {member.name}
          </p>
          <p className="text-xs font-semibold text-blue-600 sm:text-sm">
            {member.role}
          </p>
        </div>
        {hasMultiple && (
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              aria-label={`Previous ${title} member`}
              onClick={() =>
                setSlide((current) => (current - 1 + members.length) % members.length)
              }
              className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95"
            >
              ←
            </button>
            <div className="flex items-center gap-1">
              {members.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  aria-label={`Show ${m.name}`}
                  aria-current={i === slide}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition ${
                    i === slide ? "w-6 bg-blue-600" : "w-2 bg-blue-200"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label={`Next ${title} member`}
              onClick={() => setSlide((current) => (current + 1) % members.length)}
              className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
