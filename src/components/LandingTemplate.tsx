import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { PainPointsBlock } from './PainPointsBlock';
import { WorkflowBlock } from './WorkflowBlock';
import { GestionaliStrip } from './GestionaliStrip';
import { RoiBlock } from './RoiBlock';
import { CaseStudyBlock } from './CaseStudyBlock';
import { PricingTeaser } from './PricingTeaser';
import { FaqBlock } from './FaqBlock';
import { FinalCta } from './FinalCta';
import type { LandingData } from '../types';

export function LandingTemplate({ data }: { data: LandingData }) {
  useEffect(() => {
    document.title = data.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.metaDescription);
  }, [data]);

  return (
    <div className="bg-[#F7F7F3] text-ink-700 min-h-dvh">
      <Nav />
      <main>
        <Hero data={data} />
        <GestionaliStrip data={data} />
        <PainPointsBlock data={data} />
        <WorkflowBlock data={data} />
        {data.extraBlock}
        <RoiBlock data={data} />
        <CaseStudyBlock data={data} />
        <PricingTeaser data={data} />
        <FaqBlock data={data} />
        <FinalCta data={data} />
      </main>
      <Footer />
    </div>
  );
}
