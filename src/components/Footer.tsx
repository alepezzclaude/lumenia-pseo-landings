import { ArrowUpRight } from '@phosphor-icons/react';
import { LumeniaLogo } from './LumeniaLogo';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-100 bg-[#F7F7F3]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <LumeniaLogo className="h-7 w-auto text-ink-900" />
          <p className="mt-4 text-[15px] text-ink-500 max-w-sm leading-relaxed">
            Agenti AI e automazioni per le PMI italiane. Eliminiamo il lavoro ripetitivo dei tuoi processi operativi, mantenendo le tue persone al centro.
          </p>
          <div className="mt-6 text-[13px] text-ink-400">
            <div>LumenIA SRL · P.IVA IT02745940466</div>
            <div className="mt-1">Automate. Grow. Innovate.</div>
          </div>
        </div>

        <FooterCol title="Soluzioni" items={[
          { label: 'Ristorazione', href: '/soluzioni/ristorazione/prenotazioni-whatsapp' },
          { label: 'Edilizia', href: '/soluzioni/edilizia/preventivi-vocali' },
          { label: 'Vino & Horeca', href: '/soluzioni/vino-horeca/intermediazione-ordini-clienti' },
          { label: 'Vedi tutte', href: '/' },
        ]} />

        <FooterCol title="Piattaforma" items={[
          { label: 'Agenti AI', href: '/' },
          { label: 'Integrazione gestionali', href: '/' },
          { label: 'WhatsApp & Telegram', href: '/' },
          { label: 'Pricing LumenONE', href: '/' },
        ]} />

        <FooterCol title="Contatti" items={[
          { label: 'info@lumenia.tech', href: 'mailto:info@lumenia.tech' },
          { label: 'Lorenzo · +39 344 138 1927', href: 'tel:+393441381927' },
          { label: 'AI Audit Gratuito', href: '#contattaci' },
        ]} />
      </div>

      <div className="border-t border-[#ececea] py-5">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12.5px] text-ink-400">
          <div>© 2026 LumenIA · Realizzato in Italia</div>
          <div className="flex gap-5">
            <a href="/" className="hover:text-ink-700">Privacy</a>
            <a href="/" className="hover:text-ink-700">Cookie</a>
            <a href="/" className="hover:text-ink-700">Termini</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-ink-400 mb-4">{title}</div>
      <ul className="flex flex-col gap-2.5 text-[14.5px] text-ink-700">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="inline-flex items-center gap-1 hover:text-ink-900 group">
              {it.label}
              <ArrowUpRight size={12} weight="bold" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
