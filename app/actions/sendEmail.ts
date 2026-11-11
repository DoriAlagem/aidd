"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = ((formData.get("name") as string) || "").trim().slice(0, 100);
  const email = ((formData.get("email") as string) || "").trim().slice(0, 200);
  const message = ((formData.get("message") as string) || "").trim().slice(0, 5000);

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dor3382@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Try again." };
  }
}
