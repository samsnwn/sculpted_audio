import FaqItem from "./FaqItem";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "../../data/data";
import { cn, Props } from "@/utils/cn";
import AltSubheadline from "@/components/Texts/AltSubheadline";

const Faqs : React.FC<Props> = ({ className })=> {
  return (
    <section
      className={cn("flex flex-col h-full pt-20 text-white", className)}
      id="faqs"
    >
      <div className="w-[90%] mx-auto">
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <AltSubheadline className="text-white-100 text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start font-light">FAQs</AltSubheadline>
      </div>

      <div className="w-[90vw] m-auto py-20 max-w-[90%]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index}/>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
