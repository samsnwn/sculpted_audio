import About from "@/app/sections/About/About";
import Clients from "@/app/sections/Clients/Clients";
import Contact from "@/app/sections/Contact/Contact";
import Hero from "@/app/sections/Hero";
import Portfolio from "@/app/sections/Portfolio";
import Services from "@/app/sections/Services/Services";
import Faqs from "./sections/Faqs/Faqs";

export default function Home() {
  return (
    <>
      <Hero className="max-w-[1880px] w-full m-auto"/>
      <Services className="max-w-[1880px] w-full m-auto"/>
      {/* <Portfolio/> */}
      <Clients className="max-w-[1880px] w-full m-auto"/>
      <About className="max-w-[1880px] w-full m-auto"/>
      <Faqs className="max-w-[1880px] w-full m-auto"/>
      <div className="bg-white">
        <Contact className="max-w-[1880px] w-full m-auto"/>
      </div>
    </>
  );
}
