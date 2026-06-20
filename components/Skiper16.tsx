"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    title: "Sambar Mix",
    src: "https://picsum.photos/seed/sriranga-sambar/800/600",
    color: "#a80000",
  },
  {
    title: "Bisibelebath Mix",
    src: "https://picsum.photos/seed/sriranga-bisibelebath/800/600",
    color: "#fba20d",
  },
  {
    title: "Puliyogare Mix",
    src: "https://picsum.photos/seed/sriranga-puliyogare/800/600",
    color: "#650f09",
  },
  {
    title: "Rasam Mix",
    src: "https://picsum.photos/seed/sriranga-rasam/800/600",
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
        className="relative -top-1/4 flex flex-col overflow-hidden w-[95vw] max-w-[1200px] aspect-[16/9] origin-top rounded-3xl"
        key={title}
      >
        <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
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
    <section ref={container} className="relative w-full pt-[20vh] pb-[50vh]" style={{ backgroundColor: "#fef3ea" }}>
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
