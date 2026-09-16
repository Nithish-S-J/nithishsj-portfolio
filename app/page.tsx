import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}