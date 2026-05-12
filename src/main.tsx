import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Index from './pages/Index';
import RistorazionePrenotazioni from './pages/RistorazionePrenotazioni';
import EdiliziaPreventiviVocali from './pages/EdiliziaPreventiviVocali';
import VinoHorecaFatture from './pages/VinoHorecaFatture';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/soluzioni/ristorazione/prenotazioni-whatsapp" element={<RistorazionePrenotazioni />} />
        <Route path="/soluzioni/edilizia/preventivi-vocali" element={<EdiliziaPreventiviVocali />} />
        <Route path="/soluzioni/vino-horeca/intermediazione-ordini-clienti" element={<VinoHorecaFatture />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
