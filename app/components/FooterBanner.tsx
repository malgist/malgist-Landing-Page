"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterBanner() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Start growing your
            <br />
            digital money today.
          </h2>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-md md:shadow-lg"
        >
          <Image
            src="/footer-banner.png"
            alt="Glider Platform Visualization"
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
