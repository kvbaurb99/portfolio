import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
  GradientBackground,
} from "@/components";

export default function Home() {
  return (
    <>
      {/* Global animated background */}
      <GradientBackground variant="subtle" />
      {/* Navigation */}
      <Navigation />
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
