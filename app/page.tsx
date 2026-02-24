"use client";

import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work/>
      <Contact />
      <Footer />
    </div>
  );
};