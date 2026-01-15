import Navbar from "./components/ui/Navbar";
import BackedBy from "./components/BackedBy";
import Definition from "./components/Definition";
import Features from "./components/Features";
import Footer from "./components/ui/Footer";
import Closing from "./components/Closing";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <BackedBy />
        <Definition />
        <Features />
        <Closing />
        <FooterBanner />
      </main>
      <Footer />
    </div>
  );
}
