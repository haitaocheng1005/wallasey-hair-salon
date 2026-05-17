import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";
import { ContactBand } from "@/components/ContactBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { salon, services, whyChooseUs } from "@/data/salon";

export const metadata: Metadata = {
  title: "Wallasey Hair Salon | Modern Women's Hairdresser near Liverpool",
  description:
    "Professional women's hair salon in Wallasey offering haircuts, colouring, styling, treatments, and friendly expert service near Liverpool.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-salon-black">
        <Image
          src="/salon/hero-portrait-wide.webp"
          alt="Whitesea Hair Salon styled hair portrait with rose background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={76}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-salon-black/52" />
        <div className="absolute inset-0 bg-linear-to-r from-salon-black via-salon-black/62 to-salon-black/16" />
        <div className="container-shell relative z-10 grid min-h-[72svh] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-normal text-salon-pink">
              Fashion Hair Salon near Liverpool
            </p>
            <h1 className="font-display mt-4 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Whitesea Hair Salon
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Welcome to our hair salon in Wallasey. We are an experienced local
              salon offering professional hair services for women of all ages.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#booking-form">Book Appointment</ButtonLink>
              <ButtonLink href={salon.phoneHref} variant="secondary">
                <Icon name="phone" size={17} aria-hidden="true" />
                {salon.phoneDisplay}
              </ButtonLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-sm rounded-lg border border-white/14 bg-salon-black/74 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-salon-pink">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="star" size={18} filled aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-8 text-white">
                Patient consultation, polished colour work, and a relaxing salon
                experience designed to leave you confident.
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/72">
                <p className="flex gap-3">
                  <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-salon-pink" />
                  27 Mersey Crown Avenue, Liverpool L8 7QZ
                </p>
                <p className="flex gap-3">
                  <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-salon-pink" />
                  {salon.openingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-salon-charcoal py-12 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 sm:aspect-[16/12] lg:aspect-[4/5]">
            <Image
              src="/salon/salon-team.webp"
              alt="Whitesea Hair Salon professional team in black uniforms"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              quality={78}
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="About Whitesea"
              title="Modern hair care with a friendly local touch."
              description="Whether you are looking for a fresh haircut, a new colour, a stylish finish, or expert hair care advice, our team is here to help you feel confident and beautiful."
            />
            <p className="mt-5 text-base leading-8 text-white/70">
              With years of experience, patient service, and attention to
              detail, we aim to create a relaxing and enjoyable salon experience
              for every client.
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              About Our Salon <Icon name="arrow-right" size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Our services"
              title="Haircuts, colour, styling, treatments and consultation."
            />
            <ButtonLink href="/services" variant="ghost" className="sm:mb-1">
              View All Services <Icon name="arrow-right" size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-salon-charcoal py-12 sm:py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="Professional care from consultation to aftercare."
            align="center"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-salon-black p-5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
                    <Icon name={item.icon} size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Gallery"
              title="Colour work, styling, and salon moments."
              description="Explore recent hair styling, colour work, salon environment, and transformation results."
            />
            <a
              href="/gallery"
              className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-lg text-sm font-bold uppercase tracking-normal text-salon-pink transition hover:text-white"
            >
              Open Gallery <Icon name="arrow-right" size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8">
            <GalleryGrid limit={5} />
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
