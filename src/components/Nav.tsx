import { ArrowRight, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { LumeniaLogo } from './LumeniaLogo';

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F7F7F3]/85 border-b border-ink-100/70">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex items-center justify-between h-16">
        <a href="/" className="flex items-center group" aria-label="LumenIA homepage">
          <LumeniaLogo className="h-7 w-auto text-ink-900" />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink-600">
          <a href="/" className="hover:text-ink-900 transition-colors">Soluzioni</a>
          <a href="/" className="hover:text-ink-900 transition-colors">Settori</a>
          <a href="/" className="hover:text-ink-900 transition-colors">Casi reali</a>
          <a href="/" className="hover:text-ink-900 transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contattaci" className="text-[14.5px] text-ink-700 hover:text-ink-900">Accedi</a>
          <a
            href="#contattaci"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-[14px] font-medium text-white hover:bg-ink-700 transition-colors"
          >
            AI Audit Gratuito
            <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center size-9 rounded-md hover:bg-ink-50">
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-[#F7F7F3] px-6 py-4 flex flex-col gap-3 text-[15px] text-ink-700">
          <a href="/">Soluzioni</a>
          <a href="/">Settori</a>
          <a href="/">Casi reali</a>
          <a href="/">Pricing</a>
          <a href="#contattaci" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-white">AI Audit Gratuito <ArrowRight size={14} /></a>
        </div>
      )}
    </header>
  );
}
