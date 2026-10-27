import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer")({
  component: OfferPage,
});

function OfferPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12 text-foreground sm:px-8">
      <section aria-labelledby="offer-title" className="w-full max-w-3xl rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
        <h1 id="offer-title" className="text-3xl font-bold tracking-tight text-card-foreground sm:text-5xl">
          Your Divine Manifestation Script
        </h1>
      </section>
    </main>
  );
}
