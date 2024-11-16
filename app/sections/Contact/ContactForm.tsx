"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import CountryPhoneInput from "./CountryPhoneInput";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(25, "Name can't exceed 25 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .max(50, "Exceeded maximum length")
    .email("Invalid email address"),
  phone: z.object({
    countryCode: z.string().max(5, "Exceeded maximum length"),
    number: z.string().max(15, "Exceeded maximum length"),
  }),
  services: z.enum(["stereo mastering", "stem mastering", "mixing"], {
    invalid_type_error: "Invalid service selected",
  }),
  message: z.string().min(1, "Message is required").max(1500, "Exceeded maximum length"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: {
        countryCode: "",
        number: "",
      },
      services: "stereo mastering",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   const result = await emailjs.send(
    //     'service_5wd7vmg',
    //     'template_507vavf',
    //     {
    //       from_name: values.name,
    //       from_email: values.email,
    //       countryCode: values.phone.countryCode,
    //       number: values.phone.number,
    //       services: values.services,
    //       message: values.message,
    //     },
    //     'qSKRPDQhJ7EsR6rtf'
    //   );

    //   if (result.status === 200) {
    //     alert('Your message has been sent successfully!');
    //     form.reset();
    //   }
    // } catch (error) {
    //   alert('Failed to send your message. Please try again later.');
    //   console.error('EmailJS Error:', error);
    // }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1 uppercase sm:px-2 lg:px-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem id="name">
              <FormLabel htmlFor="name" className="p-1">
                Name*
              </FormLabel>
              <FormControl>
                <Input placeholder="Axel Smith" {...field} />
              </FormControl>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem id="email">
              <FormLabel htmlFor="email" className="p-1">
                Email*
              </FormLabel>
              <FormControl>
                <Input placeholder="a.smith@gmail.com" {...field} />
              </FormControl>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem id="phone">
              <FormLabel htmlFor="phone" className="p-1">
                Phone
              </FormLabel>
              <FormControl>
                <CountryPhoneInput field={field} />
              </FormControl>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem id="services">
              <FormLabel htmlFor="services" className="p-1">
                Our Services
              </FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex flex-col xs:flex-row items-center justify-center md:justify-start w-full"
              >
                <div className="flex items-center">
                  <RadioGroupItem
                    value="stereo mastering"
                    id="stereo mastering"
                    className="hidden"
                  />
                  <label
                    htmlFor="stereo mastering"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300 text-sm w-full sm:w-40 text-center ${field.value === "stereo mastering"
                        ? "bg-black text-white"
                        : "bg-gray-200 border-gray-300 text-gray-700"
                      }`}
                  >
                    Stereo Mastering
                  </label>
                </div>

                <div className="flex items-center">
                  <RadioGroupItem value="stem mastering" id="stem mastering" className="hidden" />
                  <label
                    htmlFor="stem mastering"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300 text-sm w-full sm:w-40 text-center ${field.value === "stem mastering"
                        ? "bg-black text-white"
                        : "bg-gray-200 border-gray-300 text-gray-700"
                      }`}
                  >
                    Stem Mastering
                  </label>
                </div>

                <div className="flex items-center">
                  <RadioGroupItem
                    value="mixing"
                    id="mixing"
                    className="hidden"
                  />
                  <label
                    htmlFor="mixing"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300 text-sm w-full sm:w-40 text-center ${field.value === "mixing"
                        ? "bg-black text-white"
                        : "bg-gray-200 border-gray-300 text-gray-700"
                      }`}
                  >
                    Mixing
                  </label>
                </div>
              </RadioGroup>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem id="message">
              <FormLabel htmlFor="message" className="p-1">
                Message*
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." {...field} />
              </FormControl>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <div className="w-full m-auto p-2">
          <Button type="submit" className="w-full bg-black">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
