import { z } from "zod";

export const formSchema = z.object({
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

export type FormData = z.infer<typeof formSchema>;