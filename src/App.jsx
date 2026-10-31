import { useEffect, useRef } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import {
  AboutSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
} from "./components/PortfolioSections.jsx";
import WorkSection from "./components/WorkSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import "./../css/style.css";

export default function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    const navLinks = document.querySelectorAll(".nav-links a");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`,
              );
            });
          }
        });
      },
      { threshold: 0.35 },
    );

    document
      .querySelectorAll("main section[id]")
      .forEach((section) => sectionObserver.observe(section));

    const updateGlow = (event) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${event.clientX}px`;
      glowRef.current.style.top = `${event.clientY}px`;
    };
    window.addEventListener("pointermove", updateGlow);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointermove", updateGlow);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
