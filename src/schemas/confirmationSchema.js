import { z } from "zod";

export const confirmationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(12, "Phone number is too long")
    .regex(/^[0-9]+$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),

  deliveryMethod: z.enum(["delivery", "store"], {
    errorMap: () => ({ message: "Delivery method is required" }),
  }),

  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  region: z.string().min(1, "Region is required"),
  street: z.string().min(1, "Street is required"),
  building: z.string().min(1, "Building number is required"),
  detailedAddress: z.string().min(1, "Detailed address is required"),
});
