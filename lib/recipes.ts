export interface Recipe {
  id: number;
  title: string;
  slug: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  method: string[];
  product: string;
  color: string;
  category: string;
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const recipes: Recipe[] = [
  {
    id: 4,
    title: 'Peppery Rasam',
    slug: slugify('Peppery Rasam'),
    description: 'A warming, tangy soup with black pepper and our rasam spice blend. A digestive powerhouse and perfect comfort food.',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: '4',
    difficulty: 'Easy',
    product: 'Rasam Mix',
    color: '#ff5a5a',
    category: 'Soup',
    ingredients: [
      '1 small tomato',
      '2 tbsp Sriranga Rasam Mix',
      '1 tsp whole black peppercorns',
      '1 tsp cumin seeds',
      'Tamarind extract',
      'Fresh coriander',
      '1 tsp ghee',
      'Salt to taste',
    ],
    method: [
      'Boil tomato until soft, mash and strain.',
      'Add rasam mix, tamarind extract, and salt to 2 cups water.',
      'Bring to boil, add mashed tomato.',
      'Crush peppercorns and cumin, add to the rasam.',
      'Simmer for 5 minutes until aromatic.',
      'Temper with ghee, mustard seeds, and curry leaves.',
      'Garnish with fresh coriander and serve hot.',
    ],
  },
  {
    id: 5,
    title: 'Sambar Roasted Chickpeas',
    slug: slugify('Sambar Roasted Chickpeas'),
    description: 'Crunchy, protein-packed snack with a spicy sambar kick. Perfect for movie nights or as a healthy afternoon snack.',
    prepTime: '5 min',
    cookTime: '25 min',
    servings: '2',
    difficulty: 'Easy',
    product: 'Sambar Mix',
    color: '#a80000',
    category: 'Snack',
    ingredients: [
      '2 cups cooked chickpeas',
      '1 tbsp Sriranga Sambar Mix',
      '1 tbsp olive oil',
      'Salt to taste',
    ],
    method: [
      'Preheat oven to 200°C (400°F).',
      'Pat chickpeas dry with paper towel.',
      'Toss with olive oil, sambar mix, and salt.',
      'Spread on baking sheet in single layer.',
      'Roast for 25 minutes, shaking halfway.',
      'Let cool for 5 minutes before serving.',
    ],
  },
  {
    id: 6,
    title: 'Rasam Tomato Rice',
    slug: slugify('Rasam Tomato Rice'),
    description: 'Quick and flavorful rice dish using rasam mix. A great way to use leftover rice with minimal effort.',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: '2',
    difficulty: 'Easy',
    product: 'Rasam Mix',
    color: '#ff5a5a',
    category: 'Quick Meal',
    ingredients: [
      '2 cups cooked rice',
      '2 tbsp Sriranga Rasam Mix',
      '1 ripe tomato, diced',
      '1 tbsp oil',
      'Mustard seeds',
      'Curry leaves',
    ],
    method: [
      'Heat oil, add mustard seeds and curry leaves.',
      'Add diced tomato and cook until soft.',
      'Add rasam mix and cook for 1 minute.',
      'Add cooked rice and mix gently.',
      'Cook for 2-3 minutes until heated through.',
      'Serve hot with papad or raita.',
    ],
  },
  {
    id: 7,
    title: 'Bisi Bele Stuffed Peppers',
    slug: slugify('Bisi Bele Stuffed Peppers'),
    description: 'Bell peppers stuffed with flavorful bisi bele bath mixture. A creative fusion that\'s both healthy and delicious.',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: '4',
    difficulty: 'Medium',
    product: 'Bisibelebath Mix',
    color: '#fba20d',
    category: 'Fusion',
    ingredients: [
      '4 bell peppers',
      '1 cup cooked rice',
      '2 tbsp Sriranga Bisi Bele Bath Mix',
      '1/2 cup cooked lentils',
      '1 tbsp ghee',
      'Salt to taste',
    ],
    method: [
      'Preheat oven to 180°C (350°F).',
      'Cut tops off peppers, remove seeds.',
      'Mix rice, lentils, bisi bele bath mix, and ghee.',
      'Stuff peppers with mixture.',
      'Place in baking dish, cover with foil.',
      'Bake for 30 minutes until peppers are tender.',
    ],
  },
  {
    id: 8,
    title: 'Puliyogare Tamarind Chutney',
    slug: slugify('Puliyogare Tamarind Chutney'),
    description: 'A tangy, spicy chutney perfect as a side dish or spread. Uses our puliyogare mix for authentic temple-town flavor.',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: '6',
    difficulty: 'Easy',
    product: 'Puliyogare Mix',
    color: '#650f09',
    category: 'Condiment',
    ingredients: [
      '1/2 cup tamarind paste',
      '2 tbsp Sriranga Puliyogare Mix',
      '1 tsp jaggery',
      'Salt to taste',
      '1 tbsp oil',
      'Mustard seeds',
      'Dried red chilies',
    ],
    method: [
      'Mix tamarind paste with puliyogare mix and jaggery.',
      'Add salt and adjust consistency with water.',
      'Heat oil, add mustard seeds and dried red chilies.',
      'Pour tempering over chutney mixture.',
      'Mix well and let cool.',
      'Store in refrigerator for up to 1 week.',
    ],
  },
];
