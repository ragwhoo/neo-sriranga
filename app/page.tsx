'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/LoadingSequence';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PinnedProductStory from '@/components/PinnedProductStory';
import HeritageSection from '@/components/HeritageSection';
import ProductCollection from '@/components/ProductCollection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingSequence onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main>
      <Navigation />
      <HeroSection />
      <PinnedProductStory />
      <HeritageSection />
      <ProductCollection />
      <Footer />
    </main>
  );
}
