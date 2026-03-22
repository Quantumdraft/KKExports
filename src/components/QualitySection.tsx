import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ShieldCheck, Globe, Zap, Award, BarChart3, Fingerprint } from "lucide-react";
import qualitySeal from "@/assets/quality_seal.png";

const qualityPoints = [
  { icon: ShieldCheck, title: "Mill Sourcing", desc: "Direct partnerships with elite ISO-certified spinning mills." },
  { icon: BarChart3, title: "Consistency", desc: "Digital shade matching for zero-deviation batch processing." },
  { icon: Globe, title: "Export Grade", desc: "Meticulous documentation for worldwide customs compliance." },
  { icon: Zap, title: "Transit Ready", desc: "High-tensile packaging engineered for maritime conditions." },
  { icon: Fingerprint, title: "Full Tracing", desc: "Batch-level tracking from fiber origin to final delivery." },
  { icon: Award, title: "Elite Service", desc: "Consultative buyer support with transparent communication." },
];

const QualitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quality" className="section-padding bg-[#faf9f6] relative overflow-hidden" ref={ref}>
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side: Interactive Seals Grid */}
          <div className="order-2 lg:order-1">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {qualityPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm border border-gold/10 p-6 rounded-2xl hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                    <p.icon size={20} className="text-gold group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground mb-1 group-hover:text-gold transition-colors">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: The Certificate Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-gold/40 via-gold/10 to-gold/40 shadow-2xl overflow-hidden group">
               <div className="absolute inset-0 bg-[#1a1814]" />
               
               <div className="relative bg-[#1a1814] rounded-[2.8rem] p-10 md:p-14 overflow-hidden">
                  {/* Glowing Orbs */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />

                  <div className="text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-8">
                       <ShieldCheck size={12} className="text-gold" />
                       <span className="text-[10px] font-black text-gold tracking-[0.2em] uppercase">Trusted Global Partner</span>
                    </div>

                    <img 
                      src={qualitySeal} 
                      alt="KK Exports Quality Assurance Seal - Premium Yarn Export Grade" 
                      className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(197,161,126,0.3)] group-hover:scale-105 transition-transform duration-700" 
                    />

                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Defining <span className="gold-gradient-text italic">Excellence</span> at <span className="text-gold">KK Exports</span>
                    </h2>
                    
                    <p className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-sm mx-auto">
                      Ensuring precision, uniformity, and premium handling for every shipment worldwide.
                    </p>

                    <div className="flex items-center justify-center gap-8 border-t border-white/5 pt-10">
                       <div className="text-center">
                          <p className="text-white font-serif text-2xl font-bold">100%</p>
                          <p className="text-gold text-[10px] uppercase font-black tracking-widest mt-1">Inspection</p>
                       </div>
                       <div className="w-px h-10 bg-white/10" />
                       <div className="text-center">
                          <p className="text-white font-serif text-2xl font-bold">Grade A</p>
                          <p className="text-gold text-[10px] uppercase font-black tracking-widest mt-1">Consistency</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
