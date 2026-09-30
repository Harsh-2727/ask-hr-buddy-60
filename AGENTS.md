<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## HR leave chatbot
- Leave policy knowledge base lives in `src/data/hr-policy.ts` (generated from the uploaded HR policy CSV); edit it there so answers stay grounded in one source.
- Chat streaming runs through `src/routes/api/chat.ts` using the Lovable AI Gateway (`google/gemini-3.5-flash`) so no API key ships to the browser.
- The chat is a single conversation persisted in browser localStorage under `hr-leave-chat-v1`; no database is involved.
