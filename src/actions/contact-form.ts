"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export type ContactFormState = {
  success?: boolean
  message?: string
  error?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill out all fields",
      }
    }

    // Initialize Supabase client
    const supabase = createServerSupabaseClient()

    // Insert data into Supabase
    const { error } = await supabase.from("contact_submissions").insert([{ name, email, message }])

    if (error) {
      console.error("Error submitting form:", error)
      return {
        success: false,
        error: "Failed to submit form. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
