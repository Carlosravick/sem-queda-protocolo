import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WeekTracker } from "@/components/landing/WeekTracker";
import { TestimonialPlaceholder } from "@/components/landing/TestimonialPlaceholder";
import { PriceOffer } from "@/components/landing/PriceOffer";
import { BookMockup } from "@/components/landing/BookMockup";
import coverProtocolo from "@/assets/cover-protocolo.jpg";
import coverBonus1 from "@/assets/cover-bonus-1.jpg";
import coverBonus2 from "@/assets/cover-bonus-2.jpg";
import coverBonus3 from "@/assets/cover-bonus-3.jpg";
import coverBonus4 from "@/assets/cover-bonus-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo 21 Dias Sem Queda | Pare a queda de cabelo por estresse" },
      {
        name: "description",
        content:
          "Checklist diário pronto para reduzir a queda de cabelo por estresse em 21 dias, com 10 minutos de ações por dia. Protocolo + 4 bônus por R$24,90.",
      },
      { property: "og:title", content: "Protocolo 21 Dias Sem Queda" },
      {
        property: "og:description",
        content:
          "Um checklist diário pronto, dividido em 3 semanas, para tratar a causa da queda: o estresse. Protocolo + 4 bônus por R$24,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const receiveItems = [
  "Protocolo 21 Dias Sem Queda (checklist diário completo)",
  "Bônus 1: Por Que Isso Está Acontecendo com Você",
  "Bônus 2: Cardápio Anti-Queda de 7 Dias",
  "Bônus 3: Os 7 Erros que Pioram a Queda por Estresse",
  "Bônus 4: Diário de Progresso Visual",
];

const steps = [
  {
    title: "Entenda o ciclo",
    text: "leia em 2 minutos por que o estresse faz o cabelo cair (e por que isso é reversível).",
  },
  {
    title: "Siga as 2 ações diárias",
    text: "corpo + mente, todos os dias, marcando o checklist da semana.",
  },
  {
    title: "Acompanhe no Diário de Progresso",
    text: "veja a queda diminuir semana a semana, sem depender da memória.",
  },
];

const deliverables = [
  {
    tag: "Entregável 01",
    title: "Protocolo 21 Dias Sem Queda",
    text: "Checklist diário com 2 ações simples (corpo + mente), dividido em 3 semanas. Menos de 10 minutos por dia, sem produto caro.",
    highlight: false,
    cover: coverProtocolo,
  },
  {
    tag: "Bônus 01",
    title: "Por Que Isso Está Acontecendo com Você",
    text: 'O mapa do ciclo ansiedade-queda, pra você entender que não é genético nem definitivo. Elimina a dúvida: "será que isso funciona pro meu caso".',
    highlight: false,
    cover: coverBonus1,
  },
  {
    tag: "Bônus 02",
    title: "Cardápio Anti-Queda de 7 Dias",
    text: "Refeições prontas com os nutrientes que mais apoiam a saúde do fio. Economiza o tempo de pesquisar o que comer.",
    highlight: false,
    cover: coverBonus2,
  },
  {
    tag: "Bônus 03",
    title: "Os 7 Erros que Pioram a Queda por Estresse",
    text: "Lista direta do que evitar — e o que fazer no lugar. Evita que você piore sem perceber.",
    highlight: false,
    cover: coverBonus3,
  },
  {
    tag: "Bônus 04",
    title: "Diário de Progresso Visual",
    text: 'Tracker diário pra acompanhar queda, estresse e hábitos ao longo dos 21 dias. Você vê o progresso real, em vez de só "achar" que talvez esteja melhor.',
    highlight: true,
    cover: coverBonus4,
  },
];


const forWhom = [
  "Para quem sente a queda aumentar em período de estresse ou ansiedade — não é da sua cabeça, é o corpo reagindo.",
  "Para quem já trocou de shampoo, já tomou vitamina e não resolveu — o problema nunca foi o produto.",
  "Para quem quer voltar a se olhar no espelho sem contar os fios — sem esperar meses por uma consulta.",
  "Para quem prefere um plano simples de seguir em vez de mais uma pesquisa no Google — é só abrir e aplicar.",
];

const valueItems = [
  { name: "Protocolo 21 Dias Sem Queda", price: "R$57,90" },
  { name: "Bônus 1 — Por Que Isso Está Acontecendo com Você", price: "R$27,90" },
  { name: "Bônus 2 — Cardápio Anti-Queda de 7 Dias", price: "R$37,90" },
  { name: "Bônus 3 — Os 7 Erros que Pioram a Queda por Estresse", price: "R$27,90" },
  { name: "Bônus 4 — Diário de Progresso Visual", price: "R$47,90" },
];

const accessSteps = [
  {
    title: "FAÇA SUA COMPRA",
    text: "assim que finalizar, você recebe o acesso no e-mail cadastrado.",
  },
  {
    title: "ACESSE TUDO",
    text: "Protocolo e os 4 bônus liberados de uma vez, em PDF.",
  },
  {
    title: "TUDO PRONTO",
    text: "agora é só abrir a Semana 1 e começar hoje mesmo.",
  },
];

const faqs = [
  {
    q: "Qual a diferença desse protocolo pra ir num dermatologista?",
    a: "O protocolo não substitui avaliação médica — ele é um apoio diário de rotina pra tratar a causa mais comum desse tipo de queda (o estresse), sem o custo e a espera de uma consulta. Se sua queda for muito intensa ou persistente, o material recomenda buscar um dermatologista.",
  },
  { q: "Como recebo o acesso?", a: "Direto no seu e-mail, assim que a compra é aprovada." },
  {
    q: "Por quanto tempo tenho acesso ao material?",
    a: "Acesso vitalício — o PDF é seu, pode salvar e consultar quando quiser.",
  },
  {
    q: "Preciso comprar algum produto além do que já tenho em casa?",
    a: "Não. As ações do protocolo usam coisas que você já tem ou consegue facilmente, sem produto de marca específica.",
  },
  {
    q: "Funciona pra qualquer tipo de queda?",
    a: "O protocolo é focado em queda ligada a estresse/ansiedade (a mais comum nesse perfil). Se a queda for localizada em áreas específicas, o material orienta buscar avaliação médica pra confirmar a causa.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl leading-snug text-primary sm:text-3xl">{children}</h2>
  );
}

function LandingPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(entry ? !entry.isIntersecting : false),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* SEÇÃO 1 — HERO */}
      <header ref={heroRef} className="bg-gradient-hero px-5 pb-14 pt-16 sm:pt-20">
        <div className="mx-auto max-w-xl">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground/70">
            Protocolo 21 Dias Sem Queda
          </p>
          <h1 className="mt-5 font-serif text-3xl leading-[1.18] text-primary-foreground sm:text-[2.75rem]">
            Pare de contar os fios no ralo em 21 dias, seguindo só 10 minutos de ações por dia.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">
            Protocolo 21 Dias Sem Queda: um checklist diário pronto, sem precisar aprender nada novo.
          </p>
          <div className="mt-9">
            <WeekTracker variant="seal" />
          </div>
        </div>
      </header>

      {/* SEÇÃO 2 — PASSO A PASSO */}
      <section className="strands-bg px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>
            Esses são os 3 passos para parar a queda de cabelo por estresse:
          </SectionTitle>
          <ol className="mt-7 space-y-5">
            {steps.map((step) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <h3 className="font-serif text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <WeekTracker variant="full" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O QUE VOCÊ RECEBE */}
      <section className="bg-secondary/50 px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>O que você recebe</SectionTitle>
          <ul className="mt-6 space-y-3.5">
            {receiveItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 4 — PERFEITO PARA */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-xl rounded-2xl bg-accent p-6 sm:p-8">
          <h2 className="font-serif text-xl text-accent-foreground">Perfeito para</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
            Perfeito para mulheres de 25 a 40 anos com rotina corrida ou período de ansiedade, que
            notaram a queda de cabelo aumentar de repente. Serve para quem já trocou de shampoo, já
            tomou vitamina por conta própria e não viu resultado nenhum.
          </p>
        </div>
      </section>

      {/* SEÇÃO 6 — AGITAÇÃO DA DOR */}
      <section className="bg-gradient-hero px-5 py-14">
        <div className="mx-auto max-w-xl space-y-4 text-primary-foreground/90">
          <p className="font-serif text-xl leading-snug text-primary-foreground sm:text-2xl">
            Você está perdendo toda vez que ignora a queda achando que "vai passar sozinho".
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            Eu sei que você já cansou de contar os fios no ralo, na escova, no travesseiro — e de
            ouvir que isso é frescura.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            Isso ainda acontece porque pode ser que você ache que só dermatologista resolve, ou que
            já tentou de tudo e não vale mais a pena tentar de novo.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            E é isso que você vai encontrar no Protocolo 21 Dias Sem Queda: um caminho que trata a
            causa — o estresse — não só o sintoma.
          </p>
        </div>
      </section>

      {/* SEÇÃO 8 — ENTREGÁVEIS DETALHADO + BÔNUS */}
      <section className="strands-bg px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>
            O que você vai encontrar dentro do Protocolo 21 Dias Sem Queda
          </SectionTitle>
          <div className="mt-8 space-y-6">
            {deliverables.map((item) => (
              <article
                key={item.tag}
                className={
                  item.highlight
                    ? "rounded-2xl border-2 border-accent-foreground/40 bg-accent p-6 pb-8 shadow-lift"
                    : "rounded-2xl border border-border bg-card p-5 pb-8 shadow-soft"
                }
              >
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <BookMockup
                    src={item.cover}
                    alt={`Mockup da capa: ${item.title}`}
                    className={item.highlight ? "w-40 sm:w-44" : "w-32 sm:w-36"}
                  />
                  <div className="text-center sm:text-left">
                    <p
                      className={`text-[0.65rem] uppercase tracking-[0.18em] ${
                        item.highlight ? "text-accent-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.tag}
                      {item.highlight && " — bônus irresistível"}
                    </p>
                    <h3
                      className={`mt-2 font-serif ${
                        item.highlight ? "text-2xl text-foreground" : "text-lg text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>


          <Button asChild variant="cta" size="xl" className="mt-8 w-full">
            <a href="#">Quero acesso ao Protocolo + aos 4 bônus</a>
          </Button>
        </div>
      </section>

      {/* SEÇÃO 10 — PARA QUEM É */}
      <section className="bg-secondary/50 px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Para quem é</SectionTitle>
          <ul className="mt-6 space-y-4">
            {forWhom.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 11 — ANCORAGEM DE VALOR */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Veja tudo que você vai levar…</SectionTitle>
          <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {valueItems.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm leading-snug text-foreground">{item.name}</span>
                <span className="shrink-0 text-sm text-muted-foreground line-through">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-accent px-5 py-5 text-center font-serif text-xl leading-snug text-accent-foreground sm:text-2xl">
            No total, tudo isso deveria custar R$199,50
          </p>
        </div>
      </section>

      {/* SEÇÃO 12 — PREÇO + CTA */}
      <PriceOffer />

      {/* SEÇÃO 13 — COMO ACESSAR */}
      <section className="bg-secondary/50 px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Compre agora e receba seu acesso na hora!</SectionTitle>
          <div className="mt-7 space-y-4">
            {accessSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  {i === 0 ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M7 6h13l-1.5 8H8.5L7 6zm0 0L6.2 3H3v2h1.8L7 6zm2 12a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                  ) : i === 1 ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M6 2h8l4 4v16H6V2zm8 1.5V7h3.5L14 3.5zM8.5 12h7v1.6h-7V12zm0 3.5h7v1.6h-7v-1.6z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M9.5 17.5l-5-5 1.6-1.6 3.4 3.4 8.4-8.4L19.5 7.5l-10 10z" />
                    </svg>
                  )}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold tracking-wide text-foreground">{step.title}</span>{" "}
                  — {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 14 — GARANTIA */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-7 text-center shadow-soft sm:p-9">
          <span
            aria-hidden
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
              <path d="M12 2l7.5 3v6c0 4.6-3.1 8.6-7.5 10-4.4-1.4-7.5-5.4-7.5-10V5L12 2zm-1 13.8l5.2-5.2-1.5-1.5L11 12.8 9.3 11l-1.5 1.5 3.2 3.3z" />
            </svg>
          </span>
          <h2 className="mt-5 font-serif text-2xl text-primary">7 dias de garantia incondicional</h2>
          <p className="mt-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-base">
            Eis aqui o nosso acordo: você tem 7 dias para experimentar o conteúdo e, se ainda achar
            que ele não faz sentido pra você, basta enviar um pedido pra minha equipe e nós
            reembolsaremos 100% do valor pago. Preto no branco. Não estamos de brincadeira e queremos
            que você tenha resultado de verdade.
          </p>
        </div>
      </section>

      {/* SEÇÃO 15 — COMENTÁRIOS SOBRE O PRODUTO */}
      <section className="bg-secondary/50 px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Quem usou, aprovou</SectionTitle>
          <p className="mt-3 text-xs text-muted-foreground">
            Espaço reservado para comentários reais de quem concluiu os 21 dias.
          </p>
          <div className="mt-7 space-y-4">
            <TestimonialPlaceholder
              featured
              comment="Eu confesso que não estava acreditando muito, só fui acreditar de verdade quando vi o cabelo parando de cair. Na segunda semana já deu pra notar a diferença no ralo."
            />
            <TestimonialPlaceholder
              comment="No começo achei que não ia dar resultado, mas deu uma reduzida boa mesmo. Com o passar dos dias o cabelo foi parando de cair e eu nem acreditava."
            />
            <TestimonialPlaceholder
              comment="Pra mim o protocolo realmente fez diferença. Eu seguia contando os fios toda vez, e agora vejo bem menos queda do que antes de começar."
            />
            <TestimonialPlaceholder
              comment="Seguindo certinho os 21 dias, a queda diminuiu muito. Quando percebi que o cabelo parou de cair do jeito que caía, senti que valeu cada minuto."
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 16 — FECHAMENTO BINÁRIO */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Agora você tem duas opções:</SectionTitle>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Opção 1:</span> Continuar contando os
                fios no ralo, achando que "vai passar sozinho".
              </p>
            </div>
            <div className="rounded-2xl bg-accent p-5">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-accent-foreground">Opção 2:</span> Ter acesso ao
                Protocolo 21 Dias Sem Queda e finalmente tratar a causa da sua queda.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Eu sei (e você também sabe): a opção 2 é a mais inteligente. Então clica no botão abaixo
            e garante o seu Protocolo 21 Dias Sem Queda agora.
          </p>
        </div>
      </section>

      {/* SEÇÃO 17 — PREÇO + CTA */}
      <PriceOffer />

      {/* SEÇÃO 18 — FAQ */}
      <section className="bg-secondary/50 px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <Accordion type="single" collapsible className="mt-6">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-serif text-base text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gradient-hero px-5 py-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-serif text-xl text-primary-foreground">Protocolo 21 Dias Sem Queda</p>
          <Button asChild variant="cta" size="xl" className="mt-6 w-full">
            <a href="#">Sim, quero garantir por R$24,90</a>
          </Button>
          <p className="mt-8 text-xs leading-relaxed text-primary-foreground/60">
            Este material é educativo e não substitui acompanhamento médico.
          </p>
        </div>
      </footer>

      {/* CTA fixo mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Button asChild variant="cta" size="xl" className="w-full">
          <a href="#">Quero o Protocolo por R$24,90</a>
        </Button>
      </div>
    </div>
  );
}
