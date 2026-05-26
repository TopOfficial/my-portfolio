import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Experience from "./_components/Experience";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
