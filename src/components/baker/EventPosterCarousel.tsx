import { useCallback, useState } from "react";
import type { EventPoster } from "@lib/eventPosters";

type Props = {
  posters: EventPoster[];
};

export default function EventPosterCarousel({ posters }: Props) {
  const [index, setIndex] = useState(0);
  const count = posters.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  if (count === 0) return null;

  const current = posters[index];
  const imageAlt = current.alt || current.caption || "Event poster";

  return (
    <div className="event-poster-carousel mx-auto w-full max-w-[720px] px-2 sm:px-4 mb-6 intersect:animate-fadeUp opacity-0">
      <div className="relative">
        <ol
          className="mb-3 flex list-none flex-wrap justify-center gap-2 p-0"
          aria-label="Slide indicators"
        >
          {posters.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                className={`h-2.5 w-2.5 shrink-0 rounded-full border-0 p-0 transition-colors ${
                  i === index
                    ? "bg-text-dark dark:bg-darkmode-text-dark"
                    : "bg-white/35 hover:bg-white/50 dark:bg-white/25"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            </li>
          ))}
        </ol>

        <div className="relative w-full">
          <div
            className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-xl border-[clamp(8px,2vw,16px)] border-body dark:border-darkmode-body bg-body dark:bg-darkmode-body"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <img
              src={current.image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-contain"
              decoding="async"
            />
          </div>

          <button
            type="button"
            className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/45 p-0 text-white transition-colors hover:bg-black/65 sm:left-2 sm:h-11 sm:w-11"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            <span
              className="ml-[-3px] block h-0 w-0 border-y-8 border-r-[12px] border-y-transparent border-r-white"
              aria-hidden
            />
          </button>
          <button
            type="button"
            className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/45 p-0 text-white transition-colors hover:bg-black/65 sm:right-2 sm:h-11 sm:w-11"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            <span
              className="mr-[-3px] block h-0 w-0 border-y-8 border-l-[12px] border-y-transparent border-l-white"
              aria-hidden
            />
          </button>
        </div>

        {current.caption ? (
          <p className="mt-2 rounded-lg bg-black/65 px-3 py-2.5 text-center text-sm text-white sm:text-base">
            {current.caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
