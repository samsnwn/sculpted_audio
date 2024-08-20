import { gtPressura, gtPressuraMono } from "@/app/styles/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Rock from "../../public/images/Rocks//Quartz-2.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center h-full justify-between md:justify-start mb-10">
      <article className="flex flex-col md:w-1/2 gap-20 md:gap-32 xs:p-10 md:h-screen md:ml-20">
        <div className="flex flex-col justify-between md:max-w-[600px]">
          <div className="w-5 h-0.5 bg-red border border-red" />
          <div className="w-0.5 bg-red h-4 border border-red" />
          <h1 className="text-white-100 text-5xl md:text-6xl lg:text-7xl md:items-start text-center md:text-start md:ml-5">
            WE BELIEVE IN THE ART OF SONIC SCULPTING
          </h1>
        </div>
      {/* <button className="text-white text-xl rounded-lg p-2 shadow-sm shadow-red">Meet us!</button> */}
        <div className="md:max-w-[400px] md:ml-6">
          <h2
            className={cn(
              "text-white text-sm sm:text-md text-center md:text-start",
              gtPressuraMono.className
            )}
          >
            We transform sound into art. Our state-of-the-art facilities and
            expert team are dedicated to delivering unmatched quality in audio
            mastering, mixing, and sound design. We elevate your sound to new
            heights, ensuring every detail is perfected.
          </h2>
        </div>
      </article>
      <article className="mt-10 rotate-45 -z-50 md:hidden opacity-0.8">
        <Image src={Rock} alt="Rock" width={70} className="mx-auto" />
      </article>
      <article className="mt-10 rotate-45 -z-50 hidden md:flex opacity-0.5">
        <Image src={Rock} alt="Rock" width={125} className="mx-auto" />
        {/* <div className="flex relaative">
          <div className="border border-red w-1 bg-red rotate-45 fixed h-5"></div>
          <div className="border border-red w-1 bg-red rotate-45 fixed h-5"></div>
        </div> */}
      </article>
    </section>
  );
};

export default Hero;
