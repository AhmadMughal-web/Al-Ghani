import "./Marquee.css";

const itemsEn = [
  { icon: "fa-leaf", text: "Unani Treatment" },
  { icon: "fa-seedling", text: "Herbal Medicines" },
  { icon: "fa-heart", text: "100% Natural" },
  { icon: "fa-leaf", text: "Digestive Care" },
  { icon: "fa-heart-pulse", text: "Heart Health" },
  { icon: "fa-wheat-awn", text: "Pure Herbs" },
  { icon: "fa-stethoscope", text: "Free Consultation" },
  { icon: "fa-staff-snake", text: "Expert Hakeem" },
];

const itemsUr = [
  { icon: "fa-leaf", text: "یونانی علاج" },
  { icon: "fa-seedling", text: "ہربل ادویات" },
  { icon: "fa-heart", text: "۱۰۰٪ قدرتی" },
  { icon: "fa-leaf", text: "معدے کا علاج" },
  { icon: "fa-heart-pulse", text: "دل کی صحت" },
  { icon: "fa-wheat-awn", text: "جڑی بوٹیاں" },
  { icon: "fa-stethoscope", text: "مفت مشورہ" },
  { icon: "fa-staff-snake", text: "تجربہ کار حکیم" },
];

export default function Marquee({ lang }) {
  const isUr = lang === "ur";
  const items = isUr ? itemsUr : itemsEn;
  const all = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i} className="marquee-item">
            <i className={`fas ${item.icon}`}></i> {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}