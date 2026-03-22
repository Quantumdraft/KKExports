import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import YarnCountSection from "@/components/YarnCountSection";
import ShadesSection from "@/components/ShadesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import QualitySection from "@/components/QualitySection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <YarnCountSection />
    <ShadesSection />
    <WhyChooseUsSection />
    <QualitySection />
    <ProcessSection />
    <IndustriesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
