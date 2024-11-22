import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="flex flex-col w-full h-full bg-white min-h-screen pt-8" id="contact"
    >
      <div className="max-w-7xl w-full m-auto">
        <div className="h-2/3 flex">
          <div className="flex flex-col justify-center h-2/3 p-2 mb-16">
            <div className="w-5 h-0.5 bg-red border border-red" />
            <div className="w-0.5 bg-red h-4 border border-red" />
            <h2 className="text-5xl md:text-5xl lg:text-6xl ml-5 md:items-start">
              Online Quotation
            </h2>
            <h3 className="text-red ml-7">
              Contact us to help you develop your project
            </h3>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
