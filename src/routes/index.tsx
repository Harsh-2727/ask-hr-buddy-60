import { createFileRoute } from "@tanstack/react-router";

import { HrChat } from "@/components/hr-chat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leave & HR Assistant" },
      {
        name: "description",
        content:
          "Ask about annual, sick, unpaid, parental and bereavement leave — entitlements, notice periods, forms and approvals.",
      },
      { property: "og:title", content: "Leave & HR Assistant" },
      {
        property: "og:description",
        content:
          "Instant answers from your company leave policy: entitlements, notice periods, forms and approvals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="surface-hero min-h-[100dvh]">
      <HrChat />
    </main>
  );
}
