"use server";

import { signIn } from "@/app/lib/auth";

export async function authenticate(formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error) {
      switch (error) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
