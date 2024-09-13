import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section
      className="flex flex-col w-full bg-black h-full pt-20 text-white"
      id="faqs"
    >
      <div className="w-5 h-0.5 bg-red border border-red" />
      <div className="w-0.5 bg-red h-4 border border-red" />
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl ml-5 md:items-start">
        FAQs
      </h2>
      <div className="w-[90vw] m-auto py-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What audio formats do you accept for mastering/mixing?
          </AccordionTrigger>
          <AccordionContent>
            Please submit files in 24-bit or 32-bit WAV format, ideally at the
            sample rate of your project and recordings. AIFF files are also
            accepted. Avoid applying any limiting or clipping processes to your
            files.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            In what formats will my masters/pre-masters be delivered?
          </AccordionTrigger>
          <AccordionContent>
            By default, if no specific requirements are provided, we will
            deliver masters in the following formats:
             - WAV 24-bit (up to 192kHz) for distribution and streaming 
             - WAV 16-bit 44.1kHz for CD production (DDP format available upon request) 
             - MP3 320 Kbps for referencing and sharing Metadata and ISRC codes will be included if requested and provided
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What sample rate should my pre-masters be?
          </AccordionTrigger>
          <AccordionContent>
            Keep your sample rate the same as your recording and mixing project.
            Avoid down-sampling or up-sampling if possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How should I name my files?</AccordionTrigger>
          <AccordionContent>
            Properly naming your files helps ensure a smooth delivery process
            and avoids confusion. For mastering, use the format: ‘Track Number
            Artist - Song Name_Mix Version_BitDepth_SampleRate’. For example: 01
            SculptedAudio - My Song_V1_24b_44.1. In stem mastering, include the
            stem name after the track name: 01 SculptedAudio - My Song
            (KICKS)_V1_24b_44.1.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Should I choose stereo mastering or stem mastering?
          </AccordionTrigger>
          <AccordionContent>
            Stereo mastering is usually the preferred method. Stem mastering is
            recommended only if there are issues in the mix that can’t be
            resolved through traditional mastering or by the mixing engineer.
            Note that stem mastering may alter the final mix slightly, as any
            mix buss processing will need to be removed. If you are not fully
            satisfied with your mix, we offer a free consultation to help
            determine the best approach for your track. If needed, we can also
            provide mixing services to ensure your track is in optimal shape
            before mastering.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What is your revision policy?</AccordionTrigger>
          <AccordionContent>
            We offer unlimited revisions to ensure your satisfaction with the
            masters. However, submitting new mixes will incur a small fee
            depending on the extent of the changes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            How long does the mixing/mastering process take?
          </AccordionTrigger>
          <AccordionContent>
            Turnaround times vary depending on the complexity and workload.
            Typically, mixing and mastering are completed within 7 days. For
            expedited services, please inquire about availability and additional
            fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            What do I need to provide for mixing/mastering?
          </AccordionTrigger>
          <AccordionContent>
            Along with your audio files, please provide any relevant notes or
            specific instructions about your project. For mixing, include any
            demo mixes, self-masters, and reference tracks that align with your
            vision for the final sound.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            Can I make changes to my mix or master after delivery?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can request changes to your mix or master. Please note that
            additional revisions beyond the initial scope may incur extra
            charges, depending on the nature and extent of the changes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            Do you offer packages or discounts for multiple tracks?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer packages and discounts for multiple tracks. Please
            contact us for more details and customized pricing based on your
            needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
