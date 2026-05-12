import type { LandingData } from '../types';

export const ediliziaPreventiviVocali: LandingData = {
  slug: 'edilizia/preventivi-vocali',
  sector: { label: 'Edilizia', icon: 'Hammer' },
  funzione: { label: 'Consuntivi vocali da cantiere' },
  metaTitle: 'AI per edilizia: consuntivi e preventivi da messaggio vocale · LumenIA',
  metaDescription:
    "Dalla bozza di preventivo al consuntivo finale via vocale Telegram. L'agente AI capisce voci, percentuali ed extra, e ti rigenera l'Excel pronto da inviare. Per general contractor italiani.",

  eyebrow: 'Cantieri · Preventivi · Consuntivi',
  h1: 'Il consuntivo del cantiere lo detti.',
  h1Highlight: "Lo manda l'AI.",
  heroSubcopy:
    "Carichi il preventivo iniziale, mandi un vocale Telegram alla fine della settimana — \"Voce 4 al 25%, voce 8 fatti 19 ml, aggiungi demolizione intonaco 17 mq...\" — l'agente AI capisce, calcola, e genera l'Excel di consuntivo identico al tuo template. Pronto da inviare al cliente.",
  heroBullets: [
    'Mantiene il template Excel con le tue colonne (anche la colonna prezzo subappaltatore).',
    'Gestisce voci a corpo, mq, ml, kg, percentuali parziali e lavorazioni extra non previste.',
    'Archivio cantieri su Drive, ricercabile anche di persone e periodi.',
  ],
  primaryCta: 'Provalo sul tuo template',
  secondaryCta: 'Vedi il flusso',

  chatPlatform: 'telegram',
  chatPersonaName: 'Cantiere Marco Florio · Via Fratti 157',
  chatStaff: 'Cantieri AI',
  chatTurns: [
    { from: 'customer', text: '', attachment: { type: 'voice', seconds: 38 }, time: '17:48' },
    { from: 'agent', text: 'Letto. Aggiornamenti rilevati:\n· Voce 4 (acciaio): 25% → €2.100\n· Voce 6/7 (impermeabilizzazione + gres): 15 mq → €600 ciascuna\n· Voce 8 (zoccolini): 19 ml → €285\n· Voci 5, 9, 10, 12, 13, 14, 16: 0%\n\nLavorazioni extra:\n· Demolizione intonaco 17,5 mq × 22€ = €385\n· Intonaco antiumido 10 mq × 80€ = €800\n\nManca il prezzo Florin per la demolizione. Confermi 15€/mq come al solito?', time: '17:48' },
    { from: 'customer', text: 'Sì 15. E aggiungi anche barriera chimica 6,5 mq a 65 euro.', time: '17:49' },
    { from: 'agent', text: 'Aggiornato.\n\nTotale al cliente: €4.755 (su €26.155 preventivati).\nFlorin: €2.987.\nMargine cantiere: €1.768.\n\nGenero "Conteggio_lavori_eseguiti_28-02.xlsx" e lo salvo in Drive/Cantieri/Marco Florio/2026-02. Vuoi che lo inoltri anche al cliente?', time: '17:49', attachment: { type: 'pdf', name: 'Conteggio_lavori_eseguiti.xlsx' } },
    { from: 'customer', text: 'No, lo controllo io e lo mando.', time: '17:49' },
  ],

  painPoints: [
    { icon: 'Notebook', title: 'Il consuntivo a mano è uno strazio', body: '300 righe di preventivo, voci a corpo, percentuali parziali, materiali extra. A fine cantiere si perdono 4-6 ore solo per ricalcolare il file da mandare al cliente.' },
    { icon: 'Hammer', title: 'Subappaltatori con prezzi diversi', body: 'Florin a 15€, Pino a 18€, Mario a 12€. Tenere doppia colonna per calcolare il margine reale del cantiere è un\'altra ora di lavoro extra.' },
    { icon: 'FilePdf', title: 'Il template del cliente, intoccabile', body: 'Ogni geometra ha il suo format. Cambia l\'intestazione, sposta una colonna, e ti tocca rifare il consuntivo da zero. Senza errori.' },
    { icon: 'Microphone', title: 'In cantiere non si scrive', body: 'Mani sporche, casco, rumore. Aprire Excel sul telefono per registrare cosa hai fatto oggi non è una soluzione. Lo fai dopo, in ufficio, ricordando a metà.' },
  ],

  workflow: [
    { index: 1, icon: 'FilePdf', title: 'Carichi il preventivo iniziale', body: "Una sola volta per cantiere. L'agente capisce il tuo template Excel (voci, unità di misura, prezzi cliente, prezzi subappaltatore) e lo registra nel sistema." },
    { index: 2, icon: 'Microphone', title: 'Detti il consuntivo via vocale', body: '"Voce 8 fatti 19 ml, voce 4 al 25%, aggiungi demolizione 17 mq a 22€..." L\'agente capisce, calcola, e ti mostra un\'anteprima testuale prima di scrivere il file.' },
    { index: 3, icon: 'CheckCircle', title: 'Tu confermi, lui genera l\'Excel', body: 'Mantiene il template originale (font, colonne, formattazione). Lo salva in Drive nella cartella del cliente. Tu controlli e inoltri.' },
  ],

  gestionali: [
    { name: 'Excel / Google Sheets' },
    { name: 'LibreOffice Calc · ODS' },
    { name: 'Primus', vendor: 'ACCA' },
    { name: 'CerTus' },
    { name: 'Fatture in Cloud' },
    { name: 'Aruba Fatturazione' },
    { name: 'Google Drive' },
    { name: 'Dropbox' },
  ],

  roi: {
    headline: '4 ore di consuntivo. Diventano 12 minuti.',
    note: 'Dati medi su 6 cantieri test di general contractor con preventivi tra 8.000€ e 80.000€. Il risparmio cresce con la complessità del cantiere.',
    metrics: [
      { label: 'Tempo per consuntivo', value: '−87%', caption: 'da ~4h a 25 minuti reali' },
      { label: 'Errori di calcolo', value: '0', caption: 'i totali li calcola il sistema, non chi detta' },
      { label: 'Margine reale visibile', value: 'subito', caption: 'cliente vs subappaltatore in tempo reale' },
      { label: 'Cantieri archiviati', value: 'illimitati', caption: 'ricerca per cliente, anno, voce' },
    ],
  },

  caseStudy: {
    name: 'Alessandro Pardini',
    role: 'Titolare',
    org: 'San Michele Costruzioni',
    region: 'Versilia · 8 cantieri attivi',
    quote:
      "Prima il consuntivo a fine mese voleva dire mezza giornata persa. Oggi detto cinque minuti di vocale dal cantiere e ricevo il file pronto. L'ho usato anche con il cliente Florio sotto gli occhi, è rimasto stupito.",
    metrics: [
      { label: 'Ore/mese risparmiate', value: '−18 h' },
      { label: 'Cantieri in parallelo', value: '+3' },
      { label: 'ROI 6 mesi', value: '5,2x' },
    ],
    href: '/clienti/san-michele-costruzioni',
  },

  faqs: [
    { q: 'E se il geometra mi cambia il template?', a: 'Carichi la nuova versione, l\'agente la registra come "Template v2" per quel cantiere. La logica resta la stessa, cambiano solo le celle di destinazione. Nessuna riscrittura da parte tua.' },
    { q: 'Funziona anche con i preventivi in PDF?', a: 'Sì, supportiamo PDF strutturati (esportati da Excel, Primus, CerTus) con OCR e parser specifico per i computi metrici italiani. I PDF "scansionati" da carta richiedono qualche minuto in più di setup iniziale.' },
    { q: 'Capisce davvero le voci in dialetto / con termini tecnici locali?', a: 'In fase di setup raccogliamo il tuo vocabolario: "pietrame", "biscottato", "magro", "intonaco strollato"... L\'agente impara dal tuo gergo, non da quello generico. Dopo 10-15 vocali è praticamente impossibile che fraintenda.' },
    { q: 'Posso correggere se interpreta male qualcosa?', a: "Sempre. Ogni anteprima è modificabile prima di generare il file. E ogni file generato può essere ri-dettato (\"voce 6 ho sbagliato, in realtà 12 mq non 15\"). L'agente aggiorna l'Excel senza chiederti di rifare il vocale." },
    { q: 'I dati restano riservati?', a: 'Sì. Storage su Drive del tuo workspace (tu rimani proprietario). I dati di cantiere non vengono mai usati per training dei modelli AI. Server EU, GDPR compliant.' },
  ],

  finalCtaTitle: "Quante ore al mese stai perdendo a mettere insieme l'Excel?",
  finalCtaSubtitle: 'Mandaci il tuo template, vediamo se l\'agente lo capisce',
};
