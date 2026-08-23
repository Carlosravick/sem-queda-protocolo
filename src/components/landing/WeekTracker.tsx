type Props = {
  variant?: "seal" | "full";
};

const weeks = [
  { label: "Semana 1", days: [1, 2, 3, 4, 5, 6, 7] },
  { label: "Semana 2", days: [8, 9, 10, 11, 12, 13, 14] },
  { label: "Semana 3", days: [15, 16, 17, 18, 19, 20, 21] },
];

export function WeekTracker({ variant = "seal" }: Props) {
  if (variant === "seal") {
    return (
      <div className="inline-flex flex-col gap-3 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-serif text-lg text-primary-foreground">21 dias</span>
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            3 semanas
          </span>
        </div>
        <div className="flex items-end gap-3">
          {weeks.map((week, wi) => (
            <div key={week.label} className="flex flex-col gap-1.5">
              <div className="flex gap-1">
                {week.days.map((day) => (
                  <span
                    key={day}
                    className={`h-2.5 w-2.5 rounded-full ${
                      wi === 0
                        ? "bg-primary-foreground/90"
                        : wi === 1
                          ? "bg-primary-foreground/55"
                          : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[0.6rem] uppercase tracking-[0.12em] text-primary-foreground/60">
                S{wi + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-secondary/60 p-5 sm:p-7">
      <div className="mb-5 flex items-baseline justify-between">
        <span className="font-serif text-xl text-primary">A jornada dos 21 dias</span>
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
          Diário de Progresso
        </span>
      </div>

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-4">
        {weeks.map((week, wi) => (
          <div key={week.label} className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-base text-foreground">{week.label}</span>
              {wi < weeks.length - 1 && (
                <span aria-hidden className="text-accent-foreground">
                  →
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1.5">
              {week.days.map((day) => (
                <div
                  key={day}
                  className="flex aspect-square items-center justify-center rounded-md border border-primary/15 bg-card text-[0.65rem] font-medium text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {wi === 0
                ? "Marque as 2 ações diárias: corpo e mente."
                : wi === 1
                  ? "A rotina fica automática e a queda começa a diminuir."
                  : "Compare com a Semana 1 e veja o progresso real."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
