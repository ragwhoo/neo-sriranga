export interface World {
  id: string;
  name: string;
  productName: string;
  color: string;
  productImage: string;
  subtitle: string;
}

export const worlds: World[] = [
  {
    id: 'sambar',
    name: 'World 1',
    productName: 'Sambar Powder',
    color: '#8B1A1A',
    productImage: '/products/sambar.png',
    subtitle: 'Deep Heritage Red',
  },
  {
    id: 'bisibelebath',
    name: 'World 2',
    productName: 'Bisibelebath Powder',
    color: '#D4782B',
    productImage: '/products/bisibelebath.png',
    subtitle: 'Warm Turmeric Orange',
  },
  {
    id: 'puliyogare',
    name: 'World 3',
    productName: 'Puliyogare Powder',
    color: '#4A2810',
    productImage: '/products/puliogare.png',
    subtitle: 'Deep Tamarind Brown',
  },
  {
    id: 'rasam',
    name: 'World 4',
    productName: 'Rasam Powder',
    color: '#C0392B',
    productImage: '/products/rasam.png',
    subtitle: 'Bright Chilli Red',
  },
];
