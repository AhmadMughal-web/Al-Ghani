import "./Hero.css";

const herbs = [
  {
    img: "/images/Ashwagandha.webp",
    name: "Ashwagandha",
    urdu: "اشواگندھا"
  },
  {
    img: "/images/Senna.jpg",
    name: "Senna",
    urdu: "سنا"
  },
  {
    img: "/images/neem.avif",
    name: "Neem",
    urdu: "نیم"
  },
  {
    img: "/images/Tukhm-e-Kasni.png",
    name: "Tukhm-e-Kasni",
    urdu: "تخم کاسنی"
  },
  {
    img: "/images/Ajwain.avif",
    name: "Ajwain",
    urdu: "اجوائن"
  },
  {
    img: "/images/Gul-e-Gaozaban.jpg",
    name: "Gul-e-Gaozaban",
    urdu: "گل گاوزبان"
  },
];

const CARD = 100;
const R = 160;
const WRAP = 420;

export default function Hero({ lang }) {
  const isUr = lang === "ur";

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="circle c1" />
        <div className="circle c2" />
        <div className="leaf-pattern" />
      </div>

      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <span>🌿</span>
            <span>
              {isUr
                ? "خالص جڑی بوٹیاں — ۱۰۰٪ قدرتی"
                : "100% Natural Herbal Medicines — خالص جڑی بوٹیاں"}
            </span>
          </div>

          <h1 className="hero-title-ur urdu">
            قدرتی علاج، <br />
            <span className="highlight">صحت مند زندگی</span>
          </h1>

          {!isUr && (
            <h2 className="hero-title-en">
              Ancient Wisdom,<br /><em>Modern Healing</em>
            </h2>
          )}

          {!isUr && (
            <p className="hero-desc">
              Al Ghani Dawa Khana — Lahore's trusted Unani & Herbal medicine
              center. Treating ailments naturally for over{" "}
              <strong>25 years</strong> with time-tested remedies and expert
              Hakeem consultation.
            </p>
          )}

          <p className="hero-desc-ur urdu">
            {isUr
              ? "الغنی دواخانہ — لاہور کا سب سے قابل اعتماد یونانی و ہربل دواخانہ۔ ۲۵ سال سے زائد کا تجربہ اور ہزاروں مطمئن مریض۔"
              : "الغنی دواخانہ — یونانی اور ہربل ادویات میں ۲۵ سال سے زائد کا تجربہ"}
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              📞 {isUr ? "مفت مشورہ کریں" : "Free Consultation — مفت مشورہ"}
            </a>
            <a href="#diseases" className="btn-outline-hero">
              {isUr ? "علاج دیکھیں ←" : "View Treatments →"}
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">25+</span>
              <span className="stat-label">
                {isUr ? (
                  <span className="urdu">سال تجربہ</span>
                ) : (
                  <>Years<br /><span className="urdu">سال تجربہ</span></>
                )}
              </span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">10K+</span>
              <span className="stat-label">
                {isUr ? (
                  <span className="urdu">مریض</span>
                ) : (
                  <>Patients<br /><span className="urdu">مریض</span></>
                )}
              </span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">
                {isUr ? (
                  <span className="urdu">ادویات</span>
                ) : (
                  <>Medicines<br /><span className="urdu">ادویات</span></>
                )}
              </span>
            </div>
          </div>
          <div className="hakeem-box">
            <div className="hakeem-avatar">👨‍⚕️</div>
            <div className="hakeem-info">
              <span className="hakeem-title">
                {isUr ? "ماہر حکیم" : "Expert Hakeem"}
              </span>
              <span className="hakeem-name">
                {isUr ? "وحید احمد" : "Waheed Ahmad"}
              </span>
              <span className="hakeem-exp">
                {isUr ? "یونانی و ہربل — ۲۵ سال تجربہ" : "25 Years Experience — Unani & Herbal"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Herb Orbit */}
        <div className="hero-visual">
          <div className="herb-circle-wrapper">
            
            <div className="center-logo">
              <div className="center-icon">🌿</div>
              <div className="center-text urdu">الغنی</div>
            </div>
            {herbs.map((h, i) => {
              const deg = (360 / herbs.length) * i - 90;
              const rad = (deg * Math.PI) / 180;
              const left = WRAP / 2 + R * Math.cos(rad) - CARD / 2;
              const top = WRAP / 2 + R * Math.sin(rad) - CARD / 2;
              const delay = 0;
              return (
                <div
                  key={h.name}
                  className="herb-card"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    transformOrigin: `${WRAP / 2 - left}px ${WRAP / 2 - top}px`,
                    animation: `cardOrbit 18s linear infinite`,
                    animationDelay: `0s`,
                  }}
                >
                  <div
                    className="herb-card-inner"
                    style={{
                      animation: `cardCounter 18s linear infinite`,
                    }}  
                  >
                    <img
                      src={h.img}
                      alt={h.name}
                      className="herb-img"
                    />
                    <span className="herb-name">
                      {isUr ? h.urdu : h.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}