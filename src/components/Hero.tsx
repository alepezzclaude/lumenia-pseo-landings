import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarBlank, PlayCircle, Sparkle, ShieldCheck } from '@phosphor-icons/react';
import type { LandingData } from '../types';
import { Icon } from '../lib/icons';
import { ChatMockup } from './ChatMockup';

export function Hero({ data }: { data: LandingData }) {
  const reduce = useReducedMotion();
  const trustBullet = data.heroBullets[0]; // mostra solo il primo bullet come trust line — il resto si sposta sotto in chip
  const chipBullets = data.heroBullets.slice(1, 3); // max 2 chip orizzontali

  return (
    <section className="relative overflow-hidden">
      {/* Soft warm gradient background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 size-[640px] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute -top-40 left-1/4 size-[480px] rounded-full bg-brand-50 blur-3xl" />
      </div>

      {/* Asymmetric grid: 0.95 left / 1.05 right (phone più grande) */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-14 items-center">
        {/* Left: copy — asciugato */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white border border-ink-100 pl-1.5 pr-4 py-1 text-[12.5px] text-ink-600 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_2px_8px_-3px_rgba(15,29,36,0.08)]"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 text-white px-2.5 py-1 text-[11px] font-semibold tracking-wide">
              <Icon name={data.sector.icon} size={11} weight="fill" />
              {data.sector.label.toUpperCase()}
            </span>
            {data.eyebrow}
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display text-[44px] md:text-[58px] lg:text-[62px] leading-[1.02] tracking-tight text-ink-900"
          >
            {data.h1}
            {data.h1Highlight && (
              <span className="block mt-1 relative w-fit">
                <span className="relative inline-block pb-2">
                  <span className="relative z-10 text-ink-900">{data.h1Highlight}</span>
                  <svg aria-hidden viewBox="0 0 400 24" preserveAspectRatio="none" className="absolute left-0 -bottom-0 h-[14px] w-full text-brand-500">
                    <path d="M2,18 C80,4 200,4 280,12 C340,18 380,12 398,8" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            )}
          </motion.h1>

          {/* Subcopy molto asciutta */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[17px] lg:text-[18.5px] text-ink-500 leading-relaxed max-w-[55ch]"
          >
            {data.heroSubcopy}
          </motion.p>

          {/* CTA prima dei chip — gerarchia "voglio agire" sopra "voglio rassicurazione" */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 mt-1"
          >
            <a
              href="#contattaci"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 hover:bg-ink-700 active:translate-y-[1px] text-white px-5 py-3 text-[15px] font-medium transition-colors"
            >
              <Sparkle size={16} weight="fill" className="text-brand-400" />
              {data.primaryCta}
              <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            {data.secondaryCta && (
              <a
                href="#come-funziona"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink-900 hover:bg-ink-900 hover:text-white bg-white text-ink-900 px-5 py-2.5 text-[15px] font-semibold transition-colors"
              >
                <PlayCircle size={18} weight="duotone" className="text-brand-600 group-hover:text-brand-300 transition-colors" />
                {data.secondaryCta}
              </a>
            )}
          </motion.div>

          {/* Chip orizzontali sotto le CTA (al posto delle 3 bullet verbose) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap gap-2 mt-1"
          >
            {[trustBullet, ...chipBullets].filter(Boolean).map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur border border-ink-100 px-3 py-1.5 text-[12.5px] text-ink-700">
                <ShieldCheck size={13} weight="duotone" className="text-brand-600 flex-none" />
                <span className="truncate max-w-[28ch]">{b}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] text-ink-400 mt-1"
          >
            <span className="inline-flex items-center gap-1.5"><CalendarBlank size={13} /> Setup in 2-3 settimane</span>
            <span>·</span>
            <span>Nessun vincolo annuale</span>
            <span>·</span>
            <span>Garanzia 30 giorni</span>
          </motion.div>
        </div>

        {/* Right: phone protagonista */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative lg:scale-[1.06] lg:-rotate-[2deg]"
          style={{ transformOrigin: 'center center' }}
        >
          {/* Floating decorative cards - più grandi e leggibili */}
          <motion.div
            aria-hidden
            className="absolute -top-4 -left-10 lg:-left-16 w-56 rounded-2xl bg-white border border-ink-100 px-5 py-4 shadow-[var(--shadow-card)] hidden md:block z-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ rotate: '3deg' }}
          >
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              In tempo reale
            </div>
            <div className="mt-2 font-display text-[28px] text-ink-900 font-bold tracking-tight">
              −18<span className="text-[14px] text-ink-500 font-medium">h/mese</span>
            </div>
            <div className="text-[12px] text-ink-500 mt-0.5">ore di lavoro recuperate</div>
          </motion.div>

          <motion.div
            aria-hidden
            className="absolute -bottom-6 -right-6 lg:-right-12 w-60 rounded-2xl bg-ink-900 text-white px-5 py-4 shadow-[0_18px_40px_-12px_rgba(15,29,36,0.4)] hidden md:block z-10"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ rotate: '-3deg' }}
          >
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-brand-300 font-semibold">
              <span className="size-1.5 rounded-full bg-brand-400 dot-ping relative" />
              Risposta media
            </div>
            <div className="mt-2 font-display font-bold tracking-tight leading-none">
              <span className="text-[44px]">12</span>
              <span className="text-[24px] text-brand-400">s</span>
            </div>
            <div className="text-[11.5px] text-white/55 mt-1">vs 2-4 ore prima dell'AI</div>
          </motion.div>

          <ChatMockup data={data} />
        </motion.div>
      </div>
    </section>
  );
}
