import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Palette, Layers, Truck, HeadphonesIcon, Globe, CheckCircle, MessageSquare } from "lucide-react";

const features = [
  { 
    icon: ShieldCheck, 
    title: "International Quality Standards", 
    desc: "Our production processes adhere to the most rigorous global benchmarks, ensuring excellence in every fiber.", 
    prestige: "ISO CERTIFIED", 
    size: "lg:col-span-6 md:col-span-12",
    stat: "100%"
  },
  { 
    icon: Palette, 
    title: "Vast Shade Collection", 
    desc: "A meticulously curated palette of 36+ export-grade shades.", 
    prestige: "ELITE DYEING", 
    size: "lg:col-span-3 md:col-span-6",
    stat: "36+"
  },
  { 
    icon: Layers, 
    title: "Diverse Yarn Portfolio", 
    desc: "Across cotton, blended, and specialty textile ranges.", 
    prestige: "FULL RANGE", 
    size: "lg:col-span-3 md:col-span-6",
    stat: "50+"
  },
  { 
    icon: Globe, 
    title: "Global Export Reach", 
    desc: "Tailored end-to-end support for professional international buyers.", 
    prestige: "WORLDWIDE", 
    size: "lg:col-span-4 md:col-span-6",
    stat: "Direct"
  },
  { 
    icon: Truck, 
    title: "Precision Logistics", 
    desc: "Guaranteed on-time dispatch with professional export handling.", 
    prestige: "RELIABLE", 
    size: "lg:col-span-4 md:col-span-6",
    stat: "Swift"
  },
  { 
    icon: HeadphonesIcon, 
    title: "Dedicated Sample Support", 
    desc: "Bespoke assistance for specifications and sampling requests.", 
    prestige: "PRIORITY", 
    size: "lg:col-span-4 md:col-span-12",
    stat: "24/7"
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-[#1a1814] relative overflow-hidden" ref={ref}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">The Elite Advantage</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why <span className="gold-gradient-text">KK Exports</span> Stands Alone
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 scale-100">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${f.size} group relative`}
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.08] hover:border-gold/40 transition-all duration-500 overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <f.icon size={80} strokeWidth={0.5} className="text-white" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                      <f.icon size={26} className="text-gold group-hover:text-black transition-colors" />
                    </div>
                    <span className="font-serif text-3xl font-black text-white/20 group-hover:text-gold/40 transition-colors uppercase tracking-widest">{f.stat}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-[10px] font-black text-gold tracking-[0.2em]">{f.prestige}</span>
                       <div className="h-px w-8 bg-gold/30" />
                    </div>
                    <h3 className="font-serif font-bold text-white text-xl mb-3 tracking-tight group-hover:text-gold transition-colors">{f.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">{f.desc}</p>
                  </div>
                </div>

                {/* Corner Glow */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
