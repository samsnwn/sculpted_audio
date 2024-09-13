import About from "@/app/sections/About";
import Clients from "@/app/sections/Clients";
import Contact from "@/app/sections/Contact";
import Hero from "@/app/sections/Hero";
import Portfolio from "@/app/sections/Portfolio";
import Services from "@/app/sections/Services";
import Faqs from "./sections/Faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services/>
      {/* <Portfolio/> */}
      <Clients/>
      <About/>
      <Faqs/>
      <Contact/>
    </>
  );
}
