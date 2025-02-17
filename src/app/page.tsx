import { DevelopmentStages } from '@/components/pages/home/DevelopmentStages';
import { OurWorks } from '@/components/pages/home/OurWorks/OurWorks';
import { WeOffer } from '@/components/pages/home/WeOffer/WeOffer';
import { OurAdvantages } from '@/components/pages/home/OurAdvantages/OurAdvantages';
import { AboutUs } from '@/components/pages/home/AboutUs';
import { Hero } from '@/components/pages/home/Hero';
import { Form } from '@/components/pages/home/Form';
import { Reviews } from '@/components/pages/home/Reviews/Reviews';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WeOffer />
      <OurWorks />
      <DevelopmentStages />
      <OurAdvantages />
      <Form />
      <Reviews />
    </>
  );
}
