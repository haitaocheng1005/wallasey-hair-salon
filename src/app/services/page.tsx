import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { PriceGuide } from "@/components/PriceGuide";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/salon";

export const metadata: Metadata = {
  title: "Hair Services in Wallasey | Haircuts, Colouring & Styling",
  description:
    "Explore our professional hair services in Wallasey, including ladies haircuts, hair colouring, styling, treatments, and personalised hair consultations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hair Services in Wallasey"
        title="Our Hair Services"
        description="From everyday haircuts to stylish colour transformations, we provide a range of professional hair services designed around your personal style, hair type, and beauty goals."
        image="/salon/colour-service.webp"
        imageAlt="Stylist applying rose colour at Whitesea Hair Salon"
        secondaryHref="/gallery"
        secondaryLabel="View Hair Work"
      />

      <section className="bg-salon-black py-12 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-salon-charcoal py-12 sm:py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Price guide"
            title="Clear starting prices with consultation for colour work."
            description="Prices vary by length, condition, colour history, and finished style. Your stylist will confirm the exact quote before service begins."
          />
          <div className="mt-8">
            <PriceGuide />
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
