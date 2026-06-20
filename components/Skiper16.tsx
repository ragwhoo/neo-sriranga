"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    title: "Puliyogare Mix",
    src: "/pulipuli.png",
    color: "#650f09",
  },
  {
    title: "Sambar Mix",
    src: "/samsam.png",
    color: "#a80000",
  },
  {
    title: "Bisibelebath Mix",
    src: "/bisbis.png",
    color: "#fba20d",
  },
  {
    title: "Rasam Mix",
    src: "/rasras.png",
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
          top: `calc(-5vh + ${i * 20 + 80}px)`,
        }}
        className="relative -top-1/4 flex flex-col overflow-hidden w-[95vw] max-w-[1200px] aspect-[4/3] md:aspect-[16/9] origin-top rounded-3xl"
        key={title}
      >
        <Image src={src} alt={title} fill className="object-cover rounded-3xl" />
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
    <section ref={container} className="relative w-full px-4 pt-8 pb-24" style={{ backgroundColor: "#fef3ea" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/flowerrrr.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }} />
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
