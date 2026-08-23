type BookMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Mockup 3D de capa (efeito livro/e-book com lombada e sombra). */
export function BookMockup({ src, alt, className = "" }: BookMockupProps) {
  return (
    <div className={`[perspective:1200px] ${className}`}>
      <div className="group relative transition-transform duration-500 ease-out [transform:rotateY(-16deg)_rotateX(5deg)] hover:[transform:rotateY(-6deg)_rotateX(2deg)] [transform-style:preserve-3d]">
        <div className="relative overflow-hidden rounded-r-lg rounded-l-sm shadow-lift ring-1 ring-foreground/10">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={768}
            height={1024}
            className="block h-auto w-full"
          />
          {/* lombada */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-foreground/35 via-foreground/10 to-transparent"
          />
          {/* brilho de folha */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-background/25 to-transparent opacity-60"
          />
        </div>
        {/* sombra projetada */}
        <span
          aria-hidden
          className="absolute -bottom-3 left-[6%] h-4 w-[88%] rounded-[100%] bg-foreground/25 blur-md"
        />
      </div>
    </div>
  );
}
