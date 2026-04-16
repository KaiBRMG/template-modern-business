"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-content";
import { BLUR_DATA_URL } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

const layout = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
] as const;

const aspect = [
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/5]",
] as const;

export function Work() {
  const { eyebrow, heading, intro, items } = siteConfig.work;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[32px] bg-card/90 ring-1 ring-white/5 px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24"
    >
      <div className="relative grid grid-cols-12 gap-y-10 gap-x-6 md:gap-x-10">
        {/* Eyebrow row */}
        <div className="col-span-12 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/60">
              {eyebrow}
            </span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/40"
          >
            ({String(items.length).padStart(2, "0")} — Projects)
          </motion.span>
        </div>

        {/* Heading + intro */}
        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="col-span-12 lg:col-span-7 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="col-span-12 lg:col-span-4 lg:col-start-9 self-end max-w-[40ch] text-sm sm:text-base leading-relaxed text-white/55"
        >
          {intro}
        </motion.p>

        {/* Project grid */}
        <div className="col-span-12 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-x-6 md:gap-x-10 gap-y-14 sm:gap-y-20">
          {items.map((item, i) => (
            <motion.a
              key={item.number}
              href="#"
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.05 + (i % 2) * 0.08,
                ease,
              }}
              className={cn(
                "group flex flex-col gap-5",
                layout[i % layout.length],
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-white/5",
                  aspect[i % aspect.length],
                )}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-60" />

                {/* Floating badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/85 backdrop-blur-md ring-1 ring-white/10">
                  <span aria-hidden>{item.number}</span>
                  <span className="h-3 w-px bg-white/20" />
                  <span>{item.year}</span>
                </div>

                {/* Hover arrow */}
                <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/95 text-black opacity-0 -translate-y-1 translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                  <ArrowUpRight className="size-4" aria-hidden />
                </div>
              </div>

              <div className="flex items-end justify-between gap-6 px-1">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    {item.category}
                  </span>
                </div>
                <span className="hidden sm:inline-block font-heading text-xs uppercase tracking-[0.28em] text-white/40 transition-colors group-hover:text-white/80">
                  View ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="col-span-12 mt-6 flex items-center justify-between border-t border-white/10 pt-8"
        >
          <span className="font-heading text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/40">
            More in the archive
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:bg-white hover:text-black"
          >
            <span>View full case studies</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
