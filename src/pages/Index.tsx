import { motion } from 'framer-motion';
import { ArrowUpRight, ForkKnife, Hammer, Wine } from '@phosphor-icons/react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const LANDINGS = [
  {
    href: '/soluzioni/ristorazione/prenotazioni-whatsapp',
    sector: 'Ristorazione',
    icon: ForkKnife,
    funzione: 'Prenotazioni WhatsApp 24/7',
    note: 'Trattorie · Osterie · Brasserie',
  },
  {
    href: '/soluzioni/edilizia/preventivi-vocali',
    sector: 'Edilizia',
    icon: Hammer,
    funzione: 'Consuntivi vocali da cantiere',
    note: 'General contractor · Imprese di ristrutturazione',
  },
  {
    href: '/soluzioni/vino-horeca/intermediazione-ordini-clienti',
    sector: 'Vino & Horeca',
    icon: Wine,
    funzione: 'Inoltro fatture · Report agenti',
    note: 'Agenzie di rappresentanza · Importatori',
  },
];

export default function Index() {
  return (
    <div className="bg-[#F7F7F3] min-h-dvh">
      <Nav />
      <main className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-700">Dev preview · Programmatic SEO pilot</div>
        <h1 className="font-display text-[44px] md:text-[64px] tracking-tight leading-[1.02] text-ink-900 mt-4 max-w-3xl">
          Landing per settore.<br />
          Una conversazione vera.
        </h1>
        <p className="mt-6 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
          Tre esempi di pagine programmatic LumenIA. Stesso template, contenuti settore-specifici dinamici. Pensate per intent commerciale (non blog) e ottimizzate per AI search.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LANDINGS.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <Link
                  to={l.href}
                  className="group block rounded-3xl bg-white border border-ink-100 p-7 hover:-translate-y-0.5 transition-transform hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <ArrowUpRight size={18} weight="bold" className="text-ink-300 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-ink-400 mt-6">Settore</div>
                  <div className="font-display text-[22px] font-bold text-ink-900 mt-1 leading-tight">{l.sector}</div>
                  <div className="mt-3 text-[14.5px] text-ink-700">{l.funzione}</div>
                  <div className="mt-1 text-[12.5px] text-ink-400">{l.note}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
