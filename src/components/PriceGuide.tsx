import { priceGuide } from "@/data/salon";

export function PriceGuide() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {priceGuide.map((group) => (
        <section
          key={group.category}
          className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
        >
          <h3 className="font-display text-2xl font-semibold text-white">
            {group.category}
          </h3>
          <div className="mt-5 grid gap-3">
            {group.items.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm text-white/74">{item.label}</span>
                <span className="shrink-0 text-sm font-bold text-salon-pink">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
