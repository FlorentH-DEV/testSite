import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import '../../css/navbar.css'

const navItems = [
  { id: "bienvenue", label: "Bienvenue" },
  { id: "arrivee", label: "Arrivée" },
  { id: "equipements", label: "Équipements" },
  { id: "adresses", label: "Adresses" },
  { id: "decouvrir", label: "À découvrir" },
  { id: "depart", label: "Départ" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("bienvenue");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar__inner">

          {/* Logo */}
          <button className="logo" onClick={() => scrollTo("bienvenue")}>
            <div className="logo__icon">
              <Home size={15} color="white" />
            </div>

            <span className="logo__text">
              Chalet MCS
              <span className="logo__sub">Anglès, Tarn</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="nav desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav__link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <a href="tel:+33675489914" className="contact">
            📞 Claudie
          </a>

          {/* Mobile menu button */}
          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile">
          <div className="container mobile__inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`mobile__link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            <a href="tel:+33675489914" className="mobile__contact">
              📞 Appeler Claudie : +33 6 75 48 99 14
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}