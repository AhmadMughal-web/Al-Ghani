import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Muhammad Tariq", city: "Lahore", stars: 5,
    textEn: "Al Ghani Dawa Khana solved my diabetes problem in 3 months. I was on insulin for 10 years. Hakeem sahab is amazing!",
    textUr: "الغنی دواخانہ نے میری شوگر کا مسئلہ ۳ مہینے میں حل کر دیا۔ ۱۰ سال سے انسولین لے رہا تھا۔ حکیم صاحب کا بہت شکریہ!",
  },
  {
    name: "Mrs. Rukhsana Bibi", city: "Faisalabad", stars: 5,
    textEn: "I had joint pain for 5 years. Just 2 months of medicine gave great relief. 100% natural, no side effects!",
    textUr: "۵ سال سے جوڑوں کے درد میں تھی۔ صرف ۲ مہینے کی دوائی سے بہت افاقہ ہوا۔ ۱۰۰٪ قدرتی، کوئی سائیڈ ایفیکٹ نہیں!",
  },
  {
    name: "Imran Hussain", city: "Karachi", stars: 5,
    textEn: "Ordered online and delivery came in 3 days. Medicine quality is excellent. Highly recommended!",
    textUr: "آن لائن آرڈر کیا اور ۳ دن میں ڈیلیوری آ گئی۔ دوائی کا معیار بہت اعلیٰ ہے۔ ہر ایک کو تجویز کرتا ہوں!",
  },
  {
    name: "Dr. Ayesha Naz", city: "Islamabad", stars: 5,
    textEn: "As a medical professional, I appreciate their authentic Unani formulations. The quality and purity is outstanding.",
    textUr: "ایک طبی ماہر کی حیثیت سے میں ان کے اصل یونانی فارمولوں کو سراہتی ہوں۔ معیار اور خلوص بے مثال ہے۔",
  },
];

export default function Testimonials({ lang }) {
  const isUr = lang === "ur";
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="testimonials" dir={isUr ? "rtl" : "ltr"}>
      <div className="section-title">
        <span className="tag">{isUr ? "مریضوں کی رائے" : "Patient Reviews"}</span>
        <h2>{isUr ? "ہمارے مریض کیا کہتے ہیں" : "What Our Patients Say"}</h2>
        <div className="divider" />
      </div>

      <div className="testi-wrapper">
        <div className="testi-card">
          <div className="stars">{"⭐".repeat(t.stars)}</div>
          <blockquote className="testi-text">
            "{isUr ? t.textUr : t.textEn}"
          </blockquote>
          <div className="testi-author">
            <div className="author-avatar">{t.name[0]}</div>
            <div>
              <strong>{t.name}</strong>
              <span>{t.city}</span>
            </div>
          </div>
        </div>
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <div className="testi-mini">
        {testimonials.map((t2, i) => (
          <button
            key={i}
            className={`mini-card ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="mini-avatar">{t2.name[0]}</div>
            <div>
              <strong>{t2.name}</strong>
              <span>{t2.city}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}