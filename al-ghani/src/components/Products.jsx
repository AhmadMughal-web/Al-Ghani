import { useState } from "react";
import "./Products.css";

const categoriesEn = ["All", "Tonic", "Oil", "Powder", "Tablets", "Syrup"];
const categoriesUr = ["سب", "ٹانک", "تیل", "سفوف", "گولیاں", "شربت"];

const products = [
  {
    img: "/images/Majoon Muqawwi Bah.png",
    name: "Majoon Muqawwi Bah", ur: "معجون مقوی باہ",
    cat: "Tonic", catUr: "ٹانک", price: "PKR 850",
    descEn: "Premium vitality tonic for men",
    descUr: "مردوں کے لیے قوت ٹانک"
  },
  {
    img: "/images/Roghan Badam Shirin.png",
    name: "Roghan Badam Shirin", ur: "روغن بادام شیریں",
    cat: "Oil", catUr: "تیل", price: "PKR 650",
    descEn: "Pure sweet almond oil for health & hair",
    descUr: "صحت اور بالوں کے لیے خالص بادام روغن"
  },
  {
    img: "/images/Safoof Waj.jpeg",
    name: "Safoof Waj", ur: "سفوف واج",
    cat: "Powder", catUr: "سفوف", price: "PKR 450",
    descEn: "Digestive powder for stomach issues",
    descUr: "معدے کی تکلیف کے لیے سفوف"
  },
  {
    img: "/images/Habbe Mumsik Tilai.webp",
    name: "Habbe Mumsik Tilai", ur: "حب ممسک طلائی",
    cat: "Tablets", catUr: "گولیاں", price: "PKR 1200",
    descEn: "Gold-coated Unani tablets for strength",
    descUr: "طاقت کے لیے یونانی گولیاں"
  },
  {
    img: "/images/Sharbat Faulad.jpg",
    name: "Sharbat-e-Faulad", ur: "شربت فولاد",
    cat: "Syrup", catUr: "شربت", price: "PKR 520",
    descEn: "Iron-rich blood purifying syrup",
    descUr: "خون صاف کرنے کا آئرن شربت"
  },
  {
    img: "/images/Itrifal Kishneezi.jpeg",
    name: "Itrifal Kishneezi", ur: "اطریفل کشنیزی",
    cat: "Tonic", catUr: "ٹانک", price: "PKR 380",
    descEn: "Brain & eye tonic",
    descUr: "دماغ اور آنکھوں کا ٹانک"
  },
  {
    img: "/images/Roghan Kalonji.jpg",
    name: "Roghan Kalonji", ur: "روغن کلونجی",
    cat: "Oil", catUr: "تیل", price: "PKR 480",
    descEn: "Black seed oil — cure for every disease",
    descUr: "کلونجی کا تیل — ہر بیماری کی دوا"
  },
  {
    img: "/images/Safoof Behman.jpg",
    name: "Safoof Behman", ur: "سفوف بہمن",
    cat: "Powder", catUr: "سفوف", price: "PKR 320",
    descEn: "Strength & stamina powder",
    descUr: "قوت اور توانائی کا سفوف"
  },
  {
    img: "/images/Khamira Marwareed.png",
    name: "Khamira Marwareed", ur: "خمیرہ مروارید",
    cat: "Tonic", catUr: "ٹانک", price: "PKR 950",
    descEn: "Heart & brain strengthening electuary",
    descUr: "دل اور دماغ مضبوط کرنے کا خمیرہ"
  },
  {
    img: "/images/Arq Mako.webp",
    name: "Arq Mako", ur: "عرق مکوہ",
    cat: "Syrup", catUr: "شربت", price: "PKR 290",
    descEn: "Liver & kidney cleansing tonic",
    descUr: "جگر اور گردے صاف کرنے کا عرق"
  },
  {
    img: "/images/Habb-e-Kabid Naushadri.webp",
    name: "Habb-e-Kabid Naushadri", ur: "حب کبد نوشادری",
    cat: "Tablets", catUr: "گولیاں", price: "PKR 350",
    descEn: "Liver care tablets",
    descUr: "جگر کی تقویت کی گولیاں"
  },
  {
    img: "/images/Majoon Shabab Awar.jpg",
    name: "Majoon Shabab Awar", ur: "معجون شباب آور",
    cat: "Tonic", catUr: "ٹانک", price: "PKR 780",
    descEn: "Youth-restoring Unani formula",
    descUr: "جوانی لوٹانے کا یونانی فارمولہ"
  },
];

export default function Products({ lang }) {
  const isUr = lang === "ur";
  const [active, setActive] = useState("All");

  const categories = isUr ? categoriesUr : categoriesEn;
  const allLabel = isUr ? "سب" : "All";

  const filtered = active === "All" || active === "سب"
    ? products
    : products.filter(p => (isUr ? p.catUr : p.cat) === active);

  const handleCat = (cat) => {
    setActive(cat);
  };

  return (
    <section className="products" id="products" dir={isUr ? "rtl" : "ltr"}>
      <div className="section-title">
        <span className="tag">{isUr ? "ہماری ادویات" : "Our Medicines"}</span>
        <h2>{isUr ? "ہربل ادویات" : "Herbal Products"}</h2>
        {isUr && <span className="urdu-sub urdu">خالص — قدرتی — مؤثر</span>}
        <div className="divider" />
      </div>

      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${active === c || (c === allLabel && (active === "All" || active === "سب")) ? "active" : ""}`}
            onClick={() => handleCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.name}>
            <div className="product-img-wrap">
              <img
                src={p.img}
                alt={p.name}
                className="product-img"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=120&h=120&fit=crop"; }}
              />
            </div>
            <div className="product-cat">{isUr ? p.catUr : p.cat}</div>
            <h3 className="product-name">{isUr ? p.ur : p.name}</h3>
            <p className="product-desc">{isUr ? p.descUr : p.descEn}</p>
            <div className="product-footer">
              <span className="product-price">{p.price}</span>
              <a href="#contact" className="btn-order">
                {isUr ? "آرڈر کریں" : "Order Now"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}