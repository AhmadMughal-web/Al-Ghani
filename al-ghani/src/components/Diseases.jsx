import { useState } from "react";
import "./Diseases.css";

const diseases = [
  {
    img: "/images/Diabetes.jpeg",
    en: "Diabetes", ur: "ذیابیطس (شوگر)",
    desc: "Natural herbs regulate blood sugar levels effectively.",
    urDesc: "قدرتی جڑی بوٹیوں سے شوگر کو قابو میں رکھیں",
    treatment: "Karela, Methi, Jamun seeds — proven Unani formulas",
    treatmentUr: "کریلا، میتھی، جامن کے بیج",
    color: "#e74c3c",
  },
  {
    img: "/images/Heart & BP.webp",
    en: "Heart & BP", ur: "دل اور بلڈ پریشر",
    desc: "Herbal remedies to strengthen the heart and balance blood pressure.",
    urDesc: "دل کو مضبوط اور بلڈ پریشر کو متوازن کریں",
    treatment: "Arjuna, Garlic extract, Hawthorn",
    treatmentUr: "ارجنہ، لہسن کا عرق",
    color: "#e91e63",
  },
  {
    img: "/images/Joint & Bone Pain.jpg",
    en: "Joint & Bone Pain", ur: "جوڑوں کا درد",
    desc: "Relieve arthritis, knee pain, and swelling naturally.",
    urDesc: "گھٹنوں اور جوڑوں کے درد سے قدرتی نجات",
    treatment: "Suranjan, Kalonji oil, Shilajit",
    treatmentUr: "سورنجان، روغن کلونجی، شلاجیت",
    color: "#ff9800",
  },
  {
    img: "/images/Brain & Memory.avif",
    en: "Brain & Memory", ur: "دماغ اور یادداشت",
    desc: "Enhance memory, focus, and mental strength with Unani tonics.",
    urDesc: "یادداشت اور ذہنی قوت بڑھانے کے لیے قدرتی ٹانک",
    treatment: "Brahmi, Shankhpushpi, Mulethi",
    treatmentUr: "برہمی، شنکھ پشپی، ملیٹھی",
    color: "#9c27b0",
  },
  {
    img: "/images/Respiratory.avif",
    en: "Respiratory", ur: "سانس اور پھیپھڑے",
    desc: "Treat asthma, cough, and chest congestion naturally.",
    urDesc: "دمہ، کھانسی اور سینے کی تکلیف کا قدرتی علاج",
    treatment: "Mulethi, Adusa, Honey-ginger syrup",
    treatmentUr: "ملیٹھی، اڈوسا، شہد ادرک",
    color: "#2196f3",
  },
  {
    img: "/images/Digestive.png",
    en: "Digestive", ur: "معدے کی بیماریاں",
    desc: "Treat gastric ulcers, acidity, and digestive disorders.",
    urDesc: "معدے کی تکلیف، تیزابیت اور السر کا علاج",
    treatment: "Saunf, Ajwain, Isabgol",
    treatmentUr: "سونف، اجوائن، اسبغول",
    color: "#4caf50",
  },
  {
    img: "/images/Weight Issues.webp",
    en: "Weight Issues", ur: "موٹاپا و کمزوری",
    desc: "Natural weight management — lose or gain weight safely.",
    urDesc: "موٹاپا کم کریں یا وزن بڑھائیں قدرتی طریقے سے",
    treatment: "Garcinia, Green tea extract, Haritaki",
    treatmentUr: "گارسینیا، سبز چائے، ہریتکی",
    color: "#009688",
  },
  {
    img: "/images/Men's Health.jpg",
    en: "Men's Health", ur: "مردانہ صحت",
    desc: "Boost vitality, stamina, and overall men's wellness.",
    urDesc: "مردانہ قوت اور توانائی بڑھانے کے لیے ہربل ادویات",
    treatment: "Shilajit, Ashwagandha, Safed Musli",
    treatmentUr: "شلاجیت، اشواگندھا، سفید مسلی",
    color: "#795548",
  },
  {
    img: "/images/Women's Health.jpg",
    en: "Women's Health", ur: "خواتین کی صحت",
    desc: "Regulate hormones, treat PCOS, and improve women's wellness.",
    urDesc: "خواتین کی صحت اور ہارمون کا قدرتی علاج",
    treatment: "Shatavari, Lodhra, Rose water tonics",
    treatmentUr: "شتاوری، لودھرا، گلاب آب",
    color: "#f06292",
  },
  {
    img: "/images/Sleep & Anxiety.jpg",
    en: "Sleep & Anxiety", ur: "نیند اور پریشانی",
    desc: "Natural herbs for deep sleep and anxiety relief.",
    urDesc: "گہری نیند اور ذہنی سکون کے لیے قدرتی ادویات",
    treatment: "Valerian, Ashwagandha, Lavender",
    treatmentUr: "ویلیرین، اشواگندھا، لیونڈر",
    color: "#3f51b5",
  },
  {
    img: "/images/Skin & Hair.jpg",
    en: "Skin & Hair", ur: "جلد اور بال",
    desc: "Treat eczema, acne, hair fall with natural Unani remedies.",
    urDesc: "جلد کی بیماریاں اور بالوں کا قدرتی علاج",
    treatment: "Neem, Turmeric, Amla, Coconut oil",
    treatmentUr: "نیم، ہلدی، آملہ، ناریل تیل",
    color: "#ff5722",
  },
  {
    img: "/images/Kidney & Liver.jpg",
    en: "Kidney & Liver", ur: "گردے اور جگر",
    desc: "Detox and strengthen kidney and liver function naturally.",
    urDesc: "گردے اور جگر کو صاف اور مضبوط کریں",
    treatment: "Makoh, Kasni, Punarnava",
    treatmentUr: "مکوہ، کاسنی، پنرنوا",
    color: "#607d8b",
  },
];

export default function Diseases({ lang }) {
  const isUr = lang === "ur";
  const [hovered, setHovered] = useState(null);

  return (
    <section className="diseases" id="diseases" dir={isUr ? "rtl" : "ltr"}>
      <div className="section-title">
        <span className="tag">{isUr ? "علاج دستیاب" : "Treatments Available"}</span>
        <h2>{isUr ? "جن بیماریوں کا علاج ہوتا ہے" : "Diseases We Treat"}</h2>
        {isUr && <span className="urdu-sub urdu">قدرتی — یونانی — ہربل</span>}
        <div className="divider" />
        <p className="section-desc">
          {isUr
            ? "الغنی دواخانہ میں ہر بیماری کا علاج قدرتی جڑی بوٹیوں اور ماہر حکیم کے مشورے سے کیا جاتا ہے — کوئی سائیڈ ایفیکٹ نہیں، کوئی کیمیکل نہیں۔"
            : <>At Al Ghani Dawa Khana, every ailment is treated with time-tested Unani formulas, pure herbal ingredients, and expert Hakeem consultation — <strong>no side effects, no chemicals.</strong></>}
        </p>
      </div>

      <div className="diseases-grid">
        {diseases.map((d, i) => (
          <div
            key={d.en}
            className={`disease-card ${hovered === i ? "hovered" : ""}`}
            style={{ "--accent": d.color }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-icon">
              <img
                src={d.img}
                alt={d.en}
                className="disease-img"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=80&h=80&fit=crop"; }}
              />
            </div>
            <div className="card-body">
              <h3 className="card-en" style={{ fontFamily: isUr ? "'Noto Nastaliq Urdu', serif" : "" }}>
                {isUr ? d.ur : d.en}
              </h3>
              <p className="card-desc">{isUr ? d.urDesc : d.desc}</p>
              <div className="treatment-badge">
                <span>💊</span>
                <span>{isUr ? d.treatmentUr : d.treatment}</span>
              </div>
              <div className="card-footer">
                <span className="treated-here">
                  ✅ {isUr ? "یہاں علاج ہوتا ہے" : "Treated Here"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}