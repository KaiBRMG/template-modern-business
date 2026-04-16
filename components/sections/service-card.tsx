"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { BLUR_DATA_URL, type Service } from "./data";

export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={cn("group flex flex-col gap-5", className)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 44vw, 88vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col gap-3">
        <span
          aria-hidden
          className="font-heading text-4xl leading-none text-white/90"
        >
          {service.number}
        </span>
        <h3 className="font-heading text-sm uppercase tracking-[0.18em] text-white">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/55 max-w-[28ch]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}
