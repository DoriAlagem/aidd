"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { MAX_CHAT_MESSAGES } from "@/lib/constants";
import { DefaultChatTransport } from "ai";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const chatTransport = new DefaultChatTransport({ api: "/api/chat" });

export default function Chat({
  inputRef,
}: {
  inputRef?: (el: HTMLInputElement | null) => void;
}) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({
    transport: chatTransport,
  });
  const bottomRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    if (messages.length >= 14) return;
    sendMessage({ role: "user", parts: [{ type: "text", text: input }] });
    setInput("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-neutral-700">
        <p className="text-cyan-400 font-mono text-sm font-semibold">
          ask about dor
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.length === 0 && (
          <p className="text-zinc-500 font-mono text-xs text-center mt-4">
            ask me anything about dor&apos;s background, projects, or experience
          </p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-4 py-2 max-w-[85%] text-sm ${
                msg.role === "user"
                  ? "bg-cyan-400 text-black font-mono"
                  : "bg-neutral-800 text-zinc-200"
              }`}
            >
              {msg.role === "user" ? (
                msg.parts.map((part, i) =>
                  part.type === "text" ? <span key={i}>{part.text}</span> : null
                )
              ) : (
                <MarkdownRenderer
                  content={msg.parts
                    .filter((p) => p.type === "text")
                    .map((p) => p.text)
                    .join("")}
                />
              )}
            </div>
          </div>
        ))}
        {messages.length >= MAX_CHAT_MESSAGES && (
          <div className="flex justify-start">
            <div className="bg-neutral-800 text-zinc-200 rounded-2xl px-4 py-2 max-w-[85%] text-sm">
              We&apos;ve reached the chat limit! Feel free to refresh to start a new conversation 😊
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-800 rounded-2xl px-4 py-3 flex gap-1">
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
        {error && (
          <p className="text-red-400 font-mono text-xs text-center">
            something went wrong. try again.
          </p>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-3 border-t border-neutral-700 flex gap-2"
      >
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={100}
            placeholder="ask a question..."
            aria-label="Chat input"
            className="w-full bg-neutral-800 text-white rounded-full px-4 py-2 text-sm font-mono outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {input.length > 70 && (
            <span
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono ${input.length > 90 ? "text-red-400" : "text-zinc-400"}`}
            >
              {100 - input.length}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="bg-cyan-400 text-black font-mono text-sm px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors disabled:opacity-40"
        >
          →
        </button>
      </form>
    </div>
  );
}
