import { gtPressura, gtPressuraMono } from "@/app/styles/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Rock from "../../public/images/Rocks/Rock-1-.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center h-screen md:h-[90vh] justify-between md:justify-start">
      <article className="flex flex-col md:w-1/2 gap-10 sm:p-5">
        <div className="flex flex-col justify-between max-w-[300px] mx-auto">
          <div className="w-5 h-0.5 bg-red border border-red" />
          <div className="w-0.5 bg-red h-4 border border-red" />
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl md:items-start text-center md:text-start md:ml-5">
            WE BELIEVE IN THE ART OF SONIC SCULPTING
          </h1>
        </div>
        <h2
          className={cn(
            "text-white text-xs sm:text-sm text-center sm:test-start max-w-[800px]",
            gtPressuraMono.className
          )}
        >
          We transform sound into art. Our state-of-the-art facilities and
          expert team are dedicated to delivering unmatched quality in audio
          mastering, mixing, and sound design. We elevate your sound to new
          heights, ensuring every detail is perfected.
        </h2>
      </article>
      {/* <button className="text-white text-4xl border border-red rounded-xl p-2 shadow-sm shadow-red">Meet us!</button> */}
      <article>
        <Image src={Rock} alt="Rock" width={150} className="mx-auto" />
      </article>
    </section>
  );
};

export default Hero;
