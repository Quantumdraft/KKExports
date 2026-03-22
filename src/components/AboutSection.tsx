import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Globe, Palette, Factory } from "lucide-react";

const stats = [
  { icon: Layers, label: "Wide Yarn Variety", desc: "50+ yarn categories" },
  { icon: Globe, label: "Global Business Focus", desc: "International reach" },
  { icon: Palette, label: "Premium Shade Options", desc: "36+ custom shades" },
  { icon: Factory, label: "Reliable Production", desc: "Consistent supply" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-[0.15em] uppercase text-sm mb-3">About Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted Yarn Export Partners for <span className="gold-gradient-text">Global Markets</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <span className="gold-gradient-text font-bold">KK Exports</span> is a premier yarn export company specializing in high-quality textile yarns for global manufacturers.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-cream border border-border rounded-xl p-6 text-center hover:gold-shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center">
                <s.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-1">{s.label}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
