import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Recipes | Sriranga Organics',
    template: '%s | Sriranga Organics',
  },
  description: 'Explore authentic South Indian recipes made with Sriranga Organics spice blends — from peppery rasam to sambar roasted chickpeas.',
  openGraph: {
    title: 'Recipes | Sriranga Organics',
    description: 'Explore authentic South Indian recipes made with Sriranga Organics spice blends.',
    type: 'website',
  },
};

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
