import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Icon } from "@/components/Icon";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { contactCards, salon, socialLinks } from "@/data/salon";

export const metadata: Metadata = {
  title: "Book Hair Appointment in Wallasey | Contact Our Salon",
  description:
    "Contact our Wallasey hair salon to book an appointment, ask about services, find our location, and connect with us on Facebook and Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Booking"
        title="Book Your Appointment"
        description="Ready for a new look? Contact us today to book your appointment or ask about our services. We are happy to help you choose the right treatment, style, or consultation."
        image="/salon/booking-panel.webp"
        imageAlt="Whitesea Hair Salon booking card in black and pink"
        primaryHref="#booking-form"
        primaryLabel="Booking Form"
        secondaryHref={salon.phoneHref}
        secondaryLabel={salon.phoneDisplay}
      />

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-salon-pink/60 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
                  <Icon name={card.icon} size={21} aria-hidden="true" />
                </span>
                <h2 className="font-display mt-5 text-2xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {card.value}
                </p>
              </a>
          ))}
        </div>
      </section>

      <section className="bg-salon-charcoal py-12 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Find us"
              title="Visit Whitesea Hair Salon"
              description="Call, message, or use the booking form. You can also open the address directly in Google Maps."
            />
            <div className="mt-8 grid gap-4 text-white/72">
              <a
                href={salon.phoneHref}
                className="focus-ring flex min-h-12 gap-3 rounded-lg transition hover:text-white"
              >
                <Icon name="phone" className="mt-1 shrink-0 text-salon-pink" size={20} />
                <span>{salon.phoneDisplay}</span>
              </a>
              <a
                href={salon.mapHref}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex min-h-12 gap-3 rounded-lg transition hover:text-white"
              >
                <Icon name="map-pin" className="mt-1 shrink-0 text-salon-pink" size={20} />
                <span>{salon.addressLines.join(", ")}</span>
              </a>
              <p className="flex min-h-12 gap-3">
                <Icon name="clock" className="mt-1 shrink-0 text-salon-pink" size={20} />
                <span>{salon.openingHours}</span>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-lg border border-salon-pink/50 text-salon-pink transition hover:bg-salon-pink hover:text-salon-black"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={20} aria-hidden="true" />
                  </a>
              ))}
            </div>
          </div>
          <MapPlaceholder />
        </div>
      </section>

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
