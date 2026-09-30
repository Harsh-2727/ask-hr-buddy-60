import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const STORAGE_KEY = "hr-leave-chat-v1";

const SUGGESTIONS = [
  "How much annual leave do I get?",
  "When do I need a medical certificate?",
  "How do I apply for unpaid leave?",
  "How long is paid parental leave?",
];

function loadMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as UIMessage[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function textOf(message: UIMessage) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => (part as { text: string }).text)
    .join("");
}

export function HrChat() {
  const [initialMessages] = useState<UIMessage[]>(loadMessages);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error, setMessages } = useChat({
    id: "hr-leave-chat",
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (status === "ready" || status === "error") {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        /* storage unavailable */
      }
    }
  }, [messages, status]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [status]);

  const busy = status === "submitted" || status === "streaming";

  const submit = (value: string) => {
    const text = value.trim();
    if (!text || busy) return;
    setInput("");
    void sendMessage({ text });
  };

  const reset = () => {
    setMessages([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
    textareaRef.current?.focus();
  };

  return (
    <div className="mx-auto flex h-[100dvh] w-full max-w-3xl flex-col px-4 py-4 sm:py-6">
      <header className="flex items-center justify-between gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary font-display text-lg font-semibold text-primary-foreground">
            HR
          </div>
          <div>
            <h1 className="text-lg font-semibold">Leave &amp; HR Assistant</h1>
            <p className="text-xs text-muted-foreground">
              Answers from your company leave policy
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
        >
          New chat
        </button>
      </header>

      <div className="mt-4 flex-1 overflow-y-auto rounded-2xl bg-card p-4 shadow-soft sm:p-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div>
              <h2 className="text-2xl font-semibold">Ask me about leave</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Annual leave, sick leave, unpaid leave, parental and bereavement
                leave — entitlements, notice, forms and approvals.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submit(suggestion)}
                  className="rounded-full border border-border bg-muted px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                      : "max-w-[90%] text-sm leading-relaxed text-foreground"
                  }
                >
                  {message.role === "assistant" ? (
                    <div className="prose-sm space-y-2 [&_a]:underline [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold">
                      <ReactMarkdown>{textOf(message)}</ReactMarkdown>
                    </div>
                  ) : (
                    textOf(message)
                  )}
                </div>
              </div>
            ))}
            {status === "submitted" && (
              <div className="flex gap-1.5 text-muted-foreground">
                <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.2s]" />
                <span className="size-2 animate-bounce rounded-full bg-current [animation-delay:-0.1s]" />
                <span className="size-2 animate-bounce rounded-full bg-current" />
              </div>
            )}
            {error && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try sending your question again.
              </p>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit(input);
        }}
        className="mt-4 flex items-end gap-2 rounded-2xl bg-card p-2 shadow-soft"
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              submit(input);
            }
          }}
          rows={1}
          placeholder="Ask about leave, forms, notice periods…"
          className="max-h-32 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={busy || input.trim().length === 0}
          className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-40"
        >
          Send
        </button>
      </form>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Guidance only — contact HR Operations for anything case-specific.
      </p>
    </div>
  );
}
