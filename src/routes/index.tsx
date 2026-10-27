import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: CarSelectionPage,
});

type CarId = "compact" | "sedan" | "suv";

const OPTIONS: Array<{ id: CarId; label: string; hint: string }> = [
  {
    id: "compact",
    label: "A compact hatchback",
    hint: "Ágil na cidade e fácil de estacionar.",
  },
  {
    id: "sedan",
    label: "A comfortable sedan",
    hint: "Conforto e espaço para viagens longas.",
  },
  {
    id: "suv",
    label: "A spacious SUV",
    hint: "Porta-malas grande e posição de dirigir elevada.",
  },
];

function HatchbackArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      role="img"
      aria-label="Ilustração de um hatchback compacto"
      className="h-auto w-full"
    >
      <ellipse cx="200" cy="154" rx="145" ry="9" className="fill-slate-900/10" />
      <path
        d="M40 118 V106 c0-8 6-14 14-16 l50-11 l24-24 c9-9 21-14 34-14 h44 c13 0 25 5 33 14 l28 30 l40 12 c10 3 16 9 16 17 v4 c0 6-4 10-10 10 H50 c-6 0-10-4-10-10 Z"
        className="fill-sky-500"
      />
      <path d="M132 76 L150 54 H170 V76 Z" className="fill-slate-100" />
      <path d="M180 54 H236 L258 76 H180 Z" className="fill-slate-100" />
      <circle cx="108" cy="126" r="24" className="fill-slate-900" />
      <circle cx="108" cy="126" r="10" className="fill-slate-300" />
      <circle cx="288" cy="126" r="24" className="fill-slate-900" />
      <circle cx="288" cy="126" r="10" className="fill-slate-300" />
    </svg>
  );
}

function SedanArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      role="img"
      aria-label="Ilustração de um sedã"
      className="h-auto w-full"
    >
      <ellipse cx="200" cy="154" rx="150" ry="9" className="fill-slate-900/10" />
      <path
        d="M40 118 V104 c0-8 6-14 14-16 l52-11 l26-25 c9-9 21-14 34-14 h62 c13 0 25 5 34 14 l26 24 l34 11 c9 3 14 9 14 17 v12 c0 6-4 10-10 10 H50 c-6 0-10-4-10-10 Z"
        className="fill-slate-700"
      />
      <path d="M138 74 L164 48 H208 V74 Z" className="fill-slate-100" />
      <path d="M220 48 H258 L274 74 H220 Z" className="fill-slate-100" />
      <rect x="196" y="96" width="28" height="6" rx="3" className="fill-slate-300" />
      <rect x="242" y="96" width="28" height="6" rx="3" className="fill-slate-300" />
      <circle cx="112" cy="126" r="25" className="fill-slate-900" />
      <circle cx="112" cy="126" r="10" className="fill-slate-300" />
      <circle cx="302" cy="126" r="25" className="fill-slate-900" />
      <circle cx="302" cy="126" r="10" className="fill-slate-300" />
    </svg>
  );
}

function SuvArt() {
  return (
    <svg
      viewBox="0 0 400 180"
      role="img"
      aria-label="Ilustração de um SUV espaçoso"
      className="h-auto w-full"
    >
      <ellipse cx="200" cy="154" rx="148" ry="9" className="fill-slate-900/10" />
      <path
        d="M40 118 V94 c0-8 6-14 14-16 l48-10 l16-24 c7-10 18-16 30-16 h66 c14 0 26 6 34 16 l30 34 l32 10 c9 3 14 9 14 17 v13 c0 6-4 10-10 10 H50 c-6 0-10-4-10-10 Z"
        className="fill-emerald-600"
      />
      <path d="M126 64 L138 36 H176 V64 Z" className="fill-slate-100" />
      <path d="M188 36 H214 C224 36 232 41 238 50 L248 64 H188 Z" className="fill-slate-100" />
      <rect x="196" y="92" width="30" height="6" rx="3" className="fill-slate-300" />
      <rect x="244" y="92" width="30" height="6" rx="3" className="fill-slate-300" />
      <circle cx="112" cy="126" r="26" className="fill-slate-900" />
      <circle cx="112" cy="126" r="11" className="fill-slate-300" />
      <circle cx="300" cy="126" r="26" className="fill-slate-900" />
      <circle cx="300" cy="126" r="11" className="fill-slate-300" />
    </svg>
  );
}

function CarArt({ id }: { id: CarId }) {
  if (id === "compact") return <HatchbackArt />;
  if (id === "suv") return <SuvArt />;
  return <SedanArt />;
}

function CarSelectionPage() {
  const [selected, setSelected] = useState<CarId>("sedan");
  const current = OPTIONS.find((option) => option.id === selected) ?? OPTIONS[1];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Escolha seu carro
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Qual carro combina com você?
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Selecione uma opção ao lado para ver o veículo correspondente.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="w-full max-w-md">
              <CarArt id={selected} />
            </div>
          </div>

          <div className="space-y-3" role="radiogroup" aria-label="Categorias de carro">
            {OPTIONS.map((option) => {
              const active = option.id === selected;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(option.id)}
                  className={
                    "w-full rounded-xl border p-4 text-left transition " +
                    (active
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border bg-card hover:border-primary/40 hover:bg-accent/40")
                  }
                >
                  <span className="block font-semibold">{option.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {option.hint}
                  </span>
                </button>
              );
            })}
            <p className="pt-2 text-sm text-muted-foreground" aria-live="polite">
              Selecionado:{" "}
              <span className="font-medium text-foreground">{current.label}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
