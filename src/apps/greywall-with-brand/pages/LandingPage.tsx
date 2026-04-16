import { HeroSection } from '../components/HeroSection'
import { ProblemSection } from '../components/ProblemSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { AgentsSection } from '../components/AgentsSection'
import { PlatformSection } from '../components/PlatformSection'
import { InstallSection } from '../components/InstallSection'
import { GreywallCtaSection } from '../components/CtaSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AgentsSection />
      <PlatformSection />
      <InstallSection />
      <GreywallCtaSection />
    </>
  )
}
