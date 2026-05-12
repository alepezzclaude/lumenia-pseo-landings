import { motion, useReducedMotion } from 'framer-motion';
import { TrendDown } from '@phosphor-icons/react';
import { Icon } from '../lib/icons';
import type { LandingData } from '../types';

// Stat hero per ciascun settore (matchato per pagina via funzione label)
function getHeroStat(label: string) {
  const map: Record<string, { value: string; unit: string; caption: string }> = {
    'Prenotazioni WhatsApp 24/7': { value: '64', unit: '%', caption: 'delle prenotazioni perse arrivano fuori dagli orari di apertura' },
    'Consuntivi vocali da cantiere': { value: '4–6', unit: 'h', caption: 'persi a fine cantiere per ricalcolare il file da inviare al cliente' },
    'Inoltro fatture · Reportistica agenti': { value: '+400', unit: '/mese', caption: 'fatture di cortesia da inoltrare al cliente giusto, senza errori' },
  };
  return map[label] ?? { value: '18', unit: 'h', caption: 'ore di lavoro a settimana su processi ripetitivi' };
}

// Minimal SVG sparkline (decorativo, no dati reali)
function Sparkline() {
  return (
    <svg viewBox="0 0 240 60" className="w-full h-12 text-brand-400/70" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="sparkle-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,40 L24,38 L48,42 L72,28 L96,32 L120,18 L144,22 L168,12 L192,16 L216,8 L240,14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0,40 L24,38 L48,42 L72,28 L96,32 L120,18 L144,22 L168,12 L192,16 L216,8 L240,14 L240,60 L0,60 Z" fill="url(#sparkle-fade)" />
    </svg>
  );
}

export function PainPointsBlock({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  const [first, ...rest] = data.painPoints;
  const stat = getHeroStat(data.funzione.label);

  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700">Cosa succede oggi</div>
          <h2 className="font-display text-[36px] md:text-[48px] tracking-tight leading-[1.02] text-ink-900 mt-4">
            La parte di lavoro<br />
            che si ripete<br />
            <em className="not-italic text-brand-600">tutti i giorni</em>.
          </h2>
          <p className="text-[16.5px] text-ink-500 mt-5 leading-relaxed max-w-md">
            Le PMI italiane perdono in media 18-25 ore a settimana su processi che si ripetono identici. Sono le voci che senti più spesso dai responsabili che incontriamo.
          </p>

          <div className="mt-8 hidden lg:flex items-center gap-3 text-[13px] text-ink-400">
            <span className="font-mono tabular-nums text-ink-700 text-[18px] font-bold">{String(data.painPoints.length).padStart(2,'0')}</span>
            <span>punti di attrito identificati</span>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 lg:gap-4 auto-rows-[minmax(170px,auto)]">
          {/* Dark hero card - 2 righe di altezza, 6 col */}
          {first && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 row-span-2 relative rounded-[28px] bg-ink-900 text-white p-7 lg:p-10 overflow-hidden"
            >
              <div aria-hidden className="absolute -top-32 -right-20 size-[420px] rounded-full bg-brand-600/25 blur-3xl" />
              <div aria-hidden className="absolute bottom-0 left-0 right-0 h-32 opacity-50">
                <Sparkline />
              </div>

              <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="size-11 rounded-xl bg-brand-500/15 grid place-items-center text-brand-400 border border-brand-500/20">
                      <Icon name={first.icon} size={22} weight="duotone" />
                    </div>
                    <div className="text-[10.5px] font-mono tracking-[0.18em] text-white/40 uppercase">#01 · pain ricorrente</div>
                  </div>
                  <div className="font-display text-[26px] lg:text-[32px] font-bold mt-5 leading-[1.1] max-w-[28ch]">{first.title}</div>
                  <p className="text-[15px] text-white/65 mt-3 leading-relaxed max-w-[60ch]">{first.body}</p>
                </div>

                {/* Hero stat */}
                <div className="lg:text-right lg:min-w-[180px]">
                  <div className="inline-flex items-center gap-1 text-[11px] tracking-[0.18em] uppercase text-brand-300 font-semibold">
                    <TrendDown size={13} weight="bold" />
                    Impatto medio
                  </div>
                  <div className="font-display font-bold tracking-tight leading-none mt-2">
                    <span className="text-[72px] lg:text-[88px] text-white">{stat.value}</span>
                    <span className="text-[28px] lg:text-[32px] text-brand-400 ml-0.5">{stat.unit}</span>
                  </div>
                  <p className="text-[12.5px] text-white/55 mt-2 max-w-[28ch] lg:ml-auto">{stat.caption}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3 small cards */}
          {rest.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.06 + i * 0.05 }}
              className="col-span-6 sm:col-span-2 relative bg-white border border-ink-100 rounded-[22px] p-5 lg:p-6 hover:border-brand-300 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="size-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700 group-hover:bg-brand-100 transition-colors">
                  <Icon name={p.icon} size={22} weight="duotone" />
                </div>
                <div className="text-[10px] font-mono tracking-[0.18em] text-ink-300 uppercase">#{String(i + 2).padStart(2, '0')}</div>
              </div>
              <div className="font-display text-[17px] font-bold text-ink-900 mt-4 leading-snug">{p.title}</div>
              <p className="text-[13.5px] text-ink-500 mt-2 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
