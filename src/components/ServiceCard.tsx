import Image from "next/image";
import { Icon } from "./Icon";
import type { services } from "@/data/salon";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] image-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} at Whitesea Hair Salon`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          quality={78}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-salon-black/70 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
          <Icon name={service.icon} size={20} aria-hidden="true" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white">
            {service.title}
          </h3>
          <span className="rounded-lg bg-salon-pink/12 px-3 py-1 text-sm font-bold text-salon-pink">
            {service.price}
          </span>
        </div>
        <p className="mt-3 min-h-20 text-sm leading-7 text-white/68">
          {service.description}
        </p>
        <a
          href="/contact#booking-form"
          className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold uppercase tracking-normal text-salon-pink transition hover:text-white"
        >
          Book service <Icon name="arrow-right" size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
