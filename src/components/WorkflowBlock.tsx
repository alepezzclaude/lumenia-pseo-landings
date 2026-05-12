import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '../lib/icons';
import type { LandingData } from '../types';

export function WorkflowBlock({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  return (
    <section id="come-funziona" className="bg-ink-900 text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-0 opacity-60">
        <div className="absolute -top-40 -left-20 size-[600px] rounded-full bg-brand-700/30 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 size-[500px] rounded-full bg-brand-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-end">
          <div>
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-300">Come funziona</div>
            <h2 className="font-display text-[36px] md:text-[52px] tracking-tight leading-[1.02] mt-4">
              Tre passaggi.<br />
              <span className="text-brand-300">Una conversazione.</span>
            </h2>
          </div>
          <p className="text-[16.5px] text-white/60 leading-relaxed max-w-lg">
            L'agente AI riceve l'input — un messaggio, un vocale, una mail — e completa il task fino al risultato finale.
            Le tue persone vedono tutto, intervengono solo quando lo decidono.
          </p>
        </div>

        {/* Connector line behind cards */}
        <div className="relative mt-14">
          <svg aria-hidden viewBox="0 0 1200 4" preserveAspectRatio="none" className="hidden lg:block absolute top-12 left-[10%] right-[10%] w-[80%] h-1 text-brand-400/30">
            <line x1="0" y1="2" x2="1200" y2="2" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          </svg>

          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 relative">
            {data.workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-sm p-7 lg:p-9"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
              >
                {/* Step badge floating above card */}
                <div className="absolute -top-4 left-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-bold tracking-wider text-white">
                  STEP {String(step.index).padStart(2, '0')}
                </div>

                <div className="flex items-start justify-between mt-3">
                  <div className="size-12 rounded-xl bg-brand-500/15 grid place-items-center text-brand-300 border border-brand-500/20">
                    <Icon name={step.icon} size={24} weight="duotone" />
                  </div>
                  <div className="font-mono text-[11.5px] text-white/30 tabular-nums">
                    {String(step.index).padStart(2, '0')} / {String(data.workflow.length).padStart(2, '0')}
                  </div>
                </div>
                <div className="font-display text-[22px] lg:text-[24px] font-bold mt-6 leading-tight">{step.title}</div>
                <p className="text-[14.5px] text-white/65 mt-3 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Output ticker */}
        <div className="mt-14 lg:mt-20 rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-white/60">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand-300">Output tipico</span>
          <span>Conferma in chat al cliente</span>
          <span className="text-white/20">·</span>
          <span>Record automatico nel gestionale</span>
          <span className="text-white/20">·</span>
          <span>Log su Drive</span>
          <span className="text-white/20">·</span>
          <span>Notifica al responsabile solo se necessario</span>
        </div>
      </div>
    </section>
  );
}
