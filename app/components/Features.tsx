"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Automatic Money Management",
      description: "Our system watches your money 24/7 and suggests the best strategies based on what's happening in the market and what you want to achieve.",
      video: "/rebalance-clock.mp4",
    },
    {
      title: "Everything in One Place",
      description: "Manage your money across multiple platforms from a single dashboard. No need to open dozens of apps, everything you need is right here.",
      video: "/coins-vertical.mp4",
    },
    {
      title: "Your Money, Your Control",
      description: "You hold the keys to your wallet. Everything happens directly from your account—we never touch or hold your funds. 100% safe.",
      video: "/secure-lock.mp4",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
            Manage your digital money as easy as checking your bank account.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl">
            Smart technology that helps your money grow—no financial degree needed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center shadow-sm"
            >
              <div className="mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 p-2 md:p-4 w-full max-w-[280px] mx-auto">
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg md:rounded-xl w-full h-auto aspect-square object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Multi-Chain Feature - Highlighted Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 shadow-sm hover:shadow-xl hover:scale-105 duration-300"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Your Personal Financial Assistant
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Just answer a few simple questions about your goals and how much risk you&apos;re comfortable with. Our technology will create a custom plan just for you.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 p-4 md:p-6 w-full max-w-[280px] md:max-w-[320px] mx-auto">
                <video
                  src="/token-fan.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg md:rounded-xl w-full h-auto aspect-square object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
