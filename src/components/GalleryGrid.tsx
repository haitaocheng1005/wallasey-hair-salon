import Image from "next/image";
import { galleryImages } from "@/data/salon";

type GalleryGridProps = {
  limit?: number;
};

export function GalleryGrid({ limit }: GalleryGridProps) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <figure
          key={`${image.src}-${image.title}`}
          className={`group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] image-lift ${
            image.wide ? "sm:col-span-2" : ""
          }`}
        >
          <div
            className={`relative ${
              image.wide ? "aspect-[16/9]" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={image.src}
              alt={`${image.title} - ${image.category}`}
              fill
              loading="lazy"
              sizes={
                image.wide
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              quality={78}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-salon-black/78 via-transparent to-transparent opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-xs font-bold uppercase tracking-normal text-salon-pink">
                {image.category}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                {image.title}
              </h3>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
