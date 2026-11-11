import { streamText, convertToModelMessages } from "ai";
import { buildSystemPrompt } from "@/lib/system-prompt";
import { MAX_CHAT_MESSAGES } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (messages.length > MAX_CHAT_MESSAGES) {
    return new Response("Too many messages", { status: 400 });
  }

  const result = streamText({
    // Vercel AI Gateway, authenticated by the deployment's OIDC token (no key).
    // A zero-priced model, because the gateway's free tier rejects paid ones
    // (RestrictedModelsError). gemini-2.0-flash was shut down on June 1, 2026.
    model: "nvidia/nemotron-3.5-lightning-free",
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
