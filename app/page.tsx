import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
    </>
  );
}