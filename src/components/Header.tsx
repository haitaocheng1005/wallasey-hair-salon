import { navItems, salon } from "@/data/salon";
import { ButtonLink } from "./Buttons";
import { Icon } from "./Icon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-salon-black/90 backdrop-blur-xl">
      <nav
        className="container-shell flex min-h-18 items-center justify-between gap-4 py-3"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="focus-ring flex min-w-0 items-center gap-3 rounded-lg"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-salon-pink text-salon-black">
            <Icon name="scissors" size={21} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-xl font-semibold text-white">
              Whitesea
            </span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-normal text-salon-pink">
              Hair Salon
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-4 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={salon.phoneHref}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-salon-pink transition hover:bg-salon-pink/10 hover:text-white"
          >
            <Icon name="phone" size={17} aria-hidden="true" />
            {salon.phoneDisplay}
          </a>
          <ButtonLink href="/contact#booking-form">Book Now</ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={salon.phoneHref}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-salon-pink/50 text-salon-pink"
            aria-label={`Call ${salon.name}`}
          >
            <Icon name="phone" size={20} aria-hidden="true" />
          </a>
          <details className="group">
            <summary
              className="focus-ring inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg bg-white text-salon-black [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Icon name="menu" size={22} aria-hidden="true" />
            </summary>
            <div className="absolute inset-x-0 top-full border-t border-white/10 bg-salon-black lg:hidden">
              <div className="container-shell py-4">
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="focus-ring rounded-lg bg-white/5 px-4 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <ButtonLink href="/contact#booking-form" className="mt-4 w-full">
                  Book Appointment
                </ButtonLink>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
