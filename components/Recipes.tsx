'use client';

import { motion } from 'framer-motion';
import { FaBookmark } from 'react-icons/fa6';
import Link from 'next/link';
import { recipes } from '@/lib/recipes';

const blurFadeIn = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  whileInView: { opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const colorVariants = [
  'bg-[#a80000]/85 hover:bg-[#a80000]/65',
  'bg-[#fba20d]/85 hover:bg-[#fba20d]/65',
  'bg-[#650f09]/85 hover:bg-[#650f09]/65',
  'bg-[#ff5a5a]/85 hover:bg-[#ff5a5a]/65',
];

export default function Recipes() {
  return (
    <section id="recipes" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-8 py-24 text-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl">
        <motion.p {...blurFadeIn} className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8B1A1A]/40 mb-2">From Our Kitchen</motion.p>
        <motion.h2 {...blurFadeIn} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-moonbase tracking-wider text-[#8B1A1A] leading-tight mb-4">
          Recipes
        </motion.h2>
        <motion.p {...blurFadeIn} className="text-base md:text-lg leading-relaxed text-[#8B1A1A]/70 mx-auto max-w-2xl mb-12">
          Simple, flavorful ways to bring Sriranga Organics spice blends into your everyday cooking.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-6"
        >
          {recipes.map((recipe, i) => (
            <Link key={recipe.id} href={`/recipes/${recipe.slug}`} scroll={true} className="block w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <motion.article
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex min-h-[280px] sm:min-h-[340px] lg:min-h-[360px] w-full flex-col justify-between rounded-[2rem] p-5 sm:p-7 cursor-pointer transition-colors duration-300 ${colorVariants[i % colorVariants.length]}`}
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-bold">
                      {recipe.prepTime} + {recipe.cookTime}
                    </span>
                    <motion.div
                      className="text-white/50 hover:text-white/90 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <FaBookmark className="size-5" />
                    </motion.div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center py-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white line-clamp-3 text-4xl leading-[1.2] font-medium tracking-tight">
                        {recipe.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="mt-auto flex items-center gap-3">
                      <motion.div
                        className="bg-white/20 flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white text-xs font-bold">{recipe.product.charAt(0)}</span>
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="text-white text-sm leading-tight font-medium">
                          {recipe.product}
                        </span>
                        <span className="text-white/70 text-xs leading-tight font-medium">
                          {recipe.category}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      className="ml-auto flex items-center justify-center rounded-md border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
