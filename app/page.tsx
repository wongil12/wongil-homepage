import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  Header,
  HeroSection,
  SkillsSection,
  WorkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
