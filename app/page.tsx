import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { HowIBuild } from "@/components/how-i-build";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { Cursor } from "@/components/cursor";

export default function Page() {
  return (
    <LenisProvider>
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <SelectedWork />
        <Experience />
        <Services />
        <Testimonials />
        <HowIBuild />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
