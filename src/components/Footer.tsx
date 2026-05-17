import { navItems, salon, socialLinks } from "@/data/salon";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-salon-black">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <a href="/" className="focus-ring inline-flex items-center gap-3 rounded-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
              <Icon name="scissors" size={21} aria-hidden="true" />
            </span>
            <span>
              <span className="font-display block text-xl font-semibold">
                Whitesea Hair Salon
              </span>
              <span className="text-xs font-bold uppercase tracking-normal text-salon-pink">
                Wallasey & Liverpool
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/66">
            A modern women&apos;s hair salon offering patient care, detailed
            consultation, colour, styling, treatments, and aftercare advice.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-salon-pink transition hover:border-salon-pink hover:bg-salon-pink hover:text-salon-black"
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={social.icon} size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-normal text-salon-pink">
            Pages
          </h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg py-1 text-sm text-white/68 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-normal text-salon-pink">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <a
              href={salon.phoneHref}
              className="focus-ring flex gap-3 rounded-lg transition hover:text-white"
            >
              <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-salon-pink" />
              {salon.phoneDisplay}
            </a>
            <a
              href={salon.mapHref}
              className="focus-ring flex gap-3 rounded-lg transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-salon-pink" />
              <span>{salon.addressLines.join(", ")}</span>
            </a>
            <p className="flex gap-3">
              <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-salon-pink" />
              {salon.openingHours}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Whitesea Hair Salon.</p>
          <p>Wallasey Hair Salon / Women Hair Salon Wallasey / Liverpool Hair Salon</p>
        </div>
      </div>
    </footer>
  );
}
