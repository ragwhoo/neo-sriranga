'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/LoadingSequence';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingSequence onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main>
      <HeroSection />
    </main>
  );
}
