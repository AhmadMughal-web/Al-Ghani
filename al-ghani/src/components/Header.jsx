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
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>📞 <a href="tel:+923270930991">+92-327-0930991</a></span>
            <span>✉️ <a href="mailto:hakeemwaheedahmadghani@gmail.com">info@hakeemwaheedahmadghani@gmail.com</a></span>
          </div>
          <div className="topbar-right">
            <span className="urdu-small">یونانی و ہربل طب</span>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://wa.me/923270930991" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" fill="white" width="22" height="22">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.79-1.867l-.486-.29-5.007 1.194 1.257-4.87-.317-.5A13.233 13.233 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.397-.2-2.35-1.16-2.715-1.29-.363-.133-.627-.2-.89.2-.267.397-1.03 1.29-1.26 1.557-.233.263-.463.297-.86.1-.397-.2-1.676-.618-3.192-1.97-1.18-1.053-1.976-2.353-2.207-2.75-.23-.397-.024-.61.174-.807.178-.177.397-.463.594-.694.2-.23.266-.397.4-.66.133-.267.066-.497-.034-.694-.1-.2-.89-2.147-1.22-2.94-.32-.77-.647-.667-.89-.68-.23-.01-.497-.013-.763-.013-.267 0-.694.1-1.057.497-.363.397-1.387 1.357-1.387 3.307s1.42 3.833 1.617 4.1c.2.263 2.797 4.273 6.776 5.99.947.41 1.686.653 2.263.836.95.303 1.816.26 2.5.158.763-.114 2.35-.96 2.68-1.887.333-.927.333-1.72.233-1.887-.097-.167-.363-.267-.76-.463z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

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
              📞 {isUr ? "ابھی مشورہ" : "Consult Now"}
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
            📞 {isUr ? "ابھی مشورہ کریں" : "Consult Now"}
          </button>
        </div>
      </header>
    </>
  );
}