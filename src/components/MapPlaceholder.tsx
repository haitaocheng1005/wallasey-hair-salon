import { salon } from "@/data/salon";
import { Icon } from "./Icon";

export function MapPlaceholder() {
  return (
    <a
      href={salon.mapHref}
      target="_blank"
      rel="noreferrer"
      className="focus-ring group relative flex min-h-80 overflow-hidden rounded-lg border border-white/10 bg-salon-charcoal transition hover:border-salon-pink/60"
      aria-label="Open Whitesea Hair Salon location in Google Maps"
    >
      <div className="absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(247,214,223,0.1)_1px,transparent_1px),linear-gradient(rgba(247,214,223,0.1)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>
      <div className="relative z-10 m-auto max-w-md p-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-salon-pink text-salon-black transition group-hover:bg-white">
          <Icon name="map-pinned" size={26} aria-hidden="true" />
        </span>
        <h2 className="font-display mt-5 text-3xl font-semibold text-white">
          Google Map
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          27 Mersey Crown Avenue, Liverpool L8 7QZ, United Kingdom
        </p>
      </div>
    </a>
  );
}
