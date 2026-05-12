import { LandingTemplate } from '../components/LandingTemplate';
import { ristorazionePrenotazioniWhatsapp } from '../data/ristorazione-prenotazioni-whatsapp';

export default function RistorazionePrenotazioni() {
  return <LandingTemplate data={ristorazionePrenotazioniWhatsapp} />;
}
