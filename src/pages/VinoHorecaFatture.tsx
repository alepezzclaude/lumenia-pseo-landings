import { LandingTemplate } from '../components/LandingTemplate';
import { vinoHorecaIntermediazione } from '../data/vino-horeca-intermediazione';

export default function VinoHorecaFatture() {
  return <LandingTemplate data={vinoHorecaIntermediazione} />;
}
