import Image from "next/image";
import { motion } from "framer-motion";

type GalleryProps = {
  images: { src: string; alt: string }[];
};

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
      ))}
    </section>
  );
}
