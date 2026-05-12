import { motion, useReducedMotion } from 'framer-motion';
import { CaretLeft, DotsThreeOutlineVertical, Microphone, Paperclip, PlayCircle, FileText, Camera } from '@phosphor-icons/react';
import type { ChatTurn, LandingData } from '../types';

const PALETTE = {
  whatsapp: {
    chrome: '#075e54',
    chromeText: '#ffffff',
    bg: '#efeae2',
    outBubble: '#d9fdd3',
    outBubbleStroke: '#cdedc4',
    inBubble: '#ffffff',
    accent: '#25d366',
    avatarBg: '#fe9404',
  },
  telegram: {
    chrome: '#517da2',
    chromeText: '#ffffff',
    bg: '#dfe6ec',
    outBubble: '#eeffde',
    outBubbleStroke: '#cdedc4',
    inBubble: '#ffffff',
    accent: '#3390ec',
    avatarBg: '#fe9404',
  },
};

export function ChatMockup({ data }: { data: LandingData }) {
  const palette = PALETTE[data.chatPlatform];
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[440px] aspect-[9/16.4] rounded-[40px] bg-ink-900 p-2.5 shadow-[0_40px_80px_-30px_rgba(15,29,36,0.35),0_8px_24px_-12px_rgba(15,29,36,0.2)]">
      {/* Speaker notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-5 w-32 rounded-full bg-ink-900" />
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 h-2 w-12 rounded-full bg-ink-700/50" />

      <div className="relative h-full w-full overflow-hidden rounded-[32px] flex flex-col" style={{ background: palette.bg }}>
        {/* Status bar */}
        <div className="h-7 flex items-center justify-between px-5 pt-1 text-[10px] font-semibold text-ink-900/80">
          <span>14:32</span>
          <span className="tracking-wider">●●● 100%</span>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-2.5 px-3 py-2.5" style={{ background: palette.chrome, color: palette.chromeText }}>
          <CaretLeft size={16} weight="bold" className="opacity-90" />
          <div
            className="size-8 rounded-full grid place-items-center font-bold text-[13px]"
            style={{ background: palette.avatarBg, color: 'white' }}
          >
            L
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-semibold">{data.chatStaff}</span>
            <span className="text-[11px] opacity-80">{data.chatPlatform === 'whatsapp' ? 'online · digita...' : 'bot · sempre attivo'}</span>
          </div>
          <DotsThreeOutlineVertical size={16} weight="fill" className="ml-auto opacity-90" />
        </div>

        {/* Chat body */}
        <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2">
          <div className="self-center text-[10.5px] text-ink-500 bg-white/70 backdrop-blur rounded-md px-2.5 py-1 shadow-sm">
            oggi · {data.chatPersonaName}
          </div>

          {data.chatTurns.map((turn, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.18 }}
              className={`flex ${turn.from === 'customer' ? 'justify-end' : 'justify-start'}`}
            >
              <Bubble turn={turn} palette={palette} />
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-[0_2px_8px_-3px_rgba(15,29,36,0.12)]">
            <Paperclip size={18} className="text-ink-400" />
            <div className="flex-1 text-[12.5px] text-ink-300">Messaggio</div>
            <Camera size={18} className="text-ink-400" />
            <div className="size-9 rounded-full grid place-items-center text-white" style={{ background: palette.accent }}>
              <Microphone size={16} weight="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ turn, palette }: { turn: ChatTurn; palette: typeof PALETTE['whatsapp'] }) {
  const isOut = turn.from === 'customer';
  const bg = isOut ? palette.outBubble : palette.inBubble;
  const border = isOut ? palette.outBubbleStroke : 'rgba(15,29,36,0.06)';

  return (
    <div
      className="max-w-[78%] rounded-2xl px-3 py-2 text-[13.5px] leading-snug"
      style={{
        background: bg,
        color: '#0e1416',
        borderBottomRightRadius: isOut ? 6 : 14,
        borderBottomLeftRadius: isOut ? 14 : 6,
        border: `1px solid ${border}`,
      }}
    >
      {turn.attachment?.type === 'voice' && (
        <div className="flex items-center gap-2 mb-1.5 text-ink-900">
          <PlayCircle size={26} weight="fill" className="text-brand-600" />
          <Waveform />
          <span className="text-[11px] tabular-nums text-ink-500">{`0:${String(turn.attachment.seconds).padStart(2, '0')}`}</span>
        </div>
      )}
      {turn.attachment?.type === 'pdf' && (
        <div className="flex items-center gap-2 mb-1.5 text-ink-900 rounded-lg bg-white/60 backdrop-blur px-2 py-1.5">
          <FileText size={20} weight="duotone" className="text-rose-600 flex-none" />
          <div className="leading-tight">
            <div className="text-[12.5px] font-medium">{turn.attachment.name}</div>
            <div className="text-[10.5px] text-ink-500">PDF · 248 KB</div>
          </div>
        </div>
      )}
      {turn.attachment?.type === 'image' && (
        <div className="mb-1.5 -mx-1 -mt-1 rounded-lg aspect-[4/3] bg-gradient-to-br from-ink-200 to-ink-300 grid place-items-center text-ink-500 text-[11px]">
          {turn.attachment.alt}
        </div>
      )}
      <div className="whitespace-pre-line">{turn.text}</div>
      <div className="text-[10px] text-ink-400 mt-1 text-right">
        {turn.time ?? '14:32'} {isOut && <span className="text-emerald-500 ml-0.5">✓✓</span>}
      </div>
    </div>
  );
}

function Waveform() {
  const heights = [4, 8, 14, 22, 18, 14, 26, 20, 16, 22, 14, 10, 8];
  return (
    <div className="flex items-center gap-[2px] h-6">
      {heights.map((h, i) => (
        <span
          key={i}
          className="block w-[2.5px] rounded-full"
          style={{ height: h, background: i < 6 ? '#fe9404' : 'rgba(15,29,36,0.18)' }}
        />
      ))}
    </div>
  );
}
