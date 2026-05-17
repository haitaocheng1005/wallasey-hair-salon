import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { socialLinks } from "@/data/salon";

export const metadata: Metadata = {
  title: "Hair Salon Gallery Wallasey | Hair Styling & Colour Inspiration",
  description:
    "View our hair salon gallery featuring styling, colouring, salon environment, and before-and-after hair transformations in Wallasey.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Hair styling, colour inspiration, and before-and-after results."
        description="Explore our latest hair styling, colour work, salon environment, and transformation results. Follow us on Facebook and Instagram for more recent updates and inspiration."
        image="/salon/before-after-rose-waves.webp"
        imageAlt="Before and after rose hair colour transformation"
      />

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Gallery"
              title="Salon Environment, Hair Works, and Before & After"
            />
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-lg border border-salon-pink/60 px-4 text-sm font-bold text-salon-pink transition hover:bg-salon-pink hover:text-salon-black"
                  >
                    <Icon name={social.icon} size={18} aria-hidden="true" />
                    {social.label}
                  </a>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
