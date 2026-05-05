import logo from "../assets/logo.png";

const productLinks = [
  "Main Yarns", "Blended Yarns", "Specialty Yarns",
];
const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Shades", href: "#shades" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-cream">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src={logo}
            alt="KK Exports"
            className="h-24 md:h-32 w-auto mb-6 object-contain brightness-110 contrast-110 drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-sm opacity-70 leading-relaxed mb-4">
            Premium yarn export company delivering quality, consistency, and reliability to global textile markets.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm opacity-70 hover:opacity-100 hover:text-gold-light transition-all">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">Products</h4>
          <ul className="space-y-2">
            {productLinks.map((p) => (
              <li key={p}>
                <a href="#products" className="text-sm opacity-70 hover:text-gold transition-all duration-300">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">Contact</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p><a href="mailto:exports@kktraders.com" className="hover:text-gold transition-colors">Exports03@kkexports.com</a></p>
            <p><a href="tel:+918438809864" className="hover:text-gold transition-colors">+91 84388 09864</a></p>
            <p>No - 100 E, Balaji Nagar 2, V V School Opp,<br />Dharapuram Road, Muthanampalayam,<br />Tiruppur, Tamil Nadu - 641606</p>
            <p className="text-xs mt-2 text-white font-bold opacity-70 tracking-wide">GST NO: 33QSTPK3941K1ZV</p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 mt-12 pt-8 text-center">
        <p className="text-xs opacity-50">© {new Date().getFullYear()} KK Exports. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
