import { streamText, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";
import { buildSystemPrompt } from "@/lib/system-prompt";

export const runtime = "nodejs";

const MAX_MESSAGES = 14;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (messages.length > MAX_MESSAGES) {
    return new Response("Too many messages", { status: 400 });
  }

  const result = streamText({
    // Called directly on the Gemini API with a free Google AI Studio key
    // (GOOGLE_GENERATIVE_AI_API_KEY): the Vercel AI Gateway's free tier does
    // not allow this model, and gemini-2.0-flash was shut down on June 1, 2026.
    model: google("gemini-3.5-flash-lite"),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
