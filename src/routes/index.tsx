import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: DivineManifestationPage,
});

function DivineManifestationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-[#faf7f2] text-[#302b38]">
        <header className="border-b border-[#e5ded5]">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
            <a href="#" aria-label="Plan Faith home" className="font-serif text-2xl tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#695181]">
              plan<span className="italic text-[#795b90]">faith</span><span className="ml-1 text-[#a38356]">✦</span>
            </a>
            <a href="#reflection" className="text-sm font-medium text-[#695181] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              A moment for you <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <main>
          <section aria-labelledby="hero-title" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#795b90]">Faith. Intention. Possibility.</p>
              <h1 id="hero-title" className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Your Divine<br />
                <span className="italic text-[#795b90]">Manifestation</span><br />
                Script
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-[#716877]">
                A quiet moment to reconnect with your faith, put your hopes into words, and approach your next chapter with intention.
              </p>
              <a href="#reflection" className="mt-9 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#695181] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#695181]/10 transition hover:bg-[#523d69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#695181]">
                Explore the script <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs tracking-wide text-[#716877]">Make space for reflection. Move forward with faith.</p>
            </div>

            <div aria-hidden="true" className="relative flex min-h-[410px] items-center justify-center overflow-hidden rounded-t-full bg-[#eee7ef] px-9 py-14 sm:min-h-[510px]">
              <div className="absolute inset-8 rounded-t-full border border-white/70" />
              <span className="absolute right-9 top-20 text-4xl text-[#ad8d60]">✧</span>
              <span className="absolute bottom-14 left-8 text-3xl text-[#ad8d60]">✦</span>
              <div className="relative w-full max-w-[270px] rotate-[-6deg] rounded-r-lg border border-[#e5dbca] border-l-[#d7c8b1] bg-[#fffcf5] px-7 py-12 text-center shadow-[16px_22px_40px_-14px_rgba(60,40,70,0.35)] sm:py-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#877557]">Plan Faith</p>
                <div className="mx-auto my-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c7b38e] text-3xl text-[#ad8d60]">✦</div>
                <p className="font-serif text-3xl leading-tight">Your Divine<br /><span className="italic text-[#795b90]">Manifestation</span><br />Script</p>
                <div className="mx-auto my-7 h-px w-10 bg-[#c7b38e]" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#877557]">A moment of intention</p>
              </div>
            </div>
          </section>

          <div className="border-y border-[#e5ded5] bg-[#f2ece4] px-6 py-5">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-medium uppercase tracking-[0.16em] text-[#716877]">
              <span>Rooted in faith</span><span aria-hidden="true" className="text-[#ad8d60]">✦</span><span>Guided by intention</span><span aria-hidden="true" className="text-[#ad8d60]">✦</span><span>A space to reflect</span>
            </div>
          </div>

          <section aria-labelledby="intention-title" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#795b90]">Begin where you are</p>
              <h2 id="intention-title" className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A little stillness.<br /><span className="italic text-[#795b90]">A more intentional tomorrow.</span></h2>
              <p className="mt-6 leading-relaxed text-[#716877]">You don’t need to have every answer. Give yourself room to listen, acknowledge what matters, and choose one meaningful step forward.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { number: "01", title: "Pause and reconnect", text: "Find a comfortable place, take a slow breath, and let this moment be enough." },
                { number: "02", title: "Name your intention", text: "Reflect on what you hope to nurture in your life and why it matters to you." },
                { number: "03", title: "Take a gentle step", text: "Choose one small action that aligns with your values and the intention you’ve set." },
              ].map((item) => (
                <article key={item.number} className="rounded-2xl border border-[#e5ded5] bg-white/50 p-8">
                  <span className="font-serif text-3xl italic text-[#ab946f]">{item.number}</span>
                  <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#716877]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="reflection" aria-labelledby="reflection-title" className="scroll-mt-8 bg-[#eee7ef] px-6 py-20 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span aria-hidden="true" className="text-3xl text-[#ad8d60]">✦</span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#795b90]">An example reflection</p>
              <h2 id="reflection-title" className="mt-4 font-serif text-4xl sm:text-5xl">Words to begin with</h2>
              <blockquote className="mt-9 font-serif text-2xl italic leading-relaxed text-[#62516e] sm:text-3xl sm:leading-relaxed">
                “Today, I make room for gratitude, clarity, and courage. I honor the hopes in my heart while staying present to the life before me. May my next step be guided by faith, grounded in kindness, and open to possibility.”
              </blockquote>
              <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#716877]">Read slowly. Notice what resonates. You can adapt these words to your own beliefs, experiences, and intentions.</p>
            </div>
          </section>

          <section aria-labelledby="questions-title" className="mx-auto max-w-3xl px-6 py-20">
            <h2 id="questions-title" className="mb-9 text-center font-serif text-4xl">A few gentle reminders</h2>
            {[
              { question: "How can I use this reflection?", answer: "Read it at a time that feels comfortable. You might follow it with a few lines in a journal or a quiet moment to consider your next step." },
              { question: "Do I need to use these exact words?", answer: "No. Let the reflection be a starting point, and choose language that feels meaningful and authentic to you." },
              { question: "Does manifestation guarantee a particular outcome?", answer: "No. Reflection can help you explore your intentions, but it does not guarantee outcomes or replace practical action or professional advice." },
            ].map((item) => (
              <details key={item.question} className="group border-b border-[#e5ded5] py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#695181] [&::-webkit-details-marker]:hidden">
                  {item.question}<span aria-hidden="true" className="text-xl text-[#795b90] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-[#716877]">{item.answer}</p>
              </details>
            ))}
          </section>
        </main>

        <footer className="border-t border-[#e5ded5] px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-serif text-xl">plan<span className="italic text-[#795b90]">faith</span></p>
            <p className="text-xs leading-relaxed text-[#716877]">A space for faith, intention, and personal reflection.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
