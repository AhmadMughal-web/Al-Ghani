import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Diseases from "./components/Diseases";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import "./styles.css";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [darkMode, setDarkMode]   = useState(false);
  const [lang, setLang]           = useState("en"); // default: english

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <Diseases lang={lang} />
      <Products lang={lang} />
      <WhyUs lang={lang} />
      <Testimonials lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <FloatingButtons />
    </div>
  );
}