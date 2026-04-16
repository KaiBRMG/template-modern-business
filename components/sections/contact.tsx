"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { eyebrow, heading, headingAccent, body, email, cta, columns, socials } =
    siteConfig.contact;
  const { footer, name } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[32px] bg-card/90 ring-1 ring-white/5 px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10">
        {/* Eyebrow row */}
        <div className="col-span-12 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
            (04 — Contact)
          </motion.span>
        </div>

        {/* Heading */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="col-span-12 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] uppercase tracking-[-0.03em] leading-[0.88] text-white"
        >
          {heading}{" "}
          <span className="italic font-light tracking-tight text-white/45">
            {headingAccent}
          </span>
        </motion.h2>

        {/* Email + CTA + body */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="group inline-flex items-center gap-4 self-start"
          >
            <span className="relative font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
              {email}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/40 transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <span className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="max-w-[52ch] text-base sm:text-lg leading-relaxed text-white/55"
          >
            {body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <a
              href={`mailto:${email}`}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 font-heading text-xs uppercase tracking-[0.28em] text-black"
            >
              <span className="absolute inset-0 -translate-x-full bg-emerald-300 transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">{cta}</span>
              <ArrowUpRight
                className="relative size-3.5 transition-transform duration-500 group-hover:rotate-45"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>

        {/* Info columns */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-x-6 gap-y-8 lg:gap-y-10 lg:border-l lg:border-white/10 lg:pl-10">
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
              className="flex flex-col gap-3"
            >
              <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/40">
                {col.label}
              </span>
              <ul className="flex flex-col gap-1.5">
                {col.lines.map((line) => (
                  <li
                    key={line}
                    className="text-sm leading-snug text-white/75"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Socials marquee row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="col-span-12 mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-white/10 py-6"
        >
          <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/40">
            Follow
          </span>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <ArrowUpRight className="size-3.5 text-white/40 transition-all group-hover:text-white group-hover:rotate-45" />
              <span className="uppercase tracking-[0.18em] text-[11px]">
                {social.label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer line */}
        <div className="col-span-12 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
            © {year} {name}. {footer.rights}
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
            {footer.note}
          </span>
        </div>
      </div>
    </section>
  );
}
