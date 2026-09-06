"use client";

import Navbar from "@/components/Navbar";
import TopDivider from "@/components/TopDivider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavigationDots from "@/components/NavigationDots";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeProvider from "@/contexts/ThemeProvider";
import ToasterClient from "@/components/ToasterClient";

const sections = ["hero", "projects", "skills", "testimonials", "contact"];

const App = () => {
  const { activeSection, refs } = useActiveSection(sections);

  return (
    <ThemeProvider>
      <div className="bg-white text-black relative dark:bg-wedgwood-950 dark:text-white">
        <Navbar />
        <NavigationDots activeSection={activeSection} />
        <TopDivider className={"hidden sm:block"} />
        <div id="hero" ref={refs.hero.ref}>
          <Hero />
        </div>
        <div id="projects" ref={refs.projects.ref}>
          <Projects />
        </div>
        <div id="skills" ref={refs.skills.ref}>
          <Skills />
        </div>
        <div id="testimonials" ref={refs.testimonials.ref}>
          <Testimonials />
        </div>
        <div id="contact" ref={refs.contact.ref}>
          <Contact />
        </div>
        <Footer />
      </div>

      <ToasterClient />
    </ThemeProvider>
  );
};

export default App;
