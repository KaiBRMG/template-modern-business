import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 bg-background px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
