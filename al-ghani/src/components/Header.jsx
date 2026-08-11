import { useState, useEffect } from "react";
import "./Header.css";

const navLinks = [
  { id: "home", en: "Home", ur: "ہوم" },
  { id: "diseases", en: "Treatments", ur: "علاج" },
  { id: "products", en: "Products", ur: "ادویات" },
  { id: "about", en: "About Us", ur: "ہمارے بارے میں" },
  { id: "contact", en: "Contact", ur: "رابطہ" },
];

export default function Header({ activeNav, setActiveNav, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isUr = lang === "ur";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
     

      {/* Main Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <div className="logo" onClick={() => go("home")}>
            <div className="logo-icon">🌿</div>
            <div className="logo-text">
              {isUr ? (
                <>
                  <span className="logo-arabic">الغنی دواخانہ</span>
                  <span className="logo-tagline-ur">یونانی · ہربل · طب نبوی</span>
                </>
              ) : (
                <>
                  <span className="logo-en">AL GHANI DAWA KHANA</span>
                  <span className="logo-tagline">Unani · Herbal · Tib-e-Nabawi</span>
                </>
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link ${activeNav === link.id ? "active" : ""}`}
                onClick={() => go(link.id)}
              >
                <span className="nav-en">{isUr ? link.ur : link.en}</span>
              </button>
            ))}

            {/* Toggle Buttons */}
            <div className="toggles">
              {/* Language Toggle */}
              <div className="lang-toggle">
                <button
                  className={`lang-btn ${!isUr ? "active" : ""}`}
                  onClick={() => setLang("en")}
                >EN</button>
                <button
                  className={`lang-btn ${isUr ? "active" : ""}`}
                  onClick={() => setLang("ur")}
                >اردو</button>
              </div>

            </div>

            <button className="nav-cta btn-primary" onClick={() => go("contact")}>
              <i className="fas fa-phone"></i> {isUr ? "ابھی مشورہ" : "Consult Now"}
            </button>
          </nav>

          {/* Hamburger */}
          <div className="header-right-mobile">
            <div className="toggles">
              <div className="lang-toggle">
                <button className={`lang-btn ${!isUr ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
                <button className={`lang-btn ${isUr ? "active" : ""}`} onClick={() => setLang("ur")}>اردو</button>
              </div>

            </div>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <button key={link.id} className="mobile-link" onClick={() => go(link.id)}>
              <span>{isUr ? link.ur : link.en}</span>
            </button>
          ))}
          <button className="btn-primary mobile-cta" onClick={() => go("contact")}>
            <i className="fas fa-phone"></i> {isUr ? "ابھی مشورہ کریں" : "Consult Now"}
          </button>
        </div>
      </header>
    </>
  );
}