import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreLoaderWrapper from "./components/PreLoaderWrapper";
import { PreloaderProvider } from "./context/PreloaderContext";

// Konfigurasi font Inter - Modern & Professional
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/Logo.png",
  },
  title: "Malgist - AI-Powered Crypto Portfolio Manager",
  description: "Malgist leverages AI to optimize your crypto portfolio across multiple chains, providing real-time insights and dynamic asset allocation for maximum returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreloaderProvider>
          <PreLoaderWrapper
            skipOnRevisit={false}
            duration={3000}
            staggerDelay={0.15}
          >
            {children}
          </PreLoaderWrapper>
        </PreloaderProvider>
      </body>
    </html>
  );
}
