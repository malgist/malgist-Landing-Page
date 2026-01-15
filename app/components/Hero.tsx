"use client";

import DotGrid from "./DotGrid";
import { motion } from "framer-motion";
import BlurText from "./BlurText";


export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#d1d5db"
          activeColor="#151816"
          proximity={60}
          speedTrigger={80}
          shockRadius={150}
          shockStrength={5}
          maxSpeed={300}
          resistance={200}
          returnDuration={0.8}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 border border-gray-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#151816] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#151816]"></span>
            </span>
            <span className="text-gray-900 text-xs md:text-sm font-semibold">
              Manage Your Digital Money with AI Assistance
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 md:mb-6 leading-[1.1]">
            <BlurText
              text="Your digital money,"
              delay={50}
              animateBy="letters"
              direction="top"
              className="inline-block text-[#151816]"
              waitForPreloader={true}
            />
            <br />
            <BlurText
              text="growing on its own"
              delay={50}
              animateBy="letters"
              direction="top"
              className="inline-block "
              waitForPreloader={true}
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            A platform that helps your money work smarter. Automatic, secure, and no need to check it every day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-[#151816] text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-effect overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <a href="https://malgistappmantle.vercel.app/dashboard">Get Started</a>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 via-[#151816] to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"></div>
            </button>
            <button className="group px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 rounded-full font-semibold text-base md:text-lg border-2 border-gray-200 hover:border-[#151816] hover:text-[#151816] transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
              <span className="flex items-center gap-2">
                View Demo
                <svg className="w-5 h-5  transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">$10M+</div>
              <div className="text-xs md:text-sm text-gray-600">Money Managed</div>
            </div>
            <div className="text-center sm:border-l sm:border-r border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">Works Non-Stop</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-xs md:text-sm text-gray-600">Platforms Connected</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs md:text-sm font-medium">Scroll down to learn more</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
