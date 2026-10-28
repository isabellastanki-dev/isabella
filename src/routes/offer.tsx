import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer")({
  component: OfferPage,
});

const features = [
  {
    title: "The 21-Day Manifestation Script",
    text: "A word-for-word daily declaration you read aloud in under seven minutes, written to line up your words with God's promises.",
  },
  {
    title: "The Morning Alignment Prayer",
    text: "A short prayer to open your day with clarity, gratitude and expectation before the noise of the world gets in.",
  },
  {
    title: "The 7 Promise Cards",
    text: "Printable cards with the verses most connected to provision, healing, peace and direction for your season.",
  },
  {
    title: "The Evening Release Journal",
    text: "Three guided prompts that help you close the day in peace and hand over what you cannot carry.",
  },
  {
    title: "The Faith Over Fear Audio Guide",
    text: "A calm 12-minute audio to listen to whenever doubt gets louder than your faith.",
  },
  {
    title: "Lifetime access and updates",
    text: "Everything is yours forever, including future editions of the script, with no recurring charge.",
  },
];

const steps = [
  {
    title: "Choose your focus",
    text: "Tell the script what you are believing for this season: peace, provision, health, direction or restoration.",
  },
  {
    title: "Read it out loud each morning",
    text: "Seven minutes, one page, one promise. Speak it with intention and let your own voice become the reminder.",
  },
  {
    title: "Close the day in peace",
    text: "At night, answer three short prompts and release what happened. Twenty-one days is all it takes to build the rhythm.",
  },
];

const testimonials = [
  {
    name: "Martha R.",
    role: "Script member since 2023",
    quote:
      "I had been praying the same prayer for years without a rhythm. Reading the script every morning changed the way I start my day. It is simple, short and it keeps me grounded.",
  },
  {
    name: "Daniel K.",
    role: "Father of three",
    quote:
      "Seven minutes is something I actually manage. Three weeks in, my home feels calmer and I stop the day with far less noise in my head.",
  },
  {
    name: "Grace A.",
    role: "Script member since 2024",
    quote:
      "I love that it is not complicated. One page in the morning, one page at night. The promise cards are on my kitchen wall.",
  },
];

const faqs = [
  {
    q: "How do I receive the script?",
    a: "It is delivered digitally right after your order. You get instant access to a private page with the printable PDF, the promise cards and the audio guide, so you can start on the very same day.",
  },
  {
    q: "Do I need to be a member of a specific church?",
    a: "No. The script is written for anyone who wants a daily practice built on faith and Scripture. It does not replace your own congregation, teacher or pastor.",
  },
  {
    q: "How much time does it take each day?",
    a: "About seven minutes in the morning and three minutes in the evening. If you only have the morning, that is enough to build the rhythm.",
  },
  {
    q: "Is this a one-time payment?",
    a: "Yes. You pay once and keep access for life, including future editions. There is no subscription and no recurring charge.",
  },
  {
    q: "What if it is not for me?",
    a: "You have 30 days to change your mind. Write to the support address inside your welcome email and your purchase is refunded, no long explanation needed.",
  },
];

function scrollToOffer() {
  document.getElementById("offer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary">
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-foreground transition hover:text-primary"
      >
        <span>{q}</span>
        <span aria-hidden="true" className={`shrink-0 text-2xl leading-none text-primary transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

function OfferPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground sm:text-sm">
        Limited release: 82% off the Divine Manifestation Script — today only
      </div>

      <header className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              ✦
            </span>
            <span className="text-lg font-bold tracking-tight">Plan Faith</span>
          </div>
          <button
            type="button"
            onClick={scrollToOffer}
            className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            See my price
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Your plan is ready
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Divine Manifestation Script
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Twenty-one days of speaking God's promises over your life — seven minutes each morning, one page each night. A simple rhythm for peace, provision and direction.
            </p>
            <ul className="mt-7 space-y-3 text-base">
              {["Instant digital access after checkout", "Printable script, promise cards and audio guide", "One-time payment, lifetime access", "30-day money-back guarantee"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={scrollToOffer}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Get my script for $17
              </button>
              <span className="text-sm text-muted-foreground">
                <s className="opacity-70">$97</s> today · instant access
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Day 1 of 21</span>
                <span>Plan Faith</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-card-foreground">The Morning Declaration</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “Today I choose to believe before I see. I speak peace over my home, provision over my work and clarity over my next step. What was spoken over me in fear, I hand over. What was promised to me in faith, I receive.”
              </p>
              <div className="mt-6 space-y-3">
                {["Read out loud", "Speak your focus", "Mark the day"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">{index + 1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-muted-foreground">Preview of the printable script</p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4">
            {[
              { value: "21", label: "days to build the rhythm" },
              { value: "7 min", label: "a day, in the morning" },
              { value: "47.000+", label: "readers in 32 countries" },
              { value: "30 dias", label: "de garantia total" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What comes inside your script</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Everything is delivered together in one place, so you are not left figuring out what to do first.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/50">
                <Check />
                <h3 className="mt-3 text-base font-bold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-3 text-base text-muted-foreground">Three simple steps, repeated for twenty-one days.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-border bg-background p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Words from people who started</h2>
            <p className="mt-3 text-base text-muted-foreground">Experiences shared by readers of the script.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div aria-hidden="true" className="text-sm tracking-widest text-primary">★★★★★</div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-card-foreground">“{item.quote}”</blockquote>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-bold text-card-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="offer" className="scroll-mt-24 border-y border-border bg-primary/5">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
            <div className="overflow-hidden rounded-3xl border-2 border-primary bg-card shadow-2xl">
              <div className="bg-primary px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                Your plan, delivered instantly
              </div>
              <div className="px-6 py-8 text-center sm:px-10">
                <h2 className="text-2xl font-bold text-card-foreground sm:text-3xl">Your Divine Manifestation Script</h2>
                <p className="mt-2 text-sm text-muted-foreground">Complete kit · lifetime access · one-time payment</p>
                <div className="mt-6 flex items-end justify-center gap-3">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">$17</span>
                  <span className="pb-2 text-lg text-muted-foreground"><s>$97</s></span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">82% off today</p>
                <ul className="mt-7 space-y-3 text-left">
                  {[
                    "The 21-day manifestation script (printable PDF)",
                    "The morning alignment prayer",
                    "The 7 promise cards to print",
                    "The evening release journal",
                    "The Faith Over Fear audio guide",
                    "Free updates, forever",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-card-foreground">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={scrollToOffer}
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Yes, reveal my plan
                </button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Secure checkout. You are covered by the 30-day money-back guarantee.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full border border-border px-3 py-1">🔒 Secure payment</span>
                  <span className="rounded-full border border-border px-3 py-1">⚡ Instant access</span>
                  <span className="rounded-full border border-border px-3 py-1">✅ 30-day guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Questions before you start</h2>
          <div className="mt-8 rounded-2xl border border-border bg-card px-6">
            {faqs.map((faq) => (
              <Faq key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-2xl px-5 py-14 text-center sm:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Twenty-one days from now, you will have a rhythm</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Start tomorrow morning with one page, spoken out loud. Everything else is already prepared for you.
            </p>
            <button
              type="button"
              onClick={scrollToOffer}
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto"
            >
              Reveal my plan for $17
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-5 py-10 text-center text-xs leading-relaxed text-muted-foreground sm:px-8">
        <p className="mx-auto max-w-3xl">
          Plan Faith is an independent publisher and is not affiliated with, endorsed by or sponsored by Facebook, Instagram or Meta Platforms, Inc. Testimonials reflect individual experiences and results vary from person to person. The content offered here is inspirational and is not a substitute for medical, legal, financial or professional advice.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Plan Faith. All rights reserved.</p>
      </footer>
    </div>
  );
}
