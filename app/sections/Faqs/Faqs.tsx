import FaqItem from "./FaqItem";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "../../data/data";
import AltSubheadline from "@/components/Texts/AltSubheadline";
import Numbers from "@/components/Texts/Numbers";

const Faqs = () => {
  return (
    <section
      className="w-full"
      id="faqs"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <div className="w-[90%] flex mx-auto justify-between md:items-center mb-16">
          <AltSubheadline className="text-white-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
           FAQs
          </AltSubheadline>
          <Numbers className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-0">
            [04]
          </Numbers>
        </div>
        {/* <AltSubheadline className="text-white-100 text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start mb-16 font-light">FAQs
        </AltSubheadline> */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
