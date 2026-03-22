import { motion } from "framer-motion";
import { Globe, Award, Palette, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.jpg";

const badges = [
  { icon: Globe, label: "Global Supply" },
  { icon: Award, label: "Premium Quality" },
  { icon: Palette, label: "Custom Shades" },
  { icon: Truck, label: "Reliable Delivery" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Premium textile yarn cones for global export - KK Exports" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/40" />
    </div>
    <div className="container mx-auto relative z-10 px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">
          KK Exports
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          Premium Yarn Exports for{" "}
          <span className="gold-gradient-text">Global Textile Markets</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
          Delivering quality yarns to the world — with unmatched variety, custom shade options, and reliable export-grade supply for manufacturers worldwide.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#products"
            className="gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity gold-shadow"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border-2 border-gold text-gold px-8 py-3.5 rounded-md font-semibold text-base hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            Send Enquiry
          </a>
        </div>
        <div className="flex flex-wrap gap-6">
          {badges.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2.5 gold-shadow"
            >
              <b.icon size={18} className="text-gold" />
              <span className="text-sm font-medium text-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
