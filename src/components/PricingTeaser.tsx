import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkle } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function PricingTeaser({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#F7F7F3] border-y border-ink-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-end">
          <div>
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700">Pricing</div>
            <h2 className="font-display text-[36px] md:text-[44px] tracking-tight leading-[1.05] text-ink-900 mt-3">
              Quanto costa avere un agente AI per {data.sector.label.toLowerCase()}?
            </h2>
            <p className="text-[15.5px] text-ink-500 mt-5 leading-relaxed max-w-md">
              Due piani LumenONE: il primo per partire e validare il valore in 3-6 mesi, il secondo per scalare canali, integrazioni e branding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-white border border-ink-100 p-7"
            >
              <div className="text-[12.5px] font-semibold tracking-[0.18em] uppercase text-ink-400">Foundation</div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-bold text-ink-900 tracking-tight">€3.490</span>
                <span className="text-[14px] text-ink-500">/ anno</span>
              </div>
              <div className="text-[12.5px] text-ink-400 mt-1">Listino €3.990 con codice <span className="font-mono text-ink-600">PARTNER BNI</span></div>
              <ul className="mt-6 flex flex-col gap-2.5 text-[14px] text-ink-700">
                {['Agente AI su Telegram o WhatsApp', 'Onboarding dati + training iniziale', '1.500 messaggi/mese inclusi', 'Integrazione Google Drive nativa', 'Supporto email continuo'].map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle size={16} weight="duotone" className="text-brand-600 mt-0.5 flex-none" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
              className="rounded-3xl bg-ink-900 text-white p-7 relative overflow-hidden"
            >
              <div aria-hidden className="absolute -top-20 -right-10 size-[260px] rounded-full bg-brand-700/35 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-[12.5px] font-semibold tracking-[0.18em] uppercase text-brand-300">Accelerator</div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 text-white px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide">
                    <Sparkle size={10} weight="fill" />
                    PIÙ SCELTO
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-[38px] font-bold tracking-tight">€4.041</span>
                  <span className="text-[14px] text-white/60">/ anno</span>
                </div>
                <div className="text-[12.5px] text-white/40 mt-1">Listino €4.490 con sconto 10%</div>
                <ul className="mt-6 flex flex-col gap-2.5 text-[14px] text-white/85">
                  {['Tutto Foundation + multi-canale', 'Knowledge base evoluta', 'Branding interfaccia su misura', 'Numero di telefono dedicato', 'Supporto tecnico 24/7'].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <CheckCircle size={16} weight="duotone" className="text-brand-400 mt-0.5 flex-none" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contattaci" className="inline-flex items-center gap-2 rounded-full bg-ink-900 hover:bg-ink-700 active:translate-y-[1px] text-white px-5 py-3 text-[15px] font-medium transition-colors">
            Richiedi un preventivo personalizzato
            <ArrowRight size={14} weight="bold" />
          </a>
          <div className="text-[13px] text-ink-500">Il prezzo finale dipende dal volume e dalle integrazioni richieste. Audit iniziale gratuito.</div>
        </div>
      </div>
    </section>
  );
}
