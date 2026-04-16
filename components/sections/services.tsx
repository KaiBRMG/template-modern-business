"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/site-content";
import { services } from "./data";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative mx-auto w-full max-w-[1600px] rounded-[32px] bg-card/90 ring-1 ring-white/5 px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24"
    >
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-12 sm:mb-16"
      >
        {siteConfig.services.heading}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.number} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
