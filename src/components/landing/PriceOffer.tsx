import { Button } from "@/components/ui/button";

export function PriceOffer() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-gradient-hero p-7 text-center shadow-lift sm:p-10">
        <p className="text-left text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
          Esse seria o valor total de cada item vendido separadamente — e poderia custar ainda mais,
          considerando que é um protocolo completo pra tratar a causa da queda por estresse. Mas hoje
          eu quero firmar um compromisso com você, e provar que sim, é possível parar de ver seu
          cabelo no ralo.
        </p>

        <div className="mt-8 rounded-2xl bg-primary-foreground/95 px-5 py-7">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            DE <span className="line-through">R$199,50</span>
          </p>
          <p className="mt-2 font-serif text-sm uppercase tracking-[0.16em] text-foreground">
            Por apenas
          </p>
          <p className="font-serif text-5xl font-bold text-accent-foreground sm:text-6xl">R$24,90</p>
          <p className="mt-1 font-serif text-base text-foreground">à vista</p>
        </div>

        <p className="mt-6 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-accent-foreground sm:text-sm">
          Condição de lançamento válida para as primeiras 100 compras.
        </p>

        <Button asChild variant="cta" size="xl" className="mt-6 w-full">
          <a href="#">Sim, quero garantir por R$24,90</a>
        </Button>
      </div>
    </section>
  );
}
