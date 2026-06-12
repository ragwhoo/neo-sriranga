'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/LoadingSequence';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <HeroSection />
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
    </main>
  );
}
