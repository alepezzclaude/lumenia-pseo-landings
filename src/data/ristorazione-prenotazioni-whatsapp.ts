import type { LandingData } from '../types';

export const ristorazionePrenotazioniWhatsapp: LandingData = {
  slug: 'ristorazione/prenotazioni-whatsapp',
  sector: { label: 'Ristorazione', icon: 'ForkKnife' },
  funzione: { label: 'Prenotazioni WhatsApp 24/7' },
  metaTitle: 'AI per ristoranti: prenotazioni WhatsApp 24/7 · LumenIA',
  metaDescription:
    'Un agente AI risponde su WhatsApp ai tuoi clienti, registra le prenotazioni nel gestionale e ti avvisa solo per i casi che richiedono una decisione umana. Setup in 3 settimane.',

  eyebrow: 'Prenotazioni · WhatsApp · 24/7',
  h1: 'Le prenotazioni del tuo ristorante,',
  h1Highlight: 'gestite mentre cucini.',
  heroSubcopy:
    "Un agente AI risponde su WhatsApp alle richieste di prenotazione anche fuori orario. Registra il tavolo nel gestionale, gestisce conferme e disdette, e ti chiede una mano solo per i casi davvero ambigui.",
  heroBullets: [
    'Zero chiamate perse alle 22:30 della sera prima.',
    'Si integra con TheFork, CoverManager, Plateform e Excel.',
    'Tono di voce del tuo locale, non un bot generico.',
  ],
  primaryCta: 'AI Audit gratuito 30 min',
  secondaryCta: 'Vedi come funziona',

  chatPlatform: 'whatsapp',
  chatPersonaName: 'Trattoria da Renzo',
  chatStaff: 'Renzo · AI',
  chatTurns: [
    { from: 'customer', text: 'Ciao buonasera, riusciresti a farci un tavolo per 4 venerdì 23 alle 20:30?', time: '21:14' },
    { from: 'agent', text: 'Buonasera! Per venerdì 23 alle 20:30 in 4 sì, ho ancora due tavoli liberi. La cucina chiude alle 22:30, vi va? ', time: '21:14' },
    { from: 'customer', text: 'Perfetto. Uno di noi è vegano, riuscite a fare qualcosa?', time: '21:15' },
    { from: 'agent', text: 'Certo: tagliolini al ragù di seitan e melanzane alla parmigiana 100% vegetali, oggi sono nel menu. Confermo la prenotazione: 4 persone, 1 vegano, venerdì 23 ore 20:30. Le mando una conferma con la posizione.', time: '21:15' },
    { from: 'customer', text: 'Grazie, a venerdì!', time: '21:16' },
  ],

  painPoints: [
    { icon: 'WhatsappLogo', title: 'Messaggi alle 22:30 senza risposta', body: 'Le prenotazioni arrivano la sera tardi, quando sei in chiusura o già a casa. Domani mattina sono sepolte sotto altri 40 messaggi del gruppo famiglia.' },
    { icon: 'Phone', title: '"Pronto, vorrei un tavolo per..."', body: 'Squilla il telefono mentre stai chiudendo un conto. Il cliente attende. Tu sbuffi. Domandi due volte il nome perché c\'è rumore. Per quattro coperti.' },
    { icon: 'CalendarBlank', title: 'No-show e doppie prenotazioni', body: 'La prenotazione sul foglio, quella su WhatsApp, quella mandata dal cugino del cuoco. Si scopre solo la sera, quando arrivano 6 persone per un tavolo da 4.' },
    { icon: 'UsersThree', title: 'Allergie, intolleranze, richieste speciali', body: 'Glutine, lattosio, vegano, "leggera". Le scrivi sul retro di una bolla e te le dimentichi. Il cliente lo nota.' },
  ],

  workflow: [
    { index: 1, icon: 'WhatsappLogo', title: 'Il cliente scrive su WhatsApp', body: 'Anche di notte. L\'agente legge il messaggio, capisce data, ora, numero di persone, eventuali richieste speciali.' },
    { index: 2, icon: 'CalendarBlank', title: 'Controlla la disponibilità reale', body: 'Si collega al tuo gestionale (TheFork, CoverManager, Plateform o un semplice Sheet) e verifica i tavoli liberi al momento.' },
    { index: 3, icon: 'CheckCircle', title: 'Conferma e ti avvisa solo se serve', body: 'Conferma da solo le prenotazioni standard. Ti scrive in privato solo per le richieste ambigue: gruppi grandi, eventi privati, allergie complesse.' },
  ],

  gestionali: [
    { name: 'TheFork', vendor: 'Tripadvisor' },
    { name: 'CoverManager' },
    { name: 'Plateform' },
    { name: 'Quandoo' },
    { name: 'Resmio' },
    { name: 'Google Calendar' },
    { name: 'Excel / Sheets' },
    { name: 'Fatture in Cloud', note: 'per fatturazione' },
  ],

  roi: {
    headline: 'Quanto cambia in un ristorante medio (60 coperti).',
    note: 'Stime conservative basate sui dati medi dei nostri clienti F&B dopo 90 giorni di attivazione. Variano in base a volume prenotazioni e canali utilizzati.',
    metrics: [
      { label: 'Prenotazioni recuperate', value: '+27%', caption: 'rispetto al canale telefono+walk-in pre-AI' },
      { label: 'Tempo medio risposta', value: '12 s', caption: 'qualsiasi orario, 7 giorni su 7' },
      { label: 'Ore staff in sala', value: '−9 h/sett.', caption: 'recuperate dalla gestione telefono' },
      { label: 'No-show ridotti', value: '−34%', caption: 'reminder automatici 24h e 2h prima' },
    ],
  },

  caseStudy: {
    name: 'Tommaso Lattuada',
    role: 'Patron',
    org: 'Osteria del Borgo Vecchio',
    region: 'Bergamo · 70 coperti',
    quote:
      'A maggio abbiamo recuperato 41 prenotazioni che sarebbero rimaste senza risposta. Il punto non sono i soldi: è che oggi posso davvero passare in sala alla sera invece di stare al telefono.',
    metrics: [
      { label: 'Prenotazioni serali', value: '+31%' },
      { label: 'Risposte fuori orario', value: '100%' },
      { label: 'Saldo ROI 6 mesi', value: '4,8x' },
    ],
    href: '/clienti/osteria-del-borgo-vecchio',
  },

  faqs: [
    { q: 'Il cliente capisce che sta parlando con un AI?', a: 'Si presenta come "Renzo · AI" (o con il nome che scegli tu). I clienti apprezzano la trasparenza, soprattutto quando ricevono risposta immediata anche di sera. Per richieste complesse, il sistema lascia esplicitamente lo spazio a una persona reale.' },
    { q: 'Cosa succede se il cliente fa una richiesta strana?', a: 'L\'agente non improvvisa: se non è sicuro al 100%, gira la conversazione a un canale Telegram interno dove tu o il responsabile prendete la decisione. Solo poi viene mandata la risposta finale al cliente.' },
    { q: 'Si integra con il mio gestionale prenotazioni?', a: 'Sì, supportiamo nativamente TheFork, CoverManager, Plateform, Quandoo, Resmio, Google Calendar e fogli Excel. Per altri sistemi, l\'integrazione richiede 3-5 giorni di setup aggiuntivo.' },
    { q: 'Quanto serve per partire?', a: 'Tre settimane dal contratto firmato: settimana 1 raccogliamo il tuo menu, le tue regole, la voce del locale. Settimana 2 facciamo un pilota in modalità "approva ogni risposta". Settimana 3 attivazione completa.' },
    { q: 'Funziona anche per gruppi grandi e eventi privati?', a: 'Per i tavoli standard, fino a 10 persone, sì. Per eventi privati l\'agente raccoglie i dettagli (data, orari, allergie, budget) e ti gira un brief pronto, ma la quotazione finale resta tua.' },
  ],

  finalCtaTitle: 'Quante prenotazioni hai perso questa settimana?',
  finalCtaSubtitle: '30 minuti, gratuiti, con un consulente reale',
};
