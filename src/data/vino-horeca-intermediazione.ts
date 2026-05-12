import type { LandingData } from '../types';

export const vinoHorecaIntermediazione: LandingData = {
  slug: 'vino-horeca/intermediazione-ordini-clienti',
  sector: { label: 'Vino & Horeca', icon: 'Wine' },
  funzione: { label: 'Inoltro fatture · Reportistica agenti' },
  metaTitle: 'AI per agenzie di rappresentanza vino: fatture, agenti, listini · LumenIA',
  metaDescription:
    "Per agenzie di intermediazione vino con commerciali sul territorio. L'agente AI inoltra le fatture di cortesia dalle cantine ai ristoranti, manda i report fatturato ai commerciali e distribuisce i listini per zona.",

  eyebrow: 'Intermediari · Cantine → Ristoranti',
  h1: 'Le tue cantine vendono.',
  h1Highlight: 'I tuoi clienti restano sereni.',
  heroSubcopy:
    "Sei un'agenzia di rappresentanza vino. Le cantine fatturano direttamente ai ristoranti, ma sei tu il punto di contatto. Un agente AI inoltra le fatture di cortesia, manda i report fatturato ai 20 commerciali su WhatsApp, e distribuisce i nuovi listini ai clienti delle zone giuste. Senza errori.",
  heroBullets: [
    "Routing fatture cliente per cliente: zero rischio che un ristorante veda i prezzi del competitor.",
    'Report fatturato mensile e trimestrale ai commerciali, automatico, formato WhatsApp.',
    'Cataloghi cantine inoltrati ai clienti delle zone servite, mai a chi non li può comprare.',
  ],
  primaryCta: 'Vediamoci 30 minuti',
  secondaryCta: 'Come funziona il routing',

  chatPlatform: 'whatsapp',
  chatPersonaName: 'Gruppo commerciali · Q1 2026',
  chatStaff: 'UVA AI · Reporting',
  chatTurns: [
    { from: 'agent', text: 'Buongiorno, ecco il fatturato Q1 2026.\n\n📊 Marco R. (Centro)\nQ1: €42.300 · MoM +12%\nTop cantine: Le Macchiole, Argiolas\n\nIl confronto completo con tutti i commerciali è in archivio. Domande?', time: '07:30' },
    { from: 'agent', text: 'Vi ricordo che a fine settimana arriva il nuovo listino primavera-estate di Fattoria San Lorenzo. Lo invio automaticamente ai clienti delle zone Toscana, Umbria e Lazio non appena Samuele lo approva.', time: '07:31' },
    { from: 'customer', text: 'Top, grazie! Sul mio l\'anno scorso Argiolas era partito più lento.', time: '07:32' },
    { from: 'agent', text: "Confermo: rispetto a Q1 2025 hai +18% su Argiolas (era €11.200, ora €13.250). Te la sei lavorata bene 👏", time: '07:32' },
  ],

  painPoints: [
    { icon: 'Receipt', title: 'Una fattura sbagliata = un cliente perso', body: 'I prezzi differenziati per ristorante sono la tua leva commerciale. Una copia di cortesia mandata per errore al locale concorrente è un danno reputazionale enorme.' },
    { icon: 'EnvelopeSimple', title: 'Le mail di cortesia da smistare a mano', body: 'Ogni mattina arrivano 30-40 PDF di fatture dalle cantine. Identifica il cliente, trova la mail di riferimento, scrivi un messaggio standard, allega. Per dieci mesi all\'anno.' },
    { icon: 'CurrencyEur', title: 'Il fatturato mensile ai commerciali è un giorno di lavoro', body: 'Filtri Order Sender, copi numeri in Excel, mandi messaggi WhatsApp uno per uno. Trimestralmente raddoppia. Annualmente è incubo.' },
    { icon: 'Wine', title: 'I listini delle cantine vanno smistati per zona', body: 'Cantina toscana? Va a Toscana e Lazio. Friulana? Va al Triveneto. Mantenere la mappa in testa e non sbagliare destinatari è un altro lavoro a tempo pieno.' },
  ],

  workflow: [
    { index: 1, icon: 'EnvelopeSimple', title: 'Le mail arrivano nella casella UVA', body: 'Copia di cortesia fatture, listini aggiornati, comunicazioni cantine. L\'agente legge, riconosce mittente e tipo di documento.' },
    { index: 2, icon: 'CursorClick', title: 'Routing automatico, fail-safe', body: 'Match esatto su P.IVA e ragione sociale del cliente finale. Se la confidenza è < 100%, niente invio: la fattura va in coda per la tua approvazione.' },
    { index: 3, icon: 'WhatsappLogo', title: 'Forward al cliente · CC commerciale', body: 'Mail al referente del ristorante con messaggio standard. Il commerciale di zona riceve copia. Logging completo per audit (cliente, fattura, ora di invio).' },
  ],

  gestionali: [
    { name: 'Order Sender', vendor: 'SaaS forza vendita' },
    { name: 'Fatture in Cloud' },
    { name: 'Aruba Fatturazione' },
    { name: 'Gmail Workspace' },
    { name: 'Google Drive' },
    { name: 'Notion (CRM)' },
    { name: 'WhatsApp Business' },
    { name: 'TeamSystem' },
  ],

  roi: {
    headline: '~16 ore al mese di lavoro a basso valore.',
    note: 'Stime su agenzie di intermediazione con 15-30 agenti di commercio attivi. Il risparmio cresce in modo non lineare con il numero di clienti finali e cantine servite.',
    metrics: [
      { label: 'Forward fatture/mese', value: '420+', caption: 'gestite automaticamente, con audit trail' },
      { label: 'Errori di routing', value: '0', caption: 'su 18 mesi di operatività · escalation umana sotto il 100%' },
      { label: 'Tempo report commerciali', value: '−95%', caption: 'da 1 giorno a 30 min con revisione' },
      { label: 'Coverage zone listini', value: '100%', caption: 'mappa cantina → regioni servite mantenuta nel sistema' },
    ],
  },

  caseStudy: {
    name: 'Samuele del Carlo',
    role: 'Titolare',
    org: 'Agenzia UVA SRL',
    region: 'Lucca · 20 agenti su tutta Italia',
    quote:
      "Chiara, la mia assistente storica, in dieci anni non aveva mai sbagliato un invio fattura. Quando ci ha detto che andava via, il timore era proprio quello. Con il sistema di Lumenia oggi gestiamo 400 fatture al mese e di errori nessuno, perché quando non è sicuro, semplicemente chiede.",
    metrics: [
      { label: 'Fatture/mese inoltrate', value: '420' },
      { label: 'Tempo Chiara recuperato', value: '−18 h/m' },
      { label: 'Errori instradamento', value: '0' },
    ],
    href: '/clienti/agenzia-uva',
  },

  faqs: [
    { q: 'Cosa vuol dire "fail-safe sul routing"?', a: 'Il sistema invia una fattura al cliente finale solo se la confidenza di matching (P.IVA + ragione sociale) è al 100%. In tutti gli altri casi, la fattura va in coda di approvazione su Telegram. Mai una mail "tirata a indovinare".' },
    { q: 'Si integra con Order Sender?', a: 'Sì, nativamente via API ufficiale. Il sistema legge il fatturato per agente, per cantina e per cliente, e gestisce le mappature cliente → zona → commerciale → mail di riferimento.' },
    { q: 'I report ai commerciali sono personalizzati per ciascuno?', a: "Esatto. Ogni agente riceve solo i suoi numeri, con confronto mese-su-mese e anno-su-anno automatico. Il tono è motivazionale ma non finto: se vendi poco, lo sa anche l'agente, l'AI non lo nasconde." },
    { q: "Come funziona la mappatura zone-cantine?", a: 'In fase di setup importiamo la tua mappa: "Cantina X serve Toscana e Liguria, Cantina Y solo Friuli". Quando arriva un nuovo listino, l\'agente filtra automaticamente i clienti per regione e lo inoltra solo a quelli rilevanti. Tu mantieni la mappa, sempre.' },
    { q: 'Cosa succede se entra un nuovo cliente non in DB?', a: 'Niente invio automatico. La prima fattura per un cliente nuovo finisce in coda. Tu o il responsabile lo aggiungete al database (cliente, P.IVA, mail, commerciale di zona, regione) e da lì in poi è gestito come gli altri.' },
  ],

  finalCtaTitle: 'Quante ore alla settimana spendete in copia-incolla di fatture?',
  finalCtaSubtitle: 'Demo gratuita con un caso reale del settore vino',
};
