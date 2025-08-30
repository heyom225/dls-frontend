"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a success response.
  console.log("Received contact form submission:", values);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Form submitted successfully." };
}
