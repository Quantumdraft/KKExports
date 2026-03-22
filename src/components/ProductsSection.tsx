import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Layers, Ruler, Palette, Factory, Package, ShieldCheck, ArrowRight } from "lucide-react";
import mainYarnImg from "../assets/main_yarn.png";
import blendedYarnImg from "../assets/blended_yarn.png";
import specialtyYarnImg from "../assets/specialty_yarn.png";

interface YarnDetail {
  name: string;
  description: string;
  composition: string;
  counts: string;
  applications: string;
  features: string[];
}

const yarnDetails: Record<string, YarnDetail> = {
  "100% Cotton Yarns": {
    name: "100% Cotton Yarns",
    description: "Premium quality pure cotton yarns sourced from the finest cotton-growing regions, ideal for a wide range of textile applications.",
    composition: "100% Cotton",
    counts: "6s to 120s (Ne)",
    applications: "T-shirts, casual wear, knitted garments, home textiles, towels",
    features: ["Ring spun & compact", "Carded & combed options", "Multiple shade availability", "Export-grade quality"],
  },
  "100% GIZA, SUPIMA Yarns": {
    name: "100% GIZA, SUPIMA Yarns",
    description: "Ultra-premium extra-long staple cotton yarns known for exceptional softness, luster, and durability — the pinnacle of cotton quality.",
    composition: "100% GIZA / SUPIMA Cotton",
    counts: "40s to 120s (Ne)",
    applications: "Luxury apparel, premium shirts, fine bed linens, high-end fashion",
    features: ["Extra-long staple fiber", "Superior pilling resistance", "Luxurious hand feel", "Brilliant dye uptake"],
  },
  "100% Polyester Spun and Filament Yarns": {
    name: "100% Polyester Spun & Filament Yarns",
    description: "Versatile polyester yarns available in both spun and filament forms, offering excellent strength, consistency, and cost efficiency.",
    composition: "100% Polyester",
    counts: "20s to 60s (Ne) Spun; 75D to 300D Filament",
    applications: "Sportswear, workwear, home furnishings, industrial textiles",
    features: ["High tenacity", "Low shrinkage", "Excellent color fastness", "Moisture-wicking options"],
  },
  "100% Tencel Yarns": {
    name: "100% Tencel Yarns",
    description: "Sustainable lyocell fiber yarns with silky drape and natural moisture management, produced through eco-friendly closed-loop processes.",
    composition: "100% Tencel™ (Lyocell)",
    counts: "20s to 80s (Ne)",
    applications: "Premium fashion, activewear, intimates, denim",
    features: ["Sustainably produced", "Silky smooth texture", "Natural breathability", "Biodegradable"],
  },
  "100% Modal Yarns": {
    name: "100% Modal Yarns",
    description: "Beechwood-derived modal fiber yarns known for their incredible softness, drape, and resistance to shrinkage and fading.",
    composition: "100% Modal",
    counts: "20s to 60s (Ne)",
    applications: "Underwear, loungewear, T-shirts, bed sheets",
    features: ["Ultra-soft hand feel", "50% more absorbent than cotton", "Color retention", "Shrink resistant"],
  },
  "100% Viscose Yarns": {
    name: "100% Viscose Yarns",
    description: "Smooth and lustrous viscose rayon yarns that offer silk-like aesthetics at an accessible price point.",
    composition: "100% Viscose Rayon",
    counts: "20s to 60s (Ne)",
    applications: "Dresses, blouses, linings, casual wear",
    features: ["Silk-like luster", "Excellent drape", "Breathable", "Vibrant dye absorption"],
  },
  "100% Sorona Filament Yarns": {
    name: "100% Sorona Filament Yarns",
    description: "Bio-based DuPont™ Sorona® polymer yarns with inherent stretch recovery and a reduced carbon footprint.",
    composition: "100% Sorona® (PTT Polymer)",
    counts: "50D to 150D",
    applications: "Stretch fabrics, activewear, outerwear, hosiery",
    features: ["Bio-based polymer", "Inherent stretch", "Stain resistance", "Soft luxurious feel"],
  },
  "100% Bamboo Spun Yarns": {
    name: "100% Bamboo Spun Yarns",
    description: "Eco-friendly bamboo fiber yarns with natural antibacterial properties and a beautifully soft handle.",
    composition: "100% Bamboo Fiber",
    counts: "20s to 60s (Ne)",
    applications: "Baby wear, towels, socks, eco-fashion",
    features: ["Naturally antibacterial", "UV protective", "Biodegradable", "Thermo-regulating"],
  },
  "100% Linen Yarns": {
    name: "100% Linen Yarns",
    description: "Premium flax linen yarns prized for their natural texture, strength, and sophisticated aesthetic appeal.",
    composition: "100% Linen (Flax)",
    counts: "10s to 60s (Lea)",
    applications: "Suiting, shirting, home décor, table linens",
    features: ["Natural temperature regulation", "Gets softer with washing", "Highly durable", "Distinctive texture"],
  },
  "Contamination Free Yarns": {
    name: "Contamination Free Yarns",
    description: "Specially processed yarns with stringent contamination control, meeting the highest quality standards for sensitive applications.",
    composition: "Cotton / Blends",
    counts: "20s to 80s (Ne)",
    applications: "Premium garments, medical textiles, baby wear",
    features: ["Zero contamination guarantee", "UV-sorted fiber", "Metal detector tested", "Premium quality assurance"],
  },
  "CMIA Yarns": {
    name: "CMIA Yarns",
    description: "Cotton Made in Africa initiative yarns — sustainably sourced cotton supporting African farming communities.",
    composition: "100% CMIA Cotton",
    counts: "20s to 60s (Ne)",
    applications: "Sustainable fashion, eco-conscious brands, retail partnerships",
    features: ["Sustainably sourced", "Socially responsible", "Verified supply chain", "Environmental standards"],
  },
  "Cotton Lycra Core Spun Yarns": {
    name: "Cotton Lycra Core Spun Yarns",
    description: "Stretch cotton yarns with Lycra® core for superior shape retention and comfort in fitted garments.",
    composition: "Cotton + Lycra® (Spandex)",
    counts: "20s to 60s (Ne) with 20D–70D Lycra",
    applications: "Denim, leggings, fitted T-shirts, sportswear",
    features: ["Excellent stretch recovery", "Shape retention", "Comfortable fit", "Available in multiple ratios"],
  },
  "Polyester Lycra Air Covered Yarn": {
    name: "Polyester Lycra Air Covered Yarn",
    description: "Air-jet covered stretch yarns combining polyester strength with Lycra flexibility for performance fabrics.",
    composition: "Polyester + Lycra® (Spandex)",
    counts: "75D to 300D with 20D–40D Lycra",
    applications: "Athleisure, swimwear, compression garments, hosiery",
    features: ["Air-covered technology", "Uniform stretch", "High durability", "Smooth surface finish"],
  },
  // Blended
  "Cotton Blended Yarns": {
    name: "Cotton Blended Yarns",
    description: "Cotton-rich blended yarns combining the natural comfort of cotton with performance fibers for enhanced functionality.",
    composition: "Cotton + Polyester / Modal / Viscose / Tencel",
    counts: "16s to 80s (Ne)",
    applications: "Casual wear, uniforms, knitted fabrics, home textiles",
    features: ["Balanced performance", "Reduced shrinkage", "Cost-effective", "Custom blend ratios"],
  },
  "GIZA Blended Yarns": {
    name: "GIZA Blended Yarns",
    description: "Premium GIZA cotton blends offering luxury hand feel with the added benefits of performance fibers.",
    composition: "GIZA Cotton + Modal / Tencel / Silk",
    counts: "40s to 100s (Ne)",
    applications: "Premium shirts, luxury knitwear, high-end fashion",
    features: ["Luxury feel", "Enhanced durability", "Brilliant sheen", "Superior softness"],
  },
  "SUPIMA Blended Yarns": {
    name: "SUPIMA Blended Yarns",
    description: "SUPIMA extra-long staple blends delivering premium quality with versatile performance characteristics.",
    composition: "SUPIMA Cotton + Modal / Micro Modal",
    counts: "40s to 100s (Ne)",
    applications: "Designer apparel, fine knits, premium basics",
    features: ["Ultra-soft blends", "Pilling resistance", "Color longevity", "Premium positioning"],
  },
  "Polyester Blended Yarns": {
    name: "Polyester Blended Yarns",
    description: "Durable polyester blends engineered for strength, easy care, and consistent performance across applications.",
    composition: "Polyester + Cotton / Viscose / Modal",
    counts: "16s to 60s (Ne)",
    applications: "Workwear, sportswear, school uniforms, bedding",
    features: ["Wrinkle resistant", "Quick drying", "High strength", "Economical"],
  },
  "Tencel Blended Yarns": {
    name: "Tencel Blended Yarns",
    description: "Eco-friendly Tencel blends combining sustainability with exceptional comfort and drape.",
    composition: "Tencel + Cotton / Modal / Polyester",
    counts: "20s to 80s (Ne)",
    applications: "Sustainable fashion, premium basics, activewear",
    features: ["Eco-conscious", "Moisture management", "Smooth drape", "Gentle on skin"],
  },
  "Modal Blended Yarns": {
    name: "Modal Blended Yarns",
    description: "Modal-rich blends offering the ultimate in softness combined with practical performance attributes.",
    composition: "Modal + Cotton / Polyester / Spandex",
    counts: "20s to 60s (Ne)",
    applications: "Intimate wear, loungewear, premium T-shirts",
    features: ["Luxurious softness", "Breathable", "Shape retention", "Fade resistant"],
  },
  "Viscose Blended Yarns": {
    name: "Viscose Blended Yarns",
    description: "Flowing viscose blends with enhanced drape and luster, perfect for fashion-forward textiles.",
    composition: "Viscose + Cotton / Polyester / Nylon",
    counts: "20s to 60s (Ne)",
    applications: "Fashion wear, scarves, dress fabrics, linings",
    features: ["Beautiful drape", "Rich color depth", "Soft texture", "Versatile blending"],
  },
  "Sorona Blended Spun Yarns": {
    name: "Sorona Blended Spun Yarns",
    description: "Bio-based Sorona blends delivering natural stretch and comfort with sustainable credentials.",
    composition: "Sorona + Cotton / Polyester",
    counts: "20s to 40s (Ne)",
    applications: "Performance casual, stretch knits, eco-fashion",
    features: ["Bio-based stretch", "Renewable polymer", "Easy care", "Excellent recovery"],
  },
  "Bamboo Blended Yarns": {
    name: "Bamboo Blended Yarns",
    description: "Bamboo-cotton and bamboo-modal blends with natural antimicrobial properties and silky softness.",
    composition: "Bamboo + Cotton / Modal / Spandex",
    counts: "20s to 60s (Ne)",
    applications: "Baby clothing, eco-friendly fashion, activewear, socks",
    features: ["Antibacterial", "Moisture wicking", "Hypoallergenic", "Sustainable fiber"],
  },
  "Linen Blended Yarns": {
    name: "Linen Blended Yarns",
    description: "Linen-rich blends combining natural linen character with the softness and drapability of partner fibers.",
    composition: "Linen + Cotton / Viscose / Tencel",
    counts: "10s to 40s (Ne)",
    applications: "Summer wear, resort fashion, home furnishings",
    features: ["Natural cooling", "Textured aesthetic", "Durable", "Seasonless appeal"],
  },
  // Specialty
  "Recycled Polyester Yarn from PET in Filaments": {
    name: "Recycled Polyester Yarn (rPET)",
    description: "Sustainable filament yarns made from recycled PET bottles, offering environmental responsibility without compromising performance.",
    composition: "100% Recycled PET Polyester",
    counts: "75D to 300D",
    applications: "Sustainable fashion, outdoor wear, bags, upholstery",
    features: ["Made from recycled bottles", "GRS certified", "Reduces landfill waste", "Comparable to virgin polyester"],
  },
  "Slub Yarns": {
    name: "Slub Yarns",
    description: "Textured yarns with deliberately created thick-thin variations for unique fabric character and visual interest.",
    composition: "Cotton / Blended",
    counts: "10s to 40s (Ne)",
    applications: "Fashion denim, casual shirts, decorative fabrics",
    features: ["Unique texture", "Customizable slub patterns", "Fashion-forward", "Natural aesthetic"],
  },
  "TFO Yarns / RD / Elitwist": {
    name: "TFO / RD / Elitwist Yarns",
    description: "Two-for-one twisted and specialty twist yarns for superior fabric quality and performance.",
    composition: "Cotton / Polyester / Blends",
    counts: "20s to 80s (Ne)",
    applications: "Premium woven fabrics, shirting, suiting, technical textiles",
    features: ["Superior twist quality", "Higher strength", "Better fabric appearance", "Reduced hairiness"],
  },
  "High Twist Yarns": {
    name: "High Twist Yarns",
    description: "Specialty yarns with elevated twist levels for crisp fabric hand feel and crêpe-like textures.",
    composition: "Cotton / Polyester / Blends",
    counts: "40s to 100s (Ne)",
    applications: "Crêpe fabrics, voile, georgette, premium shirting",
    features: ["Crêpe effect possible", "Excellent drape", "Cool hand feel", "Reduced pilling"],
  },
  "Gas Mechanized Yarns": {
    name: "Gas Mechanized Yarns",
    description: "Gassed and mercerized yarns with enhanced luster, strength, and dye affinity for premium end-uses.",
    composition: "Cotton (Mercerized)",
    counts: "40s to 120s (Ne)",
    applications: "Luxury shirting, fine knits, embroidery threads",
    features: ["High luster finish", "Improved dye uptake", "Increased strength", "Silk-like appearance"],
  },
  "Paralleled Yarns": {
    name: "Paralleled Yarns",
    description: "Precision-aligned fiber yarns ensuring maximum uniformity and smoothness in the final fabric.",
    composition: "Cotton / Blends",
    counts: "30s to 80s (Ne)",
    applications: "Premium knitting, fine gauge fabrics, hosiery",
    features: ["Uniform fiber alignment", "Smooth surface", "Minimal defects", "Ideal for fine gauge"],
  },
  "Flax Multiply Yarns": {
    name: "Flax Multiply Yarns",
    description: "Multi-ply flax yarns offering robust strength and distinctive natural character for specialized textile uses.",
    composition: "100% Flax / Flax Blends",
    counts: "2-ply to 6-ply formats",
    applications: "Canvas, upholstery, industrial textiles, artisanal fabrics",
    features: ["Multi-ply construction", "High tensile strength", "Natural texture", "Durable performance"],
  },
};

const mainYarns = [
  "100% Cotton Yarns", "100% GIZA, SUPIMA Yarns", "100% Polyester Spun and Filament Yarns",
  "100% Tencel Yarns", "100% Modal Yarns", "100% Viscose Yarns",
  "100% Sorona Filament Yarns", "100% Bamboo Spun Yarns", "100% Linen Yarns",
  "Contamination Free Yarns", "CMIA Yarns", "Cotton Lycra Core Spun Yarns",
  "Polyester Lycra Air Covered Yarn",
];

const blendedYarns = [
  "Cotton Blended Yarns", "GIZA Blended Yarns", "SUPIMA Blended Yarns",
  "Polyester Blended Yarns", "Tencel Blended Yarns", "Modal Blended Yarns",
  "Viscose Blended Yarns", "Sorona Blended Spun Yarns", "Bamboo Blended Yarns",
  "Linen Blended Yarns",
];

const specialtyYarns = [
  "Recycled Polyester Yarn from PET in Filaments", "Slub Yarns", "TFO Yarns / RD / Elitwist",
  "High Twist Yarns", "Gas Mechanized Yarns", "Paralleled Yarns", "Flax Multiply Yarns",
];

const categories = [
  { title: "Main Yarn Categories", items: mainYarns, image: mainYarnImg, description: "Our foundation of excellence — the finest pure fibers for premium manufacturing." },
  { title: "Blended Yarn Categories", items: blendedYarns, image: blendedYarnImg, description: "Innovative combinations engineered for superior performance and exceptional hand feel." },
  { title: "Specialty Yarn Types", items: specialtyYarns, image: specialtyYarnImg, description: "Advanced textile solutions including sustainable rPET and artistic textured yarns." },
];

const tabs = ["All", "Main", "Blended", "Specialty"];

const ProductModal = ({ yarn, onClose }: { yarn: YarnDetail; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-foreground/60 backdrop-blur-md" />
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-card border border-gold/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto gold-shadow-2xl flex flex-col"
    >
      <div className="sticky top-0 bg-card/80 backdrop-blur-md border-b border-border/50 px-8 py-6 flex items-center justify-between z-10">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Premium Selection</p>
          <h3 className="font-serif font-bold text-2xl text-foreground pr-4 tracking-tight">{yarn.name}</h3>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 shrink-0"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-8 md:p-10 space-y-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gold/30 rounded-full" />
          <p className="text-muted-foreground text-base leading-relaxed italic font-light pl-4">"{yarn.description}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-champagne/30 border border-gold/10 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
              <Layers size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Composition</p>
              <p className="text-sm font-semibold text-foreground">{yarn.composition}</p>
            </div>
          </div>
          <div className="bg-champagne/30 border border-gold/10 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
              <Ruler size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Counts</p>
              <p className="text-sm font-semibold text-foreground">{yarn.counts}</p>
            </div>
          </div>
          <div className="bg-champagne/30 border border-gold/10 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
              <Factory size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Utility</p>
              <p className="text-sm font-semibold text-foreground">{yarn.applications}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px bg-gold/20 flex-grow" />
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold" />
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Excellence Standards</p>
            </div>
            <div className="h-px bg-gold/20 flex-grow" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {yarn.features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-cream/50 border border-border/30 rounded-xl px-4 py-3 group hover:border-gold/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0 shadow-[0_0_8px_hsl(38,70%,50%)]" />
                <span className="text-xs font-medium text-foreground tracking-wide">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="block w-full text-center gold-gradient text-primary-foreground py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all duration-300 gold-shadow-lg transform hover:-translate-y-1"
        >
          Express Interest & Enquire
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("All");
  const [selectedYarn, setSelectedYarn] = useState<YarnDetail | null>(null);

  const filtered = activeTab === "All"
    ? categories
    : categories.filter((c) => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <>
      <section id="products" className="section-padding bg-cream" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-semibold tracking-[0.15em] uppercase text-sm mb-3">Our Products</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive <span className="gold-gradient-text">Yarn Catalogue</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive range of premium yarns — sourced, tested, and export-ready for global textile markets. Click any product for detailed specifications.
            </p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === t
                    ? "gold-gradient text-primary-foreground gold-shadow"
                    : "bg-card border border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {filtered.map((cat, ci) => (
            <div key={cat.title} className="mb-24 last:mb-0">
              <div className={`flex flex-col ${ci % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                {/* Category Info & Image */}
                <motion.div 
                  initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:w-1/3 w-full"
                >
                  <div className="relative group overflow-hidden rounded-3xl mb-6 aspect-[4/5] gold-shadow-lg border border-gold/10">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="font-serif text-3xl font-bold text-white mb-3 tracking-tight">{cat.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed font-light">{cat.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Product Grid */}
                <div className="lg:w-2/3 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: ci * 0.1 + i * 0.05, duration: 0.5 }}
                        onClick={() => yarnDetails[item] && setSelectedYarn(yarnDetails[item])}
                        className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:border-gold/50 hover:bg-card/60 hover:gold-shadow transition-all duration-500 group cursor-pointer"
                      >
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 group-hover:scale-[1.5] transition-transform duration-500" />
                            <span className="text-[15px] font-semibold text-foreground group-hover:text-gold transition-colors duration-300 leading-tight">{item}</span>
                          </div>
                          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors">Specifications</span>
                            <ArrowRight size={14} className="text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedYarn && (
          <ProductModal yarn={selectedYarn} onClose={() => setSelectedYarn(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsSection;
