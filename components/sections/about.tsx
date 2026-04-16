"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/site-content";
import { BLUR_DATA_URL } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

function StatNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 60, stiffness: 100 });

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, value, delay, motionValue]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString("en-US");
        }
      }),
    [spring],
  );

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

export function About() {
  const { eyebrow, heading, body, image, stats } = siteConfig.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[32px] bg-card/90 ring-1 ring-white/5 px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
      />

      <div className="relative grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10">
        {/* Eyebrow + index */}
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
            (02 — About)
          </motion.span>
        </div>

        {/* Heading */}
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="col-span-12 lg:col-span-8 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] text-white"
        >
          {heading.split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 * i, ease }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="col-span-12 lg:col-span-5 lg:row-start-3 lg:row-span-2"
        >
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted ring-1 ring-white/5">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-md ring-1 ring-white/10">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Est. 2014
            </div>
          </div>
        </motion.div>

        {/* Body copy + signature line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="col-span-12 lg:col-span-7 flex flex-col gap-7"
        >
          <div className="flex flex-col gap-5 max-w-[58ch]">
            {body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-white/65"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:bg-white hover:text-black"
          >
            <span>Read our manifesto</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>

        {/* Stats */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 border-t border-white/10 pt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-baseline gap-0.5 font-heading text-4xl sm:text-5xl text-white tracking-tight">
                <StatNumber value={stat.value} delay={0.3 + i * 0.1} />
                {stat.suffix && (
                  <span className="text-white/60">{stat.suffix}</span>
                )}
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
