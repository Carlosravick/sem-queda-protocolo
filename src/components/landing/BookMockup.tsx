type BookMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Mockup 3D de livro no estilo da referência: capa quase frontal com leve
 * inclinação, bloco de páginas visível na lateral esquerda, sombra de contato
 * suave e fundo claro (sem painel escuro).
 */
export function BookMockup({ src, alt, className = "" }: BookMockupProps) {
  return (
    <div className={`group relative ${className}`}>
      <div className="[perspective:1600px]">
        <div className="relative mx-auto w-[82%] [transform-style:preserve-3d] [transform:rotateY(10deg)] transition-transform duration-500 ease-out group-hover:[transform:rotateY(4deg)]">
          {/* bloco de páginas / espessura na lateral esquerda */}
          <span
            aria-hidden
            className="absolute inset-y-[1%] -left-[5.5%] w-[6%] rounded-l-[3px] bg-gradient-to-l from-black/20 via-background to-background/70 [transform:rotateY(-72deg)] [transform-origin:right_center]"
          />

          {/* capa */}
          <div className="relative overflow-hidden rounded-[3px] rounded-r-[6px] shadow-[0_2px_6px_rgba(58,53,48,0.12),0_22px_44px_-18px_rgba(58,53,48,0.45)]">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              width={768}
              height={1024}
              className="block h-auto w-full"
            />
            {/* vinco da lombada */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/28 via-black/8 to-transparent"
            />
            {/* leve brilho de luz na capa */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-black/10"
            />
          </div>
        </div>
      </div>

      {/* sombra de contato no chão */}
      <span
        aria-hidden
        className="mx-auto mt-3 block h-3 w-[68%] rounded-[100%] bg-foreground/25 blur-md"
      />
    </div>
  );
}
