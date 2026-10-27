import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: CarSelectionPage,
});

const cars = [
  { id: "hatchback", label: "A compact hatchback" },
  { id: "sedan", label: "A comfortable sedan" },
  { id: "suv", label: "A spacious SUV" },
] as const;

type CarType = (typeof cars)[number]["id"];

function CarIllustration({ type, label }: { type: CarType; label: string }) {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label={label} className="mx-auto w-full max-w-2xl text-primary">
      <ellipse cx="320" cy="251" rx="254" ry="14" className="fill-foreground/10" />
      {type === "hatchback" && (
        <g>
          <path d="M110 216 L112 155 L155 102 Q166 88 190 88 H330 Q351 88 365 106 L417 157 L485 173 Q511 180 515 208 V229 H110 Z" fill="currentColor" />
          <path d="M144 151 L178 108 H246 V151 Z M260 108 H327 Q338 108 348 120 L378 151 H260 Z" className="fill-background/80" />
          <path d="M119 179 H145 M479 190 H503" className="stroke-background" strokeWidth="10" />
          <path d="M267 171 H289" className="stroke-background/70" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
      {type === "sedan" && (
        <g>
          <path d="M65 218 V187 Q65 176 85 173 L153 165 L215 111 Q230 98 254 98 H355 Q378 98 396 116 L447 162 L541 176 Q566 180 574 199 V229 H65 Z" fill="currentColor" />
          <path d="M191 160 L233 121 Q242 116 255 116 H294 V160 Z M309 116 H352 Q366 116 379 128 L410 160 H309 Z" className="fill-background/80" />
          <path d="M74 189 H102 M535 191 H561" className="stroke-background" strokeWidth="10" />
          <path d="M265 179 H283 M369 179 H387" className="stroke-background/70" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
      {type === "suv" && (
        <g>
          <path d="M83 225 V123 Q83 88 111 83 H350 Q375 83 392 106 L436 151 L526 167 Q553 172 558 199 V232 H83 Z" fill="currentColor" />
          <path d="M106 105 H189 V148 H106 Z M204 105 H281 V148 H204 Z M296 105 H346 Q357 105 368 119 L390 148 H296 Z" className="fill-background/80" />
          <path d="M127 73 H335" className="stroke-foreground/60" strokeWidth="7" strokeLinecap="round" />
          <path d="M89 175 H112 M520 185 H548" className="stroke-background" strokeWidth="10" />
          <path d="M246 170 H264 M345 170 H363" className="stroke-background/70" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
      <g className="fill-foreground">
        <circle cx="171" cy="226" r="36" />
        <circle cx="462" cy="226" r="36" />
      </g>
      <g className="fill-muted">
        <circle cx="171" cy="226" r="19" />
        <circle cx="462" cy="226" r="19" />
      </g>
      <g className="fill-foreground/50">
        <circle cx="171" cy="226" r="8" />
        <circle cx="462" cy="226" r="8" />
      </g>
    </svg>
  );
}

function CarSelectionPage() {
  const [selected, setSelected] = useState<CarType>("sedan");
  const car = cars.find((item) => item.id === selected)!;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12 text-foreground sm:px-8">
      <section aria-labelledby="car-title" className="w-full max-w-4xl text-center">
        <h1 id="car-title" className="text-3xl font-bold tracking-tight sm:text-5xl">Which car would you choose?</h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">Select the car that feels right for you.</p>
        <figure className="mt-10 rounded-3xl border border-border bg-card px-4 py-8 shadow-sm sm:px-10">
          <CarIllustration type={selected} label={car.label} />
          <figcaption aria-live="polite" className="mt-4 text-xl font-semibold text-card-foreground">{car.label}</figcaption>
        </figure>
        <fieldset className="mt-8 grid gap-4 sm:grid-cols-3">
          <legend className="sr-only">Choose your car</legend>
          {cars.map((item) => (
            <label key={item.id} className="relative cursor-pointer">
              <input type="radio" name="car" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} className="peer sr-only" />
              <span className="flex min-h-16 items-center justify-center rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-card-foreground transition hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-ring">
                {item.label}
              </span>
            </label>
          ))}
        </fieldset>
        <button
          type="button"
          onClick={() => window.location.assign("https://planfaith.com/offer?utm_source=FB&utm_medium=CJ-156%7C52571356760376&utm_campaign=BIDCAP-55%7C52571356760176&utm_content=ARCANJO-C%7C52571360932776&utm_term=Facebook_Mobile_Feed&fbclid=IwdGRjcAUEN31wZG9mAWV4dG4DYWVIATAAYWRpZAAAL9A5V9VAc3JOYwZhcHBfaWQMMzUwNjg1NTMxNz%7C4AAEe1kJCDSoH2ZPhkQR9MiTcQ-SKqC2Mu3EKPT%7CGQdCj7acX2leZnEv4U_alo_aem_2GJeWGjnFdeZktBpJAV0Tg&utm_id=52571356760176")}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto"
        >
          Reveal my plan
        </button>
      </section>
    </main>
  );
}
