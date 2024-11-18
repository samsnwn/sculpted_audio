"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

import { sendEmail } from '@/app/actions/sendEmail';
import { useState } from 'react';
import { formSchema, FormData } from "@/app/lib/schema";

const ContactForm = () => {
  const [status, setStatus] = useState<{ message: string; success?: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
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

  async function onSubmit(values: FormData) {
    try {
      setIsSubmitting(true);
      setStatus(null);

      const result = await sendEmail(values);

      setStatus({
        message: result.message,
        success: result.success
      });

      if (result.success) {
        form.reset();
      }
    } catch (error) {
      setStatus({
        message: 'An unexpected error occurred. Please try again.',
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1 uppercase px-2 lg:px-4"
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
                className="flex xs:flex-row items-center justify-center md:justify-start w-full"
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
          <Button
            type="submit"
            className="w-full bg-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </div>
        {status && (
          <div
            className={`p-4 text-sm rounded-md ${status.success
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red'
              }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
