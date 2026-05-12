import { ArrowRight, CalendarCheck, ChatTeardropDots, Sparkle } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function FinalCta({ data }: { data: LandingData }) {
  return (
    <section id="contattaci" className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink-900 via-ink-900 to-[#1f1612] p-10 lg:p-16">
        <div aria-hidden className="absolute -top-32 -right-20 size-[480px] rounded-full bg-brand-600/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-20 size-[420px] rounded-full bg-brand-700/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/15 px-3 py-1.5 text-[12px] text-white">
              <Sparkle size={12} weight="fill" className="text-brand-300" />
              {data.finalCtaSubtitle}
            </div>
            <h2 className="mt-5 font-display text-[40px] md:text-[56px] tracking-tight leading-[1.02] text-white">
              {data.finalCtaTitle}
            </h2>
            <p className="mt-5 text-[16.5px] text-white/65 max-w-[55ch] leading-relaxed">
              30 minuti con un consulente: analizziamo i tuoi processi attuali, indichiamo dove l'AI può portare valore reale e ti diamo una stima di ROI specifica per la tua azienda. Senza impegno, senza pitch commerciale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="mailto:info@lumenia.tech" className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 active:translate-y-[1px] text-white px-5 py-3 text-[15px] font-semibold transition-colors">
                {data.primaryCta}
                <ArrowRight size={14} weight="bold" />
              </a>
              <a href="tel:+393441381927" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 text-white px-5 py-3 text-[15px] transition-colors">
                <ChatTeardropDots size={16} weight="duotone" />
                Parla con Lorenzo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/45">
              <span className="inline-flex items-center gap-1.5"><CalendarCheck size={14} /> Risposta in 4 ore lavorative</span>
              <span>·</span>
              <span>info@lumenia.tech</span>
              <span>·</span>
              <span>+39 344 138 1927</span>
            </div>
          </div>

          {/* Right: mini-chat dell'agente che continua la narrazione del hero */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] max-w-[420px] lg:ml-auto">
              <div className="flex items-center gap-2 pb-3 border-b border-ink-100">
                <div className="size-8 rounded-full bg-brand-500 grid place-items-center text-white font-bold text-[12.5px]">L</div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[13.5px] font-semibold text-ink-900">Agente LumenIA</span>
                  <span className="text-[11px] text-ink-400 inline-flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    nuovo · 30 sec fa
                  </span>
                </div>
              </div>

              {/* "intake bubble" del bot */}
              <div className="mt-4 flex flex-col gap-2.5">
                <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md bg-ink-100 px-3.5 py-2.5 text-[13.5px] text-ink-800 leading-snug">
                  Ciao, ho preparato qualche domanda veloce per capire dove l'AI può aiutarti davvero.
                </div>
                <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md bg-ink-100 px-3.5 py-2.5 text-[13.5px] text-ink-800 leading-snug">
                  Per cominciare:
                </div>
                <div className="self-start w-full rounded-2xl rounded-bl-md bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/60 px-4 py-3">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold">Settore</div>
                  <div className="text-[14.5px] font-semibold text-ink-900 mt-1">{data.sector.label}</div>
                </div>
                <div className="self-start w-full rounded-2xl rounded-bl-md bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/60 px-4 py-3">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold">Funzione da automatizzare</div>
                  <div className="text-[14.5px] font-semibold text-ink-900 mt-1">{data.funzione.label}</div>
                </div>
                <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md bg-ink-100 px-3.5 py-2.5 text-[13.5px] text-ink-800 leading-snug">
                  Perfetto. Nei prossimi 30 minuti ti dirò:
                </div>
                <ol className="self-start w-full flex flex-col gap-1.5 mt-1 text-[13.5px] text-ink-700 pl-1">
                  <li className="flex items-start gap-2.5"><span className="font-mono text-brand-700 text-[12px] mt-0.5 font-bold">01</span><span>Dove perdi più ore di lavoro oggi.</span></li>
                  <li className="flex items-start gap-2.5"><span className="font-mono text-brand-700 text-[12px] mt-0.5 font-bold">02</span><span>Cosa è automatizzabile, cosa no.</span></li>
                  <li className="flex items-start gap-2.5"><span className="font-mono text-brand-700 text-[12px] mt-0.5 font-bold">03</span><span>Una stima di ROI per il tuo caso.</span></li>
                </ol>
              </div>
            </div>

            {/* Floating timing pill */}
            <div className="absolute -top-3 -left-3 inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-3 py-1.5 text-[11.5px] font-semibold shadow-md">
              <span className="size-1.5 rounded-full bg-emerald-500 dot-ping relative" />
              30 min · gratuito
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
