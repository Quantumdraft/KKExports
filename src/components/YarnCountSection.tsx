import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Info, HelpCircle } from "lucide-react";

const rows = [
  { count: "10s", thickness: "Heavy", applications: "Premium Denim, Industrial Towels, Heavy Fleece", twist: "Controlled Low", weight: "1.0mm approx" },
  { count: "20s", thickness: "Core", applications: "High-End T-shirts, Durable Knit Fabrics", twist: "Balanced Medium", weight: "0.5mm approx" },
  { count: "30s", thickness: "Refined", applications: "Superfine Knitwear, Luxury Apparel", twist: "Superior High", weight: "0.3mm approx" },
];

const YarnCountSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="yarn-guide" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 mb-6">
            <Info size={14} className="text-gold" />
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Reference Guide</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Master's <span className="gold-gradient-text">Table</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A specialized technical overview of our Open End (OE) yarn specifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white border border-gold/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 bg-[#1a1814] px-8 py-6">
              {["Yarn Count", "Grade", "Twist Level", "Technical Application", "Diameter Ref."].map((h, i) => (
                <div key={h} className={`text-[10px] font-black text-gold uppercase tracking-[0.2em] self-center ${i > 2 ? 'hidden md:block' : ''}`}>
                  {h}
                </div>
              ))}
            </div>

            {/* Guide Rows */}
            <div className="divide-y divide-gold/10">
              {rows.map((r, i) => (
                <motion.div
                  key={r.count}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-5 group hover:bg-[#faf9f6] transition-all duration-500 px-8 py-8 md:py-10"
                >
                  <div className="flex flex-col">
                     <span className="font-serif text-4xl md:text-5xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">{r.count}</span>
                     <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">OE Standard</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex flex-col">
                       <span className="text-base font-bold text-foreground mb-1">{r.thickness}</span>
                       <div className="flex gap-1">
                          {[1, 2, 3].map((dot) => (
                            <div key={dot} className={`w-1.5 h-1.5 rounded-full ${i === 2 && dot > 1 ? 'bg-gold/10' : i === 1 && dot > 2 ? 'bg-gold/10' : 'bg-gold'}`} />
                          ))}
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="px-4 py-1.5 rounded-full bg-gold/5 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                      <span className="text-xs font-bold text-gold uppercase tracking-tighter">{r.twist}</span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center md:col-span-1">
                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-[180px] group-hover:text-foreground transition-colors">{r.applications}</p>
                  </div>

                  <div className="hidden md:flex items-center justify-end">
                     <div className="text-right">
                        <span className="text-sm font-light text-muted-foreground underline decoration-gold/30 underline-offset-4">{r.weight}</span>
                        <HelpCircle size={12} className="inline ml-2 text-gold/40" />
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="bg-[#faf9f6]/50 px-8 py-6 border-t border-gold/10">
               <p className="text-[11px] text-muted-foreground font-light italic">
                 * Custom counts and specifications available upon elite order request. Contact our technical team for specific count requirements.
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YarnCountSection;
