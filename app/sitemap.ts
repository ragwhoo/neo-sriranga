import type { MetadataRoute } from 'next';
import { recipes } from '@/lib/recipes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://srirangaorganics.com';

  const recipeEntries: MetadataRoute.Sitemap[] = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...recipeEntries,
  ];
}
