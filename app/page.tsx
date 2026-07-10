import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { HowIBuild } from "@/components/how-i-build";
import { Stack } from "@/components/stack";
import { ProjectLab } from "@/components/project-lab";
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
        <HowIBuild />
        <Stack />
        <ProjectLab />
        <About />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
