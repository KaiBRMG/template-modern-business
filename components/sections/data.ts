import { siteConfig } from "@/site-content";

export type NavLink = { label: string; href: string };

export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const navLinks: NavLink[] = siteConfig.nav;

export const heroImage = siteConfig.hero.image;

export const services: Service[] = siteConfig.services.items;

export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDUiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMxZTI2MmIiLz48L3N2Zz4=";
