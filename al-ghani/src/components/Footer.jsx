import "./Footer.css";

export default function Footer({ lang }) {
  const isUr = lang === "ur";

  return (
    <footer className="ftr" dir={isUr ? "rtl" : "ltr"}>
      <div className="ftr-i">
        <div className="ftr-top">
          <div>
            {isUr ? (
              <div className="ftr-logo-ar">الغنی دواخانہ</div>
            ) : (
              <>
                <div className="ftr-logo-ar">الغنی دواخانہ</div>
                <span className="ftr-logo-en">AL GHANI DAWA KHANA</span>
              </>
            )}
            <p className="ftr-about">
              {isUr
                ? "لاہور کا سب سے قابل اعتماد یونانی و ہربل دواخانہ۔ ۱۹۹۹ سے پاکستان کی خدمت میں — خالص، قدرتی اور مؤثر علاج۔"
                : "Lahore's most trusted Unani & Herbal medicine center. Serving Pakistan since 1999 with pure, natural, and effective treatments."}
            </p>
            <div className="ftr-hakeem">
              <span>👨‍⚕️</span>
              <div>
                <p>{isUr ? "حکیم وحید احمد" : "Hakeem Waheed Ahmad"}</p>
                <span>{isUr ? "ماہر یونانی حکیم" : "Expert Unani Practitioner"}</span>
              </div>
            </div>
            <div className="ftr-soc">
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://wa.me/923270930991" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" fill="white" width="22" height="22">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.79-1.867l-.486-.29-5.007 1.194 1.257-4.87-.317-.5A13.233 13.233 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.397-.2-2.35-1.16-2.715-1.29-.363-.133-.627-.2-.89.2-.267.397-1.03 1.29-1.26 1.557-.233.263-.463.297-.86.1-.397-.2-1.676-.618-3.192-1.97-1.18-1.053-1.976-2.353-2.207-2.75-.23-.397-.024-.61.174-.807.178-.177.397-.463.594-.694.2-.23.266-.397.4-.66.133-.267.066-.497-.034-.694-.1-.2-.89-2.147-1.22-2.94-.32-.77-.647-.667-.89-.68-.23-.01-.497-.013-.763-.013-.267 0-.694.1-1.057.497-.363.397-1.387 1.357-1.387 3.307s1.42 3.833 1.617 4.1c.2.263 2.797 4.273 6.776 5.99.947.41 1.686.653 2.263.836.95.303 1.816.26 2.5.158.763-.114 2.35-.96 2.68-1.887.333-.927.333-1.72.233-1.887-.097-.167-.363-.267-.76-.463z" />
                </svg>
              </a>
              <a href="tel:+923270930991">📞</a>
            </div>
          </div>

          <div className="ftr-col">
            <h4>{isUr ? "فوری لنک" : "Quick Links"}</h4>
            <ul>
              <li><a href="#home">{isUr ? "ہوم" : "Home"}</a></li>
              <li><a href="#diseases">{isUr ? "علاج" : "Treatments"}</a></li>
              <li><a href="#products">{isUr ? "ادویات" : "Products"}</a></li>
              <li><a href="#about">{isUr ? "ہمارے بارے میں" : "About Us"}</a></li>
              <li><a href="#contact">{isUr ? "رابطہ" : "Contact"}</a></li>
            </ul>
          </div>

          <div className="ftr-col">
            <h4>{isUr ? "علاج" : "Treatments"}</h4>
            <ul>
              <li><a href="#diseases">{isUr ? "ذیابیطس" : "Diabetes"}</a></li>
              <li><a href="#diseases">{isUr ? "جوڑوں کا درد" : "Joint Pain"}</a></li>
              <li><a href="#diseases">{isUr ? "دل و بلڈ پریشر" : "Heart & BP"}</a></li>
              <li><a href="#diseases">{isUr ? "مردانہ صحت" : "Men's Health"}</a></li>
              <li><a href="#diseases">{isUr ? "جلد و بال" : "Skin & Hair"}</a></li>
            </ul>
          </div>

          <div className="ftr-col">
            <h4>{isUr ? "رابطہ" : "Contact Us"}</h4>
            <ul>
              <li><a href="#">📍 {isUr ? "لاہور، پاکستان" : "Lahore, Pakistan"}</a></li>
              <li><a href="tel:+923270930991">📞 +92-327-0930991</a></li>
              <li><a href="mailto:hakeemwaheedahmadghani@gmail.com">✉️ {isUr ? "ای میل کریں" : "Email Us"}</a></li>
            </ul>
          </div>
        </div>

        <div className="ftr-bot">
          <p className="ftr-copy">
            {isUr
              ? "© ۲۰۲۶ الغنی دواخانہ۔ تمام حقوق محفوظ ہیں۔ | لاہور، پاکستان میں بنایا گیا ❤️"
              : "© 2026 Al Ghani Dawa Khana. All rights reserved. | Made with ❤️ in Lahore, Pakistan"}
          </p>
          <p style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl", fontSize: ".82rem", color: "#555" }}>
            الغنی دواخانہ — خدمت خلق، خدمت خدا
          </p>
        </div>
      </div>
    </footer>
  );
}