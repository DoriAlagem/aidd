"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavButton from "@/components/NavButton";

type LineStyle = "dim" | "error" | "link";

const lines: { text: string; style: LineStyle }[] = [
  { text: "~/dor-alagem $ cd /page-that-doesnt-exist", style: "dim" },
  { text: "error: page not found", style: "error" },
  { text: "exit code: 404", style: "dim" },
  { text: "did you mean: /home ?", style: "link" },
];

export default function NotFound() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (done) return;
    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, done]);

  function renderLine(line: { text: string; style: LineStyle }, i: number) {
    if (i > lineIndex) return null;
    const text = i === lineIndex ? line.text.slice(0, charIndex) : line.text;

    if (line.style === "error") {
      return (
        <p key={i} className="text-cream text-lg">
          <span className="text-red-400">{text.slice(0, 7)}</span>{text.slice(7)}
        </p>
      );
    }

    if (line.style === "link") {
      return (
        <p key={i} className="text-faint text-sm">
          {"did you mean: "}
          <Link href="/" className="text-amber hover:brightness-110 transition-all">
            /home
          </Link>
          {" ?"}
        </p>
      );
    }

    return <p key={i} className="text-faint text-sm">{text}</p>;
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 font-mono">
      <div className="flex flex-col gap-3 mb-8">
        {lines.map((line, i) => renderLine(line, i))}
      </div>
      {done && <NavButton href="/">go home</NavButton>}
    </div>
  );
}
