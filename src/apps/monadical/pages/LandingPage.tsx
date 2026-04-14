import { HeroSection } from "../components/HeroSection"
import { ServicesSection } from "../components/ServicesSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { TeamSection } from "../components/TeamSection"
import { AboutSection } from "../components/AboutSection"
import { CtaSection } from "../components/CtaSection"


export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <CtaSection />
    </main>
  )
}
