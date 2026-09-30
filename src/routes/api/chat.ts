import { createFileRoute } from "@tanstack/react-router";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { POLICY_CONTEXT } from "@/data/hr-policy";

const SYSTEM_PROMPT = `You are "Leavy", the HR leave assistant for the company.

Answer ONLY using the HR policy knowledge base below. Rules:
- Be short, direct and friendly. 1-3 sentences is usually enough.
- Always give the concrete number / rule when the policy has one (e.g. "18 paid days per calendar year").
- When relevant, mention the form or portal to use and who to contact.
- End factual answers with the policy reference in brackets, e.g. [AL-3.1].
- If the question is not covered by the policy, say you don't have that in the leave policy and suggest contacting HR Operations. Never invent numbers.
- Speak to the employee as "you".

HR POLICY KNOWLEDGE BASE
========================
${POLICY_CONTEXT}`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(
            JSON.stringify({ error: "AI is not configured for this app yet." }),
            { status: 500, headers: { "content-type": "application/json" } },
          );
        }

        const { messages } = (await request.json()) as { messages: UIMessage[] };

        const lovable = createOpenAICompatible({
          name: "lovable",
          baseURL: "https://ai.gateway.lovable.dev/v1",
          headers: {
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "vercel-ai-sdk",
          },
        });

        try {
          const result = streamText({
            model: lovable("google/gemini-3.5-flash"),
            system: SYSTEM_PROMPT,
            messages: convertToModelMessages(messages),
          });

          return result.toUIMessageStreamResponse({
            onError: (error) => {
              console.error("hr-chat stream error", error);
              return "Sorry, something went wrong while answering. Please try again.";
            },
          });
        } catch (error) {
          console.error("hr-chat error", error);
          return new Response(
            JSON.stringify({ error: "The assistant is unavailable right now." }),
            { status: 502, headers: { "content-type": "application/json" } },
          );
        }
      },
    },
  },
});
