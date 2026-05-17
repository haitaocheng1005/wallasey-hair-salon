import { salon, socialLinks } from "@/data/salon";
import { ButtonLink } from "./Buttons";
import { Icon } from "./Icon";

export function ContactBand() {
  return (
    <section className="bg-salon-pink py-12 text-salon-black">
      <div className="container-shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-normal">
            Ready for your next look?
          </p>
          <h2 className="font-display mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
            Book your appointment with Whitesea Hair Salon.
          </h2>
        </div>
        <div className="grid gap-3">
          <a
            href={salon.phoneHref}
            className="focus-ring flex min-h-12 items-center gap-3 rounded-lg bg-salon-black px-4 py-3 font-bold text-white transition hover:bg-salon-charcoal"
          >
            <Icon name="phone" size={19} aria-hidden="true" />
            {salon.phoneDisplay}
          </a>
          <a
            href={salon.mapHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring flex min-h-12 items-center gap-3 rounded-lg bg-white px-4 py-3 font-bold text-salon-black transition hover:bg-salon-black hover:text-white"
          >
            <Icon name="map-pin" size={19} aria-hidden="true" />
            27 Mersey Crown Avenue, Liverpool L8 7QZ
          </a>
          <ButtonLink
            href="/contact#booking-form"
            variant="secondary"
            className="border-salon-black bg-transparent text-salon-black hover:bg-salon-black hover:text-white"
          >
            <Icon name="calendar-heart" size={17} aria-hidden="true" />
            Booking Form
          </ButtonLink>
          <div className="flex gap-3 pt-1">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-salon-black/20 transition hover:bg-salon-black hover:text-white"
                aria-label={social.label}
              >
                <Icon name={social.icon} size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
