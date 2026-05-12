import { PlugsConnected } from '@phosphor-icons/react';
import type { LandingData } from '../types';

export function GestionaliStrip({ data }: { data: LandingData }) {
  // Duplicate the list to allow the seamless marquee
  const list = [...data.gestionali, ...data.gestionali];
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-14">
      <div className="grid lg:grid-cols-[auto_1fr] items-center gap-8">
        <div className="flex items-center gap-3 flex-none lg:max-w-[280px]">
          <div className="size-10 rounded-xl bg-ink-100 grid place-items-center text-ink-700">
            <PlugsConnected size={18} weight="duotone" />
          </div>
          <div>
            <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-ink-400">Integrazioni native</div>
            <div className="text-[15px] text-ink-700 font-medium">Si connette ai gestionali italiani che già usi</div>
          </div>
        </div>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex gap-3 animate-marquee w-max">
            {list.map((g, i) => (
              <div
                key={i}
                className="flex-none flex items-center gap-2.5 rounded-full bg-white border border-ink-100 px-4 py-2.5 text-[13.5px] text-ink-700"
              >
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium">{g.name}</span>
                {g.vendor && <span className="text-ink-400 text-[12px]">· {g.vendor}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
