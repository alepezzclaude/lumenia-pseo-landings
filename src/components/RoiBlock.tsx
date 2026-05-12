import { motion, useReducedMotion } from 'framer-motion';
import { TrendUp } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function RoiBlock({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  const [hero, ...others] = data.roi.metrics;

  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-brand-100/40 border border-brand-100 overflow-hidden">
        <div className="p-8 lg:p-14">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700">Numeri reali</div>
              <h2 className="font-display text-[36px] md:text-[44px] tracking-tight leading-[1.05] text-ink-900 mt-3">
                {data.roi.headline}
              </h2>
              <p className="text-[15.5px] text-ink-500 mt-5 leading-relaxed max-w-md">
                {data.roi.note}
              </p>

              {/* Hero metric grande a sinistra */}
              {hero && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 rounded-3xl bg-white border border-brand-100 p-7 relative overflow-hidden"
                >
                  <div aria-hidden className="absolute -top-12 -right-10 size-40 rounded-full bg-brand-100/60 blur-3xl" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold">
                      <TrendUp size={13} weight="bold" />
                      {hero.label}
                    </div>
                    <div className="font-display font-bold tracking-tight leading-none mt-4">
                      <span className="text-[84px] lg:text-[96px] text-ink-900">{hero.value}</span>
                    </div>
                    {hero.caption && <div className="text-[14px] text-ink-500 mt-3 max-w-[40ch]">{hero.caption}</div>}
                  </div>
                </motion.div>
              )}
            </div>

            {/* 3 secondary metrics in stack */}
            <div className="grid gap-3">
              {others.map((m, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.06 + i * 0.06 }}
                  className="rounded-2xl bg-white border border-ink-100 p-5 lg:p-6 grid grid-cols-[auto_1fr] gap-5 items-center"
                >
                  <div className="font-display text-[40px] lg:text-[44px] font-bold text-ink-900 tracking-tight leading-none">
                    {m.value}
                  </div>
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[0.18em] text-ink-400 uppercase">{m.label}</div>
                    {m.caption && <div className="text-[13px] text-ink-500 mt-1 leading-snug">{m.caption}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
