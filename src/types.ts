// Shape of the data that drives a programmatic landing.
// Each sector × funzione page is a record of this type.

import type { ReactNode } from 'react';

export type IconKey =
  | 'WhatsappLogo'
  | 'TelegramLogo'
  | 'CalendarBlank'
  | 'Receipt'
  | 'CurrencyEur'
  | 'Clock'
  | 'ChartLineUp'
  | 'UsersThree'
  | 'CheckCircle'
  | 'WarningOctagon'
  | 'Phone'
  | 'Hammer'
  | 'Wine'
  | 'ForkKnife'
  | 'Buildings'
  | 'FilePdf'
  | 'Microphone'
  | 'EnvelopeSimple'
  | 'CursorClick'
  | 'Cpu'
  | 'Notebook'
  | 'Sparkle';

export type ChatTurn = {
  from: 'customer' | 'agent';
  text: string;
  time?: string;
  attachment?: { type: 'voice'; seconds: number } | { type: 'pdf'; name: string } | { type: 'image'; alt: string };
};

export type PainPoint = {
  icon: IconKey;
  title: string;
  body: string;
};

export type WorkflowStep = {
  index: number;
  title: string;
  body: string;
  icon: IconKey;
};

export type Gestionale = {
  name: string;
  vendor?: string;
  note?: string;
};

export type RoiMetric = {
  label: string;
  value: string;
  caption?: string;
};

export type ClientStory = {
  name: string;
  role: string;        // ruolo della persona
  org: string;         // azienda
  region: string;
  quote: string;
  metrics: { label: string; value: string }[];
  href?: string;       // link a /soluzioni/clienti/...
};

export type FaqItem = { q: string; a: string };

export type LandingData = {
  // Slug + SEO
  slug: string;                // es. "ristorazione/prenotazioni-whatsapp"
  sector: { label: string; icon: IconKey };   // "Ristorazione"
  funzione: { label: string };                // "Prenotazioni WhatsApp"
  metaTitle: string;
  metaDescription: string;

  // Hero
  eyebrow: string;             // pre-headline (tag)
  h1: string;                  // headline
  h1Highlight?: string;        // parte evidenziata
  heroSubcopy: string;         // sotto-headline
  heroBullets: string[];       // 2-3 bullet sotto la subcopy
  primaryCta: string;
  secondaryCta?: string;

  // Conversation snippet (chat WhatsApp-style)
  chatPlatform: 'whatsapp' | 'telegram';
  chatPersonaName: string;     // es. "Trattoria Da Renzo"
  chatStaff: string;           // es. "Agente LumenIA"
  chatTurns: ChatTurn[];

  // Pain points (3-4)
  painPoints: PainPoint[];

  // Workflow steps (3)
  workflow: WorkflowStep[];

  // ROI metrics (3-4)
  roi: {
    headline: string;
    note: string;
    metrics: RoiMetric[];
  };

  // Gestionali compatibili (logo grid)
  gestionali: Gestionale[];

  // Cliente reale
  caseStudy: ClientStory;

  // FAQ
  faqs: FaqItem[];

  // CTA finale + lead form micro-text
  finalCtaTitle: string;
  finalCtaSubtitle: string;

  // Extra dynamic block (opzionale, custom per pagina)
  extraBlock?: ReactNode;
};
