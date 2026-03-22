import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Palette, ClipboardCheck, Factory, Package, Ship } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Requirement Discussion", desc: "Consultative approach to understand your count, specifications, and business needs." },
  { icon: Palette, title: "Curated Selection", desc: "Choosing from our export-grade 50+ categories and 36+ signature shades." },
  { icon: ClipboardCheck, title: "Sample Validation", desc: "Rigorous specification review and physical sample approval process." },
  { icon: Factory, title: "Elite Production", desc: "Manufacturing excellence paired with high-frequency quality inspections." },
  { icon: Package, title: "Export Logistics", desc: "Premium grade packaging designed for maritime and air transit safety." },
  { icon: Ship, title: "Global Fulfillment", desc: "End-to-end documentation and international delivery co-ordination." },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-[#faf9f6] relative overflow-hidden" ref={containerRef}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-50 z-10" />
      
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Strategic Workflow</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gold-gradient-text">Excellence</span> Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light leading-relaxed">
            A meticulous end-to-end journey from concept to global delivery.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/10 -translate-x-1/2 hidden md:block" />
          
          {/* Growing Progress Line */}
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold via-gold to-gold/20 -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((s, i) => (
              <div key={s.title} className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full md:w-[45%] group"
                >
                  <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-lg shadow-gold/5 group-hover:border-gold/40 transition-all duration-500 relative overflow-hidden">
                    {/* Unique Identifier */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                       <span className="font-serif text-6xl md:text-8xl font-black text-gold">{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold transition-all duration-500">
                        <s.icon size={20} className="text-gold group-hover:text-black" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <div className="hidden md:flex relative z-30 w-[10%] items-center justify-center">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="w-4 h-4 rounded-full bg-white border-2 border-gold shadow-lg shadow-gold/20"
                   />
                </div>

                {/* Empty Spacer for desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
