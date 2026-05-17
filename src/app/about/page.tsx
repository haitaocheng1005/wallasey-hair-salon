import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/ContactBand";
import { Icon, type IconName } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Our Wallasey Hair Salon | Experienced Local Hairdressers",
  description:
    "Learn more about our experienced Wallasey hair salon, offering professional, patient, and stylish hair services for women of all ages.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Our Salon"
        title="Experienced local hairdressers with a patient, polished approach."
        description="We are a well-established hair salon based near Wallasey and Liverpool, proudly serving local clients for many years."
        image="/salon/salon-team.webp"
        imageAlt="Professional Whitesea Hair Salon team portrait"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Brand story"
              title="A salon built around listening, advice, and beautiful results."
            />
            <div className="mt-5 grid gap-5 text-base leading-8 text-white/72">
              <p>
                We are a well-established hair salon based in Wallasey, proudly
                serving local clients for many years. Our salon combines
                professional hairdressing experience with a warm, friendly, and
                patient approach.
              </p>
              <p>
                We understand that every client has different hair needs and
                personal style preferences. That is why we take time to listen,
                advise, and create a look that suits you.
              </p>
              <p>
                Our goal is not only to provide a beautiful hairstyle, but also
                to make every client feel comfortable, cared for, and confident
                after every visit.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/salon/styling-service.webp"
              alt="Whitesea stylist blow drying and styling client hair"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={78}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-salon-charcoal py-12 sm:py-16">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {([
            {
              title: "Professional Experience",
              description:
                "Many years of women's hairdressing experience across cuts, colour, styling, and treatments.",
              icon: "scissors" satisfies IconName,
            },
            {
              title: "Service Promise",
              description:
                "Friendly care, clear consultation, careful technique, and practical aftercare advice.",
              icon: "heart-handshake" satisfies IconName,
            },
            {
              title: "Modern Style",
              description:
                "Fashion-aware colour and styling for women who want to feel stylish, confident, and beautiful.",
              icon: "sparkles" satisfies IconName,
            },
          ] as const).map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-salon-black p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
                  <Icon name={item.icon} size={21} aria-hidden="true" />
                </span>
                <h2 className="font-display mt-5 text-2xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.description}
                </p>
              </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
