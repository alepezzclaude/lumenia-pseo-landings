import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function FaqBlock({ data }: { data: LandingData }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700">FAQ</div>
          <h2 className="font-display text-[36px] md:text-[44px] tracking-tight leading-[1.05] text-ink-900 mt-3">
            Le domande<br />che ci fanno<br />più spesso.
          </h2>
          <p className="text-[15.5px] text-ink-500 mt-5 leading-relaxed max-w-md">
            Se non trovi la tua, scriviamo personalmente. Risposta entro 4 ore lavorative.
          </p>
        </div>

        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {data.faqs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-6 group"
                >
                  <span className="font-display text-[18px] md:text-[20px] font-medium text-ink-900 leading-snug group-hover:text-brand-700 transition-colors">
                    {it.q}
                  </span>
                  <span className="size-9 rounded-full border border-ink-200 grid place-items-center flex-none mt-0.5 group-hover:border-brand-500 group-hover:bg-brand-50 transition-colors">
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-ink-500 mt-3 leading-relaxed max-w-[70ch]">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
