"use client";

import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import CopyEmail from "@/components/CopyEmail";
import SocialLinks from "@/components/SocialLinks";

const inputClass =
  "bg-surface border border-line text-cream rounded-lg p-3 font-mono text-sm outline-none focus:border-amber";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    setStatus(result.success ? "success" : "error");
    if (result.success) setCooldown(30);
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="text-center mb-8">
        <p className="font-mono text-[13px] tracking-[0.14em] text-faint mb-2">SAY HI</p>
        <h1 className="font-heading font-bold text-4xl tracking-tight">Contact</h1>
      </div>
      <div className="flex gap-6 mb-8">
        <CopyEmail size={32} />
        <SocialLinks size={32} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input name="name" type="text" placeholder="your name" required className={inputClass} />
        <input name="email" type="email" placeholder="your email" required className={inputClass} />
        <textarea name="message" placeholder="your message" rows={5} required className={inputClass} />
        <button
          type="submit"
          disabled={status === "sending" || cooldown > 0}
          className="bg-amber text-amber-ink font-mono font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
        >
          {status === "sending" ? "sending..." : cooldown > 0 ? `wait ${cooldown}s` : "send →"}
        </button>
        {status === "success" && (
          <p className="text-ok font-mono text-sm text-center">message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 font-mono text-sm text-center">something went wrong. try again.</p>
        )}
      </form>
    </div>
  );
}
