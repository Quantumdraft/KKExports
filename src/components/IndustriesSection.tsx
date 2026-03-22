import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, Factory, Home, Scissors, Bath, Sparkles, ShoppingBag } from "lucide-react";
import fashionImg from "@/assets/fashion_industry.png";
import manufacturingImg from "@/assets/manufacturing_industry.png";
import homeImg from "@/assets/home_industry.png";
import denimImg from "@/assets/denim_industry.png";
import towelsImg from "@/assets/towels_industry.png";
import fineKnitImg from "@/assets/fine_knit_industry.png";
import boutiqueImg from "@/assets/boutique_industry.png";

const industries = [
  { 
    img: fashionImg, 
    label: "Knitted Garments", 
    sub: "High-End Fashion & Global Apparel",
    icon: Shirt,
    size: "col-span-1"
  },
  { 
    img: manufacturingImg, 
    label: "Textile Manufacturing", 
    sub: "Precision Export-Grade Production",
    icon: Factory,
    size: "md:col-span-2"
  },
  { 
    img: homeImg, 
    label: "Home Textiles", 
    sub: "Luxury Linens & Bedding",
    icon: Home,
    size: "col-span-1"
  },
  { 
    img: denimImg, 
    label: "Denim & Indigo", 
    sub: "Premium Weaves & High-Tensile Fabrics",
    icon: Scissors,
    size: "col-span-1"
  },
  { 
    img: towelsImg, 
    label: "Towels & Terry", 
    sub: "Luxury Spa & Institutional Textiles",
    icon: Bath,
    size: "col-span-1"
  },
  { 
    img: fineKnitImg, 
    label: "Fine Knit Fabrics", 
    sub: "Superfine Micro-weaves for Boutique Apparel",
    icon: Sparkles,
    size: "col-span-1"
  },
  { 
    img: boutiqueImg, 
    label: "Fashion & Apparel", 
    sub: "Exclusive Retail & Designer Solutions",
    icon: ShoppingBag,
    size: "md:col-span-2"
  },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-[#faf9f6] relative overflow-hidden" ref={ref}>
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Sector Mastery</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Global Applications & <span className="gold-gradient-text">Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Supplying elite-grade yarn solutions to the world's most prestigious textile sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group h-[350px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl ${ind.size}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 transition-transform duration-[1500ms] ease-out group-hover:scale-110">
                <img 
                  src={ind.img} 
                  alt={ind.label} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-transparent to-transparent opacity-70 transition-opacity duration-700"></div>
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:scale-110 transition-all duration-500 shadow-lg">
                <ind.icon size={24} className="text-white group-hover:text-black transition-colors" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-2">
                   <div className="h-[1px] w-6 bg-gold rounded-full" />
                   <span className="text-[9px] font-black text-gold tracking-[0.3em] uppercase">Partner</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-gold transition-colors duration-300 drop-shadow-md">{ind.label}</h3>
                <p className="text-white/80 text-xs font-light leading-relaxed max-w-[280px] group-hover:text-white transition-colors duration-300">
                  {ind.sub}
                </p>
                
                <div className="mt-4 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold to-transparent transition-all duration-700 opacity-40"></div>
              </div>

              {/* Interaction Glow */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
