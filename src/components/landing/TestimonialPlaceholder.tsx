type Props = {
  featured?: boolean;
  context?: string;
};

function AvatarGeneric() {
  return (
    <div
      aria-hidden
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-secondary"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary/40" fill="currentColor">
        <circle cx="12" cy="8.5" r="3.75" />
        <path d="M4.5 20.5c0-3.7 3.36-6.5 7.5-6.5s7.5 2.8 7.5 6.5z" />
      </svg>
    </div>
  );
}

export function TestimonialPlaceholder({ featured = false, context }: Props) {
  return (
    <figure
      className={`rounded-2xl border border-dashed border-primary/25 bg-card p-5 ${
        featured ? "shadow-soft sm:p-7" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <AvatarGeneric />
          <div className="space-y-1.5">
            <div className="h-3 w-28 rounded-full bg-secondary" />
            <div className="h-2.5 w-20 rounded-full bg-secondary/70" />
          </div>
        </div>
        <span className="rounded-full bg-accent px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-accent-foreground">
          em breve
        </span>
      </div>

      <div className={`mt-5 space-y-2.5 ${featured ? "sm:mt-6" : ""}`}>
        <div className="h-2.5 w-full rounded-full bg-secondary" />
        <div className="h-2.5 w-11/12 rounded-full bg-secondary" />
        <div className="h-2.5 w-9/12 rounded-full bg-secondary/70" />
        {featured && <div className="h-2.5 w-10/12 rounded-full bg-secondary/70" />}
      </div>

      {context && (
        <figcaption className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          {context}
        </figcaption>
      )}
    </figure>
  );
}
