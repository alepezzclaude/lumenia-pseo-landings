import {
  WhatsappLogo, TelegramLogo, CalendarBlank, Receipt, CurrencyEur, Clock,
  ChartLineUp, UsersThree, CheckCircle, WarningOctagon, Phone,
  Hammer, Wine, ForkKnife, Buildings, FilePdf, Microphone,
  EnvelopeSimple, CursorClick, Cpu, Notebook, Sparkle,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import type { IconKey } from '../types';

export const ICONS: Record<IconKey, ComponentType<{ size?: number; weight?: 'regular' | 'duotone' | 'fill' | 'bold'; className?: string }>> = {
  WhatsappLogo, TelegramLogo, CalendarBlank, Receipt, CurrencyEur, Clock,
  ChartLineUp, UsersThree, CheckCircle, WarningOctagon, Phone,
  Hammer, Wine, ForkKnife, Buildings, FilePdf, Microphone,
  EnvelopeSimple, CursorClick, Cpu, Notebook, Sparkle,
};

export function Icon({ name, size = 20, weight = 'regular', className }: { name: IconKey; size?: number; weight?: 'regular' | 'duotone' | 'fill' | 'bold'; className?: string }) {
  const Cmp = ICONS[name];
  return <Cmp size={size} weight={weight} className={className} />;
}
