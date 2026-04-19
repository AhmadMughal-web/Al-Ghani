import "./Marquee.css";

const itemsEn = [
  "🌿 Unani Treatment", "🌱 Herbal Medicines", "💚 100% Natural",
  "🍃 Digestive Care", "🫀 Heart Health", "🌾 Pure Herbs",
  "🩺 Free Consultation", "⚕️ Expert Hakeem",
];

const itemsUr = [
  "🌿 یونانی علاج", "🌱 ہربل ادویات", "💚 ۱۰۰٪ قدرتی",
  "🍃 معدے کا علاج", "🫀 دل کی صحت", "🌾 جڑی بوٹیاں",
  "🩺 مفت مشورہ", "⚕️ تجربہ کار حکیم",
];

export default function Marquee({ lang }) {
  const isUr = lang === "ur";
  const items = isUr ? itemsUr : itemsEn;
  const all = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}