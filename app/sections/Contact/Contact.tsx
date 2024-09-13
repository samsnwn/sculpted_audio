import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="flex flex-col w-full h-full pt-20 bg-white" id="contact">
      <div className="h-2/3 flex">
        <div className="flex flex-col justify-center h-2/3 p-2">
          <div className="w-5 h-0.5 bg-red border border-red" />
          <div className="w-0.5 bg-red h-4 border border-red" />
          <h2 className="text-5xl md:text-5xl lg:text-6xl ml-5 md:items-start z-40">
            Online Quotation
          </h2>
          <h3 className="text-red ml-7">
            Contact us to help you develop your project
          </h3>
        </div>
        {/* <div className="-rotate-45 translate-x-16 md:translate-x-32">
          <Image src={Rock} alt="Rock" width={150} height={150}/>
        </div> */}
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
