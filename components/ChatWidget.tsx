"use client";

import { useState, useEffect } from "react";
import Chat from "@/components/Chat";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputEl, setInputEl] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputEl) {
      requestAnimationFrame(() => inputEl.focus());
    }
  }, [isOpen, inputEl]);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Dor"
          className="w-[380px] h-[520px] flex flex-col rounded-2xl border border-line bg-ink shadow-xl shadow-black/50 overflow-hidden"
        >
          <Chat inputRef={setInputEl} />
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="w-12 h-12 rounded-full bg-amber text-amber-ink flex items-center justify-center text-xl hover:brightness-110 hover:scale-105 transition-all shadow-lg"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}
