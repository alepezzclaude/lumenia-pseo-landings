import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function CaseStudyBlock({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  const cs = data.caseStudy;
  const [hero, ...rest] = cs.metrics;

  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700 mb-3">Casi reali</div>
      <h2 className="font-display text-[36px] md:text-[48px] tracking-tight leading-[1.02] text-ink-900 max-w-3xl">
        Già attivo in {data.sector.label.toLowerCase()}: <em className="not-italic text-brand-600">{cs.org}</em>.
      </h2>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-4 lg:gap-6"
      >
        {/* Quote dark card */}
        <div className="relative rounded-3xl bg-ink-900 text-white p-8 lg:p-12 overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 size-[360px] rounded-full bg-brand-700/30 blur-3xl" />

          {/* Decorative giant quote mark */}
          <div aria-hidden className="absolute -top-6 -left-2 font-display text-[220px] font-bold leading-none text-brand-400/15 select-none">
            “
          </div>

          <div className="relative">
            <blockquote className="font-display text-[26px] lg:text-[32px] leading-[1.25] mt-6 max-w-3xl tracking-tight">
              {cs.quote}
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="size-14 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center font-bold text-white text-[20px] tracking-tight shadow-[0_8px_24px_-8px_rgba(255,149,0,0.5)]">
                {cs.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">{cs.name}</div>
                <div className="text-white/65 text-[13.5px]">{cs.role}, {cs.org}</div>
                <div className="text-white/40 text-[12px] mt-0.5">{cs.region}</div>
              </div>
            </div>

            {cs.href && (
              <a href={cs.href} className="inline-flex items-center gap-1 mt-8 text-brand-300 text-[14px] font-medium hover:text-brand-200 group">
                Leggi il caso completo
                <ArrowUpRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Metric stack — hero metric grande + 2 piccole */}
        <div className="grid gap-3">
          {hero && (
            <div className="rounded-3xl bg-white border border-ink-100 p-6 lg:p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
              <div aria-hidden className="absolute -top-8 -right-8 size-32 rounded-full bg-brand-50 blur-2xl" />
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold relative">{hero.label}</div>
              <div className="font-display text-[64px] lg:text-[72px] font-bold text-ink-900 tracking-tight leading-none relative">
                {hero.value}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {rest.map((m, i) => (
              <div key={i} className="rounded-2xl bg-white border border-ink-100 p-5 flex flex-col justify-between min-h-[120px]">
                <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400">{m.label}</div>
                <div className="font-display text-[32px] font-bold text-ink-900 tracking-tight leading-none">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
