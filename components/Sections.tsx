'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Naturally Sourced',
    desc: 'We prioritize ingredients grown with respect for nature and traditional agricultural practices.',
  },
  {
    title: 'Authentic Recipes',
    desc: 'Every product is inspired by regional food traditions and prepared to preserve its original character.',
  },
  {
    title: 'Minimal Processing',
    desc: 'We focus on maintaining natural flavor, texture, and nutritional value wherever possible.',
  },
  {
    title: 'Quality First',
    desc: 'Each batch is selected and prepared with attention to consistency, freshness, and purity.',
  },
];

const products = [
  { name: 'Sambar Mix', desc: 'A balanced blend of spices and ingredients designed to bring authentic South Indian flavor to every meal.', img: '/products/sambar.png' },
  { name: 'Bisibelebath Mix', desc: 'A rich and comforting preparation inspired by Karnataka\'s most beloved traditional dish.', img: '/products/bisibelebath.png' },
  { name: 'Puliyogare Mix', desc: 'Tangy, aromatic, and deeply rooted in temple-town culinary traditions.', img: '/products/puliogare.png' },
  { name: 'Black Rice Collection', desc: 'An ancient grain celebrated for its distinctive appearance, unique texture, and traditional significance.', img: '/products/sambar.png' },
];

export default function Sections() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">Our Roots</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            Rooted in Tradition. Crafted for Today.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70">
            At Sriranga Organics, every product begins with a simple belief: good food should come from honest ingredients.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            Inspired by traditional recipes and time-tested methods, we create products that celebrate the richness of natural farming and authentic Indian flavors. No shortcuts. No unnecessary additives. Just carefully selected ingredients transformed into products that belong in modern kitchens.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            What started as a commitment to purity has grown into a mission — bringing the goodness of traditionally cultivated ingredients to people who value quality, taste, and trust.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">The Journey of Every Grain</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            From Soil to Table
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70">
            Every ingredient has a story.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            It begins in fertile fields where crops are grown with care and patience. Harvested at the right time, processed with minimal intervention, and prepared using methods that preserve their natural character.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            The result is food that carries more than nutrition — it carries heritage, craftsmanship, and a connection to the land it came from.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            At Sriranga Organics, we believe the journey matters just as much as the destination.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">Why Sriranga Organics</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-16 text-[#f5f0e8]">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="text-xl font-['Moonbase_Delta'] tracking-wider text-[#f5f0e8] mb-2">{f.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-[#f5f0e8]/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">Featured Products</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-4 text-[#f5f0e8]">
            Inspired by Tradition
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mb-16 max-w-2xl mx-auto">
            A collection of carefully crafted products that celebrate the diversity of Indian ingredients and culinary heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((p) => (
              <div key={p.name} className="text-left">
                <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-['Moonbase_Delta'] tracking-wider text-[#f5f0e8] mb-1">{p.name}</h3>
                <p className="text-sm md:text-base leading-relaxed text-[#f5f0e8]/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">Philosophy</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            Food Should Feel Honest
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70">
            We live in a world of instant solutions.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            But some things are worth preserving.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            The patience of cultivation. The knowledge passed between generations. The ingredients that do not need improvement.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            Sriranga Organics exists to protect these traditions while making them accessible to modern households.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            Because authenticity never goes out of style.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            About Sriranga Organics
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70">
            Sriranga Organics was founded with a simple purpose: to reconnect people with food that is genuine, traditional, and thoughtfully prepared.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            We draw inspiration from India's agricultural heritage and regional culinary traditions, creating products that honor both the farmer and the consumer.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mt-4">
            Our approach is guided by transparency, quality, and respect for natural ingredients. Every product reflects our commitment to delivering food that people can trust and enjoy.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-24" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#f5f0e8]/50 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mb-12">
            Whether you're looking to learn more about our products, explore partnerships, or simply have a question, we'd love to hear from you. Reach out and become part of the Sriranga Organics journey.
          </p>
          <div className="flex flex-col items-center gap-3 text-sm text-[#f5f0e8]/70">
            <a href="mailto:hello@srirangaorganics.com" className="hover:text-[#f5f0e8] transition-colors">hello@srirangaorganics.com</a>
            <a href="tel:+919999999999" className="hover:text-[#f5f0e8] transition-colors">+91 99999 99999</a>
            <div className="flex items-center gap-6 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="tracking-widest uppercase text-xs hover:text-[#f5f0e8] transition-colors">Instagram</a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="tracking-widest uppercase text-xs hover:text-[#f5f0e8] transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 md:px-8" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-[#f5f0e8]/60">Tradition in Every Ingredient. Trust in Every Product.</p>
          <p className="text-xs text-[#f5f0e8]/30">&copy; Sriranga Organics</p>
        </div>
      </footer>
    </>
  );
}
