"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    title: "Sambar Mix",
    src: "/products/sambar.png",
    color: "#a80000",
  },
  {
    title: "Bisibelebath Mix",
    src: "/products/bisibelebath.png",
    color: "#fba20d",
  },
  {
    title: "Puliyogare Mix",
    src: "/products/puliogare.png",
    color: "#650f09",
  },
  {
    title: "Rasam Mix",
    src: "/products/rasam.png",
    color: "#ff5a5a",
  },
];

const StickyCard = ({
  i,
  title,
  src,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="relative -top-1/4 flex flex-col overflow-hidden w-[90vw] max-w-[600px] aspect-[4/3] origin-top"
        key={title}
      >
        <Image src={src} alt={title} fill className="object-cover" priority />
      </motion.div>
    </div>
  );
};

export default function Skiper16() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative w-full pb-[50vh]" style={{ backgroundColor: "#fef3ea" }}>
      <div className="flex flex-col items-center justify-center pt-[20vh] gap-4 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8B1A1A]/40">Our Products</p>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-['Moonbase_Delta'] tracking-wider text-[#8B1A1A] mb-8">
          Inspired by Tradition
        </h2>
      </div>
      {products.map((product, i) => {
        const targetScale = Math.max(0.5, 1 - (products.length - i - 1) * 0.1);
        return (
          <StickyCard
            key={product.title}
            i={i}
            {...product}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
