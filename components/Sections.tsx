'use client';

export default function Sections() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            Our Story
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70">
            For generations, Sriranga Organics has been rooted in the rich soil of tradition,
            crafting authentic spice blends that bring the soul of South Indian cuisine to your kitchen.
            Every powder is a testament to time-honoured methods and the purest ingredients.
          </p>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-['Moonbase_Delta'] tracking-wider mb-6 text-[#f5f0e8]">
            Contact
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#f5f0e8]/70 mb-8">
            Reach out to us for wholesale inquiries, bulk orders, or simply to share your love
            for authentic South Indian flavours.
          </p>
          <a
            href="mailto:hello@srirangaorganics.com"
            className="inline-block px-8 py-3 border border-[#f5f0e8]/30 text-[#f5f0e8] tracking-widest text-sm uppercase hover:bg-[#f5f0e8]/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="relative py-12 px-8" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#f5f0e8]/50">
          <p>&copy; Sriranga Organics</p>
          <p className="tracking-widest uppercase">Handcrafted with care</p>
        </div>
      </footer>
    </>
  );
}
