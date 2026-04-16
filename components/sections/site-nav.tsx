import { cn } from "@/lib/utils";
import { navLinks } from "./data";

export function SiteNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "flex items-center gap-5 sm:gap-7 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-white/80",
        className,
      )}
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="relative py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
