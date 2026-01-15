"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Closing() {
  const features = [
    {
      media: "/price-cards.mp4",
      type: "video",
      description:
        "Compare earnings across different platforms instantly. Our system highlights the best opportunities based on your goals.",
    },
    {
      media: "/dynamic-yield.mp4",
      type: "video",
      description:
        "Track how your money is doing in real-time. See exactly where your money is working best for you.",
    },
    {
      media: "/s2-f3-liquidity.png",
      type: "image",
      description:
        "One dashboard shows all your money in different places—everything you need to see, all in one view.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Text with Circular Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 md:mb-20 lg:mb-28"
        >
          {/* Decorative Circles Background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute w-64 h-64 rounded-full border border-gray-200 opacity-40"></div>
            <div className="absolute w-96 h-96 rounded-full border border-gray-200 opacity-30"></div>
            <div className="absolute w-128 h-128 rounded-full border border-gray-200 opacity-20"></div>
          </div>

          {/* Main Heading */}
          <h2 className="relative text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Malgist works 24/7
            <br />
            so you don&apos;t have to.
          </h2>
        </motion.div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col items-center shadow-sm hover:shadow-xl hover:scale-105 duration-300"
            >
              {/* Media Container */}
              <div className="w-full aspect-square mb-4 md:mb-6 flex items-center justify-center bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
                {feature.type === "video" ? (
                  <video
                    src={feature.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={feature.media}
                    alt={`Feature ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-900 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Predictive Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-16 text-center shadow-sm hover:shadow-xl hover:scale-105 duration-300"
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Left decorative image */}
            <div className="hidden lg:block w-16 h-16">
              <Image
                src="/Logo.png"
                alt="Investor"
                width={64}
                height={64}
                className="w-full h-full object-contain opacity-60"
              />
            </div>

            {/* Center Text */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-900 max-w-3xl">
              Smart technology turns complicated money decisions into simple, clear actions.
            </p>

            {/* Right decorative image */}
            <div className="hidden lg:block w-16 h-16">
              <Image
                src="/Logo.png"
                alt="Investor"
                width={64}
                height={64}
                className="w-full h-full object-contain opacity-60"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
