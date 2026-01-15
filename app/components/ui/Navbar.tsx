"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/public/Logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between w-full max-w-[95%] md:max-w-2xl bg-white/95 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full items-center text-base shadow-sm backdrop-blur-lg border border-gray-200"
        >
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="Malgist Logo"
              width={28}
              height={28}
              className="md:w-8 md:h-8 transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <ol className="hidden md:flex gap-6">
            <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
              Explore
            </li>
            <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
              Careers
            </li>
            <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
              Blog
            </li>
          </ol>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="bg-[#151816] text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              Go to app
            </a>
            <a
              href="#"
              className="hidden sm:block text-gray-600 text-sm font-medium hover:text-[#151816] transition-colors duration-300"
            >
              Sign in
            </a>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#"
              className="bg-[#151816] text-white px-3 py-2 rounded-full text-xs font-semibold hover:bg-gray-900 transition-all duration-300 shadow-sm"
            >
              Go to app
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-gray-900" />
              ) : (
                <Menu size={20} className="text-gray-900" />
              )}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-6">
                {/* Mobile Navigation Links */}
                <ol className="flex flex-col gap-4 mb-6">
                  <li
                    onClick={closeMobileMenu}
                    className="text-gray-900 hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium text-lg py-2 border-b border-gray-100"
                  >
                    Explore
                  </li>
                  <li
                    onClick={closeMobileMenu}
                    className="text-gray-900 hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium text-lg py-2 border-b border-gray-100"
                  >
                    Careers
                  </li>
                  <li
                    onClick={closeMobileMenu}
                    className="text-gray-900 hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium text-lg py-2 border-b border-gray-100"
                  >
                    Blog
                  </li>
                </ol>

                {/* Mobile Sign In */}
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="block w-full text-center text-gray-600 text-sm font-medium hover:text-[#151816] transition-colors duration-300 py-3"
                >
                  Sign in
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
