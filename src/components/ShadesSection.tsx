import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const shadeGroups = [
  {
    title: "Timeless Neutrals",
    description: "Essential foundation shades for versatile manufacturing.",
    shades: [
      { id: 1, name: "Black", color: "#1a1a1a" },
      { id: 4, name: "Steel Gray", color: "#71797e" },
      { id: 6, name: "Light Grey", color: "#c4c4c4" },
      { id: 7, name: "Super White", color: "#ffffff" },
      { id: 8, name: "Optical White", color: "#f8f8ff" },
      { id: 9, name: "Off White", color: "#faf0e6" },
      { id: 14, name: "Biscuit", color: "#d4a76a" },
    ]
  },
  {
    title: "Warm Earth Tones",
    description: "Rich hued tones inspired by natural organic elements.",
    shades: [
      { id: 3, name: "Coffee", color: "#6f4e37" },
      { id: 5, name: "Nut Brown", color: "#7b3f00" },
      { id: 10, name: "Red", color: "#d32f2f" },
      { id: 11, name: "Maroon", color: "#800000" },
      { id: 12, name: "Bright Rust", color: "#c65d07" },
      { id: 15, name: "Fanta Orange", color: "#ff6f00" },
      { id: 16, name: "Lemon Yellow", color: "#fff44f" },
      { id: 17, name: "Golden Yellow", color: "#ffdf00" },
      { id: 13, name: "Peach", color: "#ffcba4" },
    ]
  },
  {
    title: "Nature's Verdant",
    description: "A spectrum of greens from delicate pista to deep forest hues.",
    shades: [
      { id: 18, name: "Pista Green", color: "#93c572" },
      { id: 19, name: "Apple Green", color: "#8db600" },
      { id: 20, name: "Emerald Green", color: "#50c878" },
      { id: 21, name: "Bottle Green", color: "#006a4e" },
      { id: 22, name: "Mehndi Green", color: "#6a6e3a" },
      { id: 23, name: "Peacock Green", color: "#006d6f" },
      { id: 26, name: "Water Green", color: "#7bc8a4" },
      { id: 27, name: "Shakuntla Green", color: "#4f9e81" },
    ]
  },
  {
    title: "Deep Sea & Sky",
    description: "Calming blues and oceanic tones for sophisticated textiles.",
    shades: [
      { id: 2, name: "Navy", color: "#1b2a4a" },
      { id: 24, name: "Ice Blue", color: "#99e0e0" },
      { id: 25, name: "Sky Blue", color: "#87ceeb" },
      { id: 28, name: "Turquoise Blue", color: "#40e0d0" },
      { id: 29, name: "Royal Blue", color: "#4169e1" },
      { id: 41, name: "Water Blue", color: "#69b4d1" },
    ]
  },
  {
    title: "Royal Florals",
    description: "Vibrant pinks, purples, and magentas for bold expressions.",
    shades: [
      { id: 30, name: "Violet", color: "#7f00ff" },
      { id: 31, name: "Lavander", color: "#b57edc" },
      { id: 32, name: "Rani", color: "#d63384" },
      { id: 33, name: "Rose Pink", color: "#f4a7bb" },
      { id: 34, name: "Baby Pink", color: "#f4c2c2" },
      { id: 35, name: "Tomato Red", color: "#ff6347" },
      { id: 36, name: "Magenta", color: "#ff00ff" },
    ]
  }
];

const ShadesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(shadeGroups[0].title);

  const needsDarkText = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  };

  const activeGroup = shadeGroups.find(g => g.title === activeTab) || shadeGroups[0];

  return (
    <section id="shades" className="section-padding bg-[#faf9f6] relative overflow-hidden" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <p className="text-gold font-bold tracking-[0.25em] uppercase text-[10px]">Master Palette</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Our <span className="gold-gradient-text">Signature</span> Shades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A curated spectrum of export-grade premium shades.
          </p>
        </motion.div>

        {/* Tabbed Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {shadeGroups.map((group) => (
            <button
              key={group.title}
              onClick={() => setActiveTab(group.title)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === group.title
                  ? "bg-gold text-white border-gold shadow-lg shadow-gold/20"
                  : "bg-white text-muted-foreground border-border hover:border-gold/50 hover:text-gold"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gold/20 pb-8">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">{activeGroup.title}</h3>
                  <p className="text-muted-foreground text-sm font-light max-w-xl mx-auto md:mx-0">{activeGroup.description}</p>
                </div>
                <div className="hidden md:flex flex-col items-end">
                   <div className="h-0.5 w-12 bg-gold/30 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                {activeGroup.shades.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    className="group"
                  >
                    <div className="relative aspect-square rounded-2xl p-1.5 bg-white shadow-sm border border-border/40 group-hover:border-gold/50 group-hover:gold-shadow-lg transition-all duration-700 overflow-hidden cursor-crosshair">
                      <div 
                        className="w-full h-full rounded-[14px] shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundColor: s.color }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/10 opacity-60" />
                        
                        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <span className={`text-[9px] font-black ${needsDarkText(s.color) ? 'text-black/60' : 'text-white/80'}`}>{s.id}</span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 py-2 flex flex-col items-center justify-center">
                           <span className="text-[11px] font-bold text-foreground tracking-tight px-2 truncate w-full text-center">{s.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-center group-hover:translate-y-1 transition-transform duration-500">
                      <p className="text-[11px] font-bold text-foreground tracking-wide group-hover:text-gold transition-colors duration-300 truncate">{s.name}</p>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold opacity-40 group-hover:opacity-100 transition-all duration-300 mt-1">Shade {s.id}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShadesSection;
