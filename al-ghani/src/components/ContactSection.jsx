import { useState } from "react";
import "./ContactSection.css";

export default function ContactSection({ lang }) {
  const isUr = lang === "ur";
  const [form, setForm] = useState({ name: "", phone: "", email: "", disease: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const diseases = isUr
    ? ["ذیابیطس", "جوڑوں کا درد", "دل و بلڈ پریشر", "معدہ", "مردانہ صحت", "خواتین کی صحت", "دماغ و یادداشت", "جلد و بال", "دیگر"]
    : ["Diabetes", "Joint Pain", "Heart & BP", "Digestive Issues", "Men's Health", "Women's Health", "Brain & Memory", "Skin & Hair", "Other"];

  return (
    <section className="contact" id="contact" dir={isUr ? "rtl" : "ltr"}>
      <div className="section-title">
        <span className="tag">{isUr ? "رابطہ کریں" : "Get In Touch"}</span>
        <h2>{isUr ? "مفت مشورہ بک کریں" : "Book Free Consultation"}</h2>
        <div className="divider" />
      </div>

      <div className="contact-inner">
        {/* Info */}
        <div className="contact-info">
          <h3>{isUr ? "الغنی دواخانہ" : "Al Ghani Dawa Khana"}</h3>
          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>{isUr ? "پتہ" : "Address"}</strong>
                <p>{isUr ? "آپ کا پتہ یہاں، لاہور، پاکستان" : "[Your Address], Lahore, Pakistan"}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>{isUr ? "فون / واٹس ایپ" : "Phone / WhatsApp"}</strong>
                <p><a href="tel:+923270930991">+92-327-0930991</a></p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>{isUr ? "ای میل" : "Email"}</strong>
                <p><a href="mailto:mailto:hakeemwaheedahmadghani@gmail.com">info@mailto:hakeemwaheedahmadghani@gmail.com</a></p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <strong>{isUr ? "اوقات" : "Hours"}</strong>
                <p>{isUr ? "پیر تا ہفتہ: صبح ۹ — شام ۸" : "Mon–Sat: 9:00 AM – 8:00 PM"}</p>
                <p>{isUr ? "اتوار: صبح ۱۰ — دوپہر ۳" : "Sunday: 10:00 AM – 3:00 PM"}</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="social-btn fb">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              Facebook
            </a>
            <a href="https://wa.me/923270930991" target="_blank" rel="noreferrer" className="social-btn wa">
              <svg viewBox="0 0 32 32" fill="white" width="22" height="22">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.79-1.867l-.486-.29-5.007 1.194 1.257-4.87-.317-.5A13.233 13.233 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.397-.2-2.35-1.16-2.715-1.29-.363-.133-.627-.2-.89.2-.267.397-1.03 1.29-1.26 1.557-.233.263-.463.297-.86.1-.397-.2-1.676-.618-3.192-1.97-1.18-1.053-1.976-2.353-2.207-2.75-.23-.397-.024-.61.174-.807.178-.177.397-.463.594-.694.2-.23.266-.397.4-.66.133-.267.066-.497-.034-.694-.1-.2-.89-2.147-1.22-2.94-.32-.77-.647-.667-.89-.68-.23-.01-.497-.013-.763-.013-.267 0-.694.1-1.057.497-.363.397-1.387 1.357-1.387 3.307s1.42 3.833 1.617 4.1c.2.263 2.797 4.273 6.776 5.99.947.41 1.686.653 2.263.836.95.303 1.816.26 2.5.158.763-.114 2.35-.96 2.68-1.887.333-.927.333-1.72.233-1.887-.097-.167-.363-.267-.76-.463z" />
              </svg>
              WhatsApp
            </a>
            <a href="tel:+923270930991" className="social-btn call">
              📞 {isUr ? "ابھی کال کریں" : "Call Now"}
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="success-msg">
              <span>✅</span>
              <h3>{isUr ? "مشورہ بک ہو گیا!" : "Consultation Booked!"}</h3>
              <p>{isUr ? "شکریہ! ہم ۲۴ گھنٹے میں آپ سے رابطہ کریں گے۔" : "Thank you! We will contact you within 24 hours."}</p>
              <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", disease: "", message: "" }); }}>
                {isUr ? "دوبارہ بھیجیں" : "Book Another →"}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <h3>{isUr ? "مفت مشورہ فارم" : "Free Consultation Form"}</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>{isUr ? "آپ کا نام" : "Your Name"}</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder={isUr ? "محمد علی" : "Muhammad Ali"} />
                </div>
                <div className="form-group">
                  <label>{isUr ? "فون / واٹس ایپ" : "Phone / WhatsApp"}</label>
                  <input name="phone" value={form.phone} onChange={handle} required placeholder="+92-XXX-XXXXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label>{isUr ? "ای میل" : "Email"}</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>{isUr ? "بیماری یا مسئلہ" : "Disease / Problem"}</label>
                <select name="disease" value={form.disease} onChange={handle} required>
                  <option value="">{isUr ? "-- بیماری چنیں --" : "-- Select Disease --"}</option>
                  {diseases.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>{isUr ? "تفصیل" : "Message / Detail"}</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder={isUr ? "اپنی تکلیف بیان کریں..." : "Describe your condition..."} />
              </div>
              <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                {loading ? (isUr ? "⏳ بھیجا جا رہا ہے..." : "⏳ Sending...") : (isUr ? "📨 مشورہ بھیجیں" : "📨 Send Consultation Request")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}