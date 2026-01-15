"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BackedBy() {
  const investors = [
    { src: "/idrx.png", alt: "Investor 1" },
    { src: "/mantle.png", alt: "Mantle" },
    { src: "/web3jogja.jpg", alt: "Web3 Jogja" },
    { src: "/HackQuest.png", alt: "HackQuest" },
  ];

  // Duplicate investors for seamless loop
  const duplicatedInvestors = [...investors, ...investors, ...investors];

  return (
    <section className="w-full bg-gray-50 py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-sm md:text-base text-[#151816] font-normal">
            Backed by:
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Animated Marquee */}
          <motion.div
            className="flex gap-12 lg:gap-16"
            animate={{
              x: [0, -100 * investors.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedInvestors.map((investor, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={investor.src}
                  alt={investor.alt}
                  width={120}
                  height={40}
                  className="h-6 md:h-8 lg:h-10 w-auto object-contain opacity-60"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
