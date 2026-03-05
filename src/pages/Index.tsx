import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PluginsSection from "@/components/PluginsSection";
import ContributionsSection from "@/components/ContributionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PluginsSection />
      <ContributionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
