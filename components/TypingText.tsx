"use client";

import { useState, useEffect } from "react";

export default function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-faint font-mono text-[13px] tracking-[0.14em] uppercase">
      {displayed}
      <span className="animate-pulse text-amber">_</span>
    </span>
  );
}
