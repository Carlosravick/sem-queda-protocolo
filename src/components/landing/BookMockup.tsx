type BookMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Mockup 3D de capa estilo "livro em pé" (perspectiva de três quartos),
 * com bloco de páginas creme visível na lateral direita, lombada e sombra
 * projetada sobre um fundo escuro — inspirado no render de referência.
 */
export function BookMockup({ src, alt, className = "" }: BookMockupProps) {
  return (
    <div className={`${className}`}>
      {/* painel de fundo escuro */}
      <div className="relative rounded-[1.25rem] bg-foreground/90 px-6 pb-8 pt-6">
        <div className="[perspective:1200px]">
          <div className="relative mx-auto w-full [transform-style:preserve-3d] [transform:rotateY(-24deg)_rotateX(6deg)] transition-transform duration-500 ease-out hover:[transform:rotateY(-8deg)_rotateX(2deg)]">
            {/* bloco de páginas (lateral direita) */}
            <span
              aria-hidden
              className="absolute -right-[16%] top-[1.5%] bottom-[1.5%] w-[18%] rounded-r-md bg-background ring-1 ring-black/10"
            />
            {/* capa */}
            <div className="relative overflow-hidden rounded-l-sm rounded-r-md shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] ring-1 ring-black/25">
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
                className="pointer-events-none absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black/45 via-black/15 to-transparent"
              />
              {/* brilho de folha na borda direita */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-[6%] bg-gradient-to-l from-white/20 to-transparent"
              />
            </div>
          </div>
        </div>
        {/* sombra projetada no "chão" */}
        <span
          aria-hidden
          className="absolute -bottom-2 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/45 blur-md"
        />
      </div>
    </div>
  );
}
