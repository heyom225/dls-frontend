"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
});


export async function handleLogin(values: z.infer<typeof loginSchema>) {
  // In a real app, you'd validate credentials against a database
  console.log("Login attempt:", values);
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (values.email === "test@example.com" && values.password === "password") {
      return { success: true, message: "Login successful." };
  }
  return { success: false, message: "Invalid email or password." };
}

export async function handleSignUp(values: z.infer<typeof signUpSchema>) {
  // In a real app, you'd create a new user in your database
  console.log("Sign up attempt:", values);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: "Account created successfully." };
}
