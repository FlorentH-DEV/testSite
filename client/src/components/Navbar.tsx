/**
 * DESIGN: "Chalet Alpin Moderne" — Navigation sticky avec ancres de section
 * Palette: Sable, Vert sapin, Brun châtaigne
 * Comportement: Highlight de la section active au scroll, menu hamburger mobile
 */
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

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

      const sections = navItems.map((item) => document.getElementById(item.id));
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250, 247, 242, 0.95)"
          : "rgba(250, 247, 242, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid oklch(0.88 0.012 75)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px oklch(0.22 0.02 55 / 0.08)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("bienvenue")}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-105"
              style={{ background: "oklch(0.32 0.08 145)" }}
            >
              <Home size={15} color="white" />
            </div>
            <span
              className="font-bold text-base leading-tight hidden sm:block"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "oklch(0.22 0.02 55)",
              }}
            >
              Chalet MCS
              <span
                className="block text-xs font-normal"
                style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Anglès, Tarn
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link pb-1 ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact button */}
          <a
            href="tel:+33675489914"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "oklch(0.32 0.08 145)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            📞 Claudie
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "oklch(0.32 0.08 145)" }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(250, 247, 242, 0.98)",
            borderColor: "oklch(0.88 0.012 75)",
          }}
        >
          <div className="container py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color:
                    activeSection === item.id
                      ? "oklch(0.32 0.08 145)"
                      : "oklch(0.35 0.03 55)",
                  background:
                    activeSection === item.id
                      ? "oklch(0.32 0.08 145 / 0.08)"
                      : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+33675489914"
              className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{
                background: "oklch(0.32 0.08 145)",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              📞 Appeler Claudie : +33 6 75 48 99 14
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
