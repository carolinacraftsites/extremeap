// Shared Zod schemas for validation
import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const ContactInfoSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  address: z.string().optional(),
  hours: z.string().optional(),
});
