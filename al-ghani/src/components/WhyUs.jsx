import "./WhyUs.css";

const features = [
  { icon: "🌿", en: "100% Pure Herbs",     ur: "خالص جڑی بوٹیاں",       descEn: "No artificial chemicals, no fillers. Only pure, natural ingredients sourced directly from trusted farms.", descUr: "کوئی مصنوعی کیمیکل نہیں، صرف خالص قدرتی اجزاء۔" },
  { icon: "👨‍⚕️", en: "Expert Hakeem",    ur: "ماہر حکیم",               descEn: "Our certified Unani doctors have decades of clinical experience treating thousands of patients.", descUr: "ہمارے تجربہ کار یونانی حکیم ہزاروں مریضوں کا علاج کر چکے ہیں۔" },
  { icon: "✅", en: "Tested & Certified",   ur: "جانچا اور تصدیق شدہ",   descEn: "All medicines are quality-tested and prepared according to traditional Unani pharmacopoeia standards.", descUr: "تمام ادویات یونانی معیار کے مطابق جانچی اور تیار کی گئی ہیں۔" },
  { icon: "💰", en: "Affordable Prices",    ur: "سستی قیمتیں",            descEn: "High-quality herbal treatment accessible to everyone — no compromise on quality or affordability.", descUr: "اعلیٰ معیار کا ہربل علاج سب کی پہنچ میں۔" },
  { icon: "📦", en: "Home Delivery",        ur: "گھر پر ڈیلیوری",         descEn: "Order from anywhere in Pakistan. Fast, secure, and discreet home delivery nationwide.", descUr: "پاکستان بھر میں تیز، محفوظ اور گھر پر ڈیلیوری۔" },
  { icon: "🕐", en: "25+ Years Trust",      ur: "۲۵ سال کا اعتماد",       descEn: "Serving Lahore and Pakistan since 1999 with thousands of satisfied patients.", descUr: "۱۹۹۹ سے لاہور اور پاکستان کی خدمت میں — ہزاروں مطمئن مریض۔" },
];

export default function WhyUs({ lang }) {
  const isUr = lang === "ur";

  return (
    <section className="whyus" id="about" dir={isUr ? "rtl" : "ltr"}>
      <div className="whyus-inner">
        <div className="whyus-text">
          <span className="tag">
            {isUr ? "ہمیں کیوں چنیں" : "Why Choose Us"}
          </span>
          <h2 className="whyus-title">
            {isUr
              ? "قدرت سے شفا، روایت سے رہنمائی"
              : <>Healing With Nature,<br />Guided by Tradition</>}
          </h2>
          <p className="whyus-desc">
            {isUr
              ? "الغنی دواخانہ لاہور کا سب سے قابل اعتماد یونانی دواخانہ ہے۔ ہم ۲۵ سال سے یونانی، ہربل اور طب نبوی کے اصولوں پر عمل کرتے ہوئے محفوظ، مؤثر اور سستا علاج فراہم کر رہے ہیں۔"
              : "Al Ghani Dawa Khana is Lahore's most trusted Unani medicine center. For over 25 years, we have been providing safe, effective, and affordable herbal treatments — rooted in the ancient wisdom of Unani, Ayurvedic, and Tib-e-Nabawi medicine."}
          </p>
          <div className="cert-badges">
            <span>🏅 {isUr ? "یونانی سند یافتہ" : "Unani Certified"}</span>
            <span>🌿 {isUr ? "جی ایم پی معیار" : "GMP Compliant"}</span>
            <span>✅ {isUr ? "آئی ایس او معیار" : "ISO Standards"}</span>
          </div>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.en}>
              <span className="feature-icon">{f.icon}</span>
              <div>
                <h3 className="feature-title">{isUr ? f.ur : f.en}</h3>
                <p className="feature-desc">{isUr ? f.descUr : f.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}