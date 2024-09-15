import Hero from "./sections/Hero";
import Services from "./sections/Services/Services";
import Clients from "./sections/Clients/Clients";
import About from "./sections/About/About";
import Faqs from "./sections/Faqs/Faqs";
import Contact from "./sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <About />
      <Faqs />
      <Contact />
    </>
  );
}
