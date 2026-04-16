"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-content";
import { BLUR_DATA_URL, heroImage } from "./data";
import { SiteNav } from "./site-nav";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label={`${siteConfig.name} introduction`}
      className={cn(
        "relative mx-auto w-full max-w-[1600px]",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3 px-1 text-white/70">
        <span className="flex size-9 items-center justify-center rounded-full border border-white/20">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
        <span className="text-xs tracking-wide text-white/70">
          {siteConfig.hero.handle}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[32px] ring-1 ring-white/5 bg-card">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(min-width: 1600px) 1600px, 100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

        <div className="relative z-10 flex aspect-[16/9] min-h-[520px] flex-col px-6 py-6 sm:px-10 sm:py-8 md:px-12 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto"
          >
            <SiteNav />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none mt-8 font-heading font-black uppercase text-white leading-[0.82] tracking-[-0.04em] text-[clamp(3.5rem,14vw,12.5rem)]"
          >
            {siteConfig.hero.title}
          </motion.h1>

          <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-xs font-heading text-xs sm:text-sm uppercase tracking-[0.22em] text-white/85 leading-relaxed"
            >
              {siteConfig.hero.subtitle}
            </motion.p>

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/70"
            >
              {siteConfig.hero.location}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
