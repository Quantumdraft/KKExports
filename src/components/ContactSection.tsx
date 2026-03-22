import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "918438809864";
    const text = `*New Business Enquiry - KK Exports*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company || "N/A"}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      `*Country:* ${formData.country || "N/A"}\n` +
      `*Product:* ${formData.product || "N/A"}\n` +
      `*Message:* ${formData.message || "N/A"}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold tracking-[0.15em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Global Business <span className="gold-gradient-text">Enquiry</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-cream border border-border rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Name *</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Company Name</label>
                <input name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Country</label>
                <input name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Product Requirement</label>
                <select 
                  name="product" 
                  value={formData.product} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                >
                  <option value="">Select Category</option>
                  <optgroup label="Main Yarn Categories">
                    <option value="100% Cotton Yarns">100% Cotton Yarns</option>
                    <option value="100% GIZA, SUPIMA Yarns">100% GIZA, SUPIMA Yarns</option>
                    <option value="100% Polyester Spun and Filament Yarns">100% Polyester Spun and Filament Yarns</option>
                    <option value="100% Tencel Yarns">100% Tencel Yarns</option>
                    <option value="100% Modal Yarns">100% Modal Yarns</option>
                    <option value="100% Viscose Yarns">100% Viscose Yarns</option>
                    <option value="100% Sorona Filament Yarns">100% Sorona Filament Yarns</option>
                    <option value="100% Bamboo Spun Yarns">100% Bamboo Spun Yarns</option>
                    <option value="100% Linen Yarns">100% Linen Yarns</option>
                    <option value="Contamination Free Yarns">Contamination Free Yarns</option>
                    <option value="CMIA Yarns">CMIA Yarns</option>
                    <option value="Cotton Lycra Core Spun Yarns">Cotton Lycra Core Spun Yarns</option>
                    <option value="Polyester Lycra Air Covered Yarn">Polyester Lycra Air Covered Yarn</option>
                  </optgroup>
                  <optgroup label="Blended Yarn Categories">
                    <option value="Cotton Blended Yarns">Cotton Blended Yarns</option>
                    <option value="GIZA Blended Yarns">GIZA Blended Yarns</option>
                    <option value="SUPIMA Blended Yarns">SUPIMA Blended Yarns</option>
                    <option value="Polyester Blended Yarns">Polyester Blended Yarns</option>
                    <option value="Tencel Blended Yarns">Tencel Blended Yarns</option>
                    <option value="Modal Blended Yarns">Modal Blended Yarns</option>
                    <option value="Viscose Blended Yarns">Viscose Blended Yarns</option>
                    <option value="Sorona Blended Spun Yarns">Sorona Blended Spun Yarns</option>
                    <option value="Bamboo Blended Yarns">Bamboo Blended Yarns</option>
                    <option value="Linen Blended Yarns">Linen Blended Yarns</option>
                  </optgroup>
                  <optgroup label="Specialty Yarn Types">
                    <option value="Recycled Polyester Yarn (rPET)">Recycled Polyester Yarn (rPET)</option>
                    <option value="Slub Yarns">Slub Yarns</option>
                    <option value="TFO / RD / Elitwist Yarns">TFO / RD / Elitwist Yarns</option>
                    <option value="High Twist Yarns">High Twist Yarns</option>
                    <option value="Gas Mechanized Yarns">Gas Mechanized Yarns</option>
                    <option value="Paralleled Yarns">Paralleled Yarns</option>
                    <option value="Flax Multiply Yarns">Flax Multiply Yarns</option>
                  </optgroup>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none" />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity gold-shadow text-base"
            >
              {submitted ? "✓ Enquiry Sent!" : "Submit Enquiry"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-cream border border-border rounded-2xl p-6 space-y-5">
              <h3 className="font-serif font-bold text-foreground text-lg">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:exports@kktraders.com" className="text-sm font-medium text-foreground hover:text-gold transition-colors">exports@kktraders.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:+918438809864" className="text-sm font-medium text-foreground hover:text-gold transition-colors">+91 84388 09864</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-sm font-medium text-foreground">+91 84388 09864</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Office</p>
                    <p className="text-sm font-medium text-foreground">No - 100 E, Balaji Nagar 2, V V School Opp,<br />Dharapuram Road, Muthanampalayam,<br />Tiruppur, Tamil Nadu - 641606</p>
                    <div className="mt-3 inline-block bg-gold/10 border border-gold/20 px-3 py-1 rounded-md">
                      <p className="text-xs text-gold font-bold tracking-wider">GST: 33QSTPK3941K1ZV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-champagne border border-border rounded-2xl p-6 text-center">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Export Enquiry</p>
              <p className="text-muted-foreground text-sm">We typically respond to business enquiries within 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
