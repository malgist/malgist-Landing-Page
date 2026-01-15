"use client";

import { motion } from "framer-motion";

export default function Definition() {
  return (
    <section className="w-full bg-gray-50 pt-12 md:pt-16 lg:pt-20 xl:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Column - Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight mb-4 md:mb-6">
              <span className="text-[#151816] font-medium">Managing digital assets is complicated.</span>{" "}
              <span className="text-gray-400">
                Juggling multiple apps, checking prices constantly, wondering where to put your money—it shouldn&apos;t be this hard.
              </span>
            </h2>
          </motion.div>

          {/* Right Column - Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight mb-4 md:mb-6">
              <span className="text-[#151816] font-medium">Malgist makes it simple.</span>{" "}
              <span className="text-gray-400">
                One platform to see everything, manage your money strategies, and let technology do the work for you.
              </span>{" "}
              <span className="text-[#151816] font-medium">
                You stay in full control, without the headaches.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
