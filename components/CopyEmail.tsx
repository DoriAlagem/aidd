"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { EMAIL } from "@/lib/constants";

export default function CopyEmail({ size = 32, dim = false }: { size?: number; dim?: boolean }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative flex items-center">
      <button onClick={handleCopy} className="hover:opacity-70 transition-opacity cursor-pointer">
        <Image
          src="/gmail.svg"
          alt="Gmail"
          width={size}
          height={size}
          className={`invert${dim ? " opacity-60" : ""}`}
        />
      </button>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-line text-cream text-xs font-mono px-2 py-1 rounded whitespace-nowrap">
          copied!
        </span>
      )}
    </div>
  );
}
