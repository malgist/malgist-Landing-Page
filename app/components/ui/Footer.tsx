import { X, Send, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors hover:text-white"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors hover:text-white"
              aria-label="Discord"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors hover:text-white"
              aria-label="YouTube"
            >
              <Video className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Links Sections */}
          <div className="flex gap-12 md:gap-16 lg:gap-24">
            {/* Legal Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Legal</h3>
              <a
                href="/privacy"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                Terms of Service
              </a>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Company</h3>
              <a
                href="/faq"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                Contact
              </a>
              <a
                href="/blog"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                Blog
              </a>
              <a
                href="/media-kit"
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs md:text-sm"
              >
                Media Kit
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-gray-200 text-center">
          <p className="text-xs md:text-sm text-gray-600">
            © {currentYear} Malgist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
