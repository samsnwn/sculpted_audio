"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "@/components/ui/textarea";
import CountryPhoneInput from "@/components/CountryPhoneInput";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name can't exceed 100 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.object({
    countryCode: z
      .string()
      .min(1, "Country code is required")
      .max(4, "Phone number can't exceed 15 digits")
      .regex(/^[0-9]+$/, "Phone number must contain only digits"),
    number: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't exceed 15 digits")
      .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  }),
  services: z.enum(["artist", "label", "gaming"], {
    required_error: "Please select a service",
    invalid_type_error: "Invalid service selected",
  }),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message can't exceed 500 characters"),
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
      services: "artist",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1 p-2 uppercase flex-grow"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem id="name">
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input placeholder="Axel Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem id="email">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input placeholder="a.smith@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem id="phone">
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl>
                <CountryPhoneInput field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem id="services">
              <FormLabel htmlFor="services">Our Services</FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex space-x-2"
              >
                <div className="flex items-center">
                  <RadioGroupItem
                    value="artist"
                    id="artist"
                    className="hidden"
                  />
                  <label
                    htmlFor="artist"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300 ${
                      field.value === "artist"
                        ? "bg-black text-white"
                        : "bg-gray-200 border-gray-300 text-gray-700"
                    }`}
                  >
                    Artist
                  </label>
                </div>

                <div className="flex items-center">
                  <RadioGroupItem value="label" id="label" className="hidden" />
                  <label
                    htmlFor="label"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300 ${
                      field.value === "label"
                        ? "bg-black text-white"
                        : "bg-gray-200 border-gray-300 text-gray-700"
                    }`}
                  >
                    Label
                  </label>
                </div>

                <div className="flex items-center">
                  <RadioGroupItem
                    value="gaming"
                    id="gaming"
                    className="hidden"
                  />
                  <label
                    htmlFor="gaming"
                    className={`cursor-pointer px-4 py-2 border transition-colors duration-300
        ${
          field.value === "gaming"
            ? "bg-black text-white"
            : "bg-gray-200 border-gray-300 text-gray-700"
        }`}
                  >
                    Gaming
                  </label>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem id="message">
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
