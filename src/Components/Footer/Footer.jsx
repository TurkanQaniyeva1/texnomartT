import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaTelegramPlane, FaTiktok} from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import "../Footer/footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Şirkət</h3>
          <ul>
            <li>Haqqımızda</li>
            <li>Mağazalar</li>
            <li>Servislər</li>
            <li>Korporativ satışlar</li>
            <li>Əlaqə</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Dəstək</h3>
          <ul>
            <li>Tez-tez verilən suallar</li>
            <li>Xəbərlər və kampaniyalar</li>
            <li>Şikayət və təkliflər</li>
            <li>Çatdırılma və quraşdırılma</li>
            <li>Geri qaytarma siyasəti</li>
            <li>Konfidensiallıq siyasəti</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Bizi izləyin</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
            <FaTelegramPlane />
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="phone-number">
          <img src="https://texnomart.az/wp-content/uploads/2021/10/call-center.svg" alt="" />
          <div className="footer-text">
            © 2021 Texnomart.az - Hüquqlarınız qorunur.
            <img src="https://texnomart.az/wp-content/uploads/2022/01/smartbee.svg" alt="" />
          </div>
        </div>
        <div className="payment-icons">
          <img src="https://texnomart.az/wp-content/uploads/2021/10/visa-01.svg" alt="Visa" />
          <img src="https://texnomart.az/wp-content/uploads/2021/10/mastercard.svg" alt="MasterCard" />
          <img
            src="https://texnomart.az/wp-content/uploads/2022/09/texnomart-JCB-02-kr6pyst1b4z8aqoj0u52.png"
            alt="JCB"
          />
        </div>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <MdKeyboardArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;

