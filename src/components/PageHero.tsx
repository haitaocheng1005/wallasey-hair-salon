import Image from "next/image";
import { ButtonLink } from "./Buttons";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/contact#booking-form",
  primaryLabel = "Book Appointment",
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-salon-black">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={76}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-salon-black/64" />
      <div className="absolute inset-0 bg-linear-to-t from-salon-black via-salon-black/35 to-salon-black/10" />
      <div className="container-shell relative z-10 flex min-h-[48svh] items-end py-12 sm:min-h-[54svh] lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-normal text-salon-pink">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
